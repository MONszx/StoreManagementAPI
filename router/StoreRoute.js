const express = require('express');
const router = express.Router();
const User = require('../model/UserModel');
const Store = require('../model/StoreModel');
// const authMiddleware  = require('../middleware/auth');
// const roleAuthMiddleware  = require('../middleware/roleAuth');

// GET all store

router.get(`/allstore`, async (request, response) => {
    try {
        const stores = await Store.find();
        response.json(stores);
    } catch (error) {
        response.status(500).json({ error: 'An error occurred' });
    }
});


// GET store details by ID
router.get("/:storeId", async (request, response) => {
    try {
        const storeId = request.params.storeId;
        
        // Find the store by ID
        const store = await Store.findById(storeId);
        
        if (!store) {
            return response.status(404).json({ error: 'Store not found' });
        }

        response.json(store);
    } catch (error) {
        console.error('Error fetching store details:', error);
        response.status(500).json({ error: 'An error occurred while fetching store details' });
    }
});

//POST

router.post("/createStore", async (request, response) => {
    try {
        const Name = request.body.Name;
        const OwnerID = request.body.OwnerID;
        const Location = request.body.Location;

        // Check if user with the same email already exists
        const existingStore = await Store.findOne( { Name });
        if (existingStore) {
            return response.status(400).json({ error: 'Store name already existed' });
        }

        const newStore = new Store({
            Name,
            OwnerID,
            Location
        });
        
        // Save the user to the database
        const savedStore = await newStore.save();

        response.status(201).json({ message: 'User registered successfully'});
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Error occurred while registering store' });
    }
});

// PUT update store details by ID
router.put("/:storeId", async (request, response) => {
    try {
        const storeId = request.params.storeId;

        // Find the store by ID
        const store = await Store.findById(storeId);

        if (!store) {
            return response.status(404).json({ error: 'Store not found' });
        }

        // Update store details
        const updatedFields = request.body;
        Object.assign(store, updatedFields);
        await store.save();

        response.json({ message: 'Store details updated successfully' });
    } catch (error) {
        console.error('Error updating store details:', error);
        response.status(500).json({ error: 'An error occurred while updating store details' });
    }
});

// DELETE delete store by ID
router.delete("/:storeId", async (request, response) => {
    try {
        const storeId = request.params.storeId;

        // Find the store by ID
        const store = await Store.findById(storeId);

        if (!store) {
            return response.status(404).json({ error: 'Store not found' });
        }

        // Delete the store
        await store.remove();

        response.json({ message: 'Store deleted successfully' });
    } catch (error) {
        console.error('Error deleting store:', error);
        response.status(500).json({ error: 'An error occurred while deleting store' });
    }
});

module.exports = router;

