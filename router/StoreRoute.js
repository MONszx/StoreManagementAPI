const express = require('express');
const router = express.Router();
const Store = require('../model/StoreModel');

// GET all store

router.get(`/`, async (request, response) => {
    try {
        const stores = await Store.find();
        response.json(stores);
    } catch (error) {
        response.status(500).json({ error: 'An error occurred' });
    }
});

module.exports = router;

