const express = require('express');
const router = express.Router();
const User = require('../model/UserModel');
const bcrypt = require('bcrypt');

// GET all users

// router.get(`/`, async (request, response) => {
//     try {
//         const users = await User.find();
//         response.json(users);
//     } catch (error) {
//         response.status(500).json({ error: 'An error occurred' });
//     }
// });

//POST User Registration
router.post("/", async (request, response) => {
    try {
        const Username = request.body.Username;
        const Email = request.body.Email;
        const Password = request.body.Password;
        const Role = request.body.Role;

        // Check if user with the same email already exists
        const existingUser = await User.findOne({ Email });
        if (existingUser) {
            return response.status(400).json({ error: 'User with this email already exists' });
        }

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(Password, saltRounds);

        // Retrieve the default role for the user (e.g., "User" or "Admin")
        const defaultRole = "User"; // or "Admin", depending on your logic

        // Create a new user
        const newUser = new User({
            Username,
            Email,
            Password: hashedPassword,
            Role: defaultRole
        });

        // Save the user to the database
        const savedUser = await newUser.save();

        response.status(201).json({ message: 'User registered successfully', user: savedUser });
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Error occurred while registering user' });
    }
});

module.exports = router;

