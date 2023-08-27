const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../model/UserModel');
const Store = require('../model/StoreModel');
// const authMiddleware  = require('../middleware/auth');
// const roleAuthMiddleware  = require('../middleware/roleAuth');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'IAMBATMAN'

// GET all users
// router.get('/store/:storeId', authMiddleware, roleAuthMiddleware(['User']), async (req, res) => {
//     // ... (code for store access)
// });


// router.get(`/`, async (request, response) => {
//     try {
//         const users = await User.find();
//         response.json(users);
//     } catch (error) {
//         response.status(500).json({ error: 'An error occurred' });
//     }
// });

// router.get("/authenticated", authMiddleware, (request, response) => {
//     response.json({ message: 'Authenticated access granted' });
// });

// router.get("/protected", authMiddleware, roleAuthMiddleware(['Admin']), (request, response) => {
//     // Route na ito ay protected at maaaring ma-access lang ng authenticated users
//     // na may role na "Admin"
//     response.json({ message: 'Admin access granted' });
// });

//POST User Registration
router.post("/reg", async (request, response) => {
    try {
        const Username = request.body.Username;
        const Email = request.body.Email;
        const Password = request.body.Password;
        const Role = request.body.Role;

        // Check if user with the same email already exists
        const existingUser = await User.findOne({ $or: [{ Email }, { Username }] });
        if (existingUser) {
            return response.status(400).json({ error: 'Username or Email has already exists' });
        }

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(Password, saltRounds);

        const defaultRole = "User"

        // Create a new user
        const newUser = new User({
            Username,
            Email,
            Password: hashedPassword,
            Role: defaultRole
        });
        
        // Save the user to the database
        const savedUser = await newUser.save();

         // Create and sign a JWT for the registered user
         const token = jwt.sign({ userId: savedUser._id, Role }, JWT_SECRET, { expiresIn: '1h' });

        response.status(201).json({ message: 'User registered successfully', user: savedUser });
    } catch (error) {
        // console.error(error);
        response.status(500).json({ error: 'Error occurred while registering user' });
    }
});

// router.post('/userRoles', authMiddleware, roleAuthMiddleware(['Admin']), (req, res) => {
//     // Implement your CRUD logic for user roles here
//     res.json({ message: 'Admin access granted for user roles CRUD' });
// });

module.exports = router;



