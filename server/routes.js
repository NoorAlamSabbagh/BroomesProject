// server/routes.js
const express = require('express');
const router = express.Router();
const db = require('./db');

router.post('/register', async (req, res) => {
    try {
        const userData = req.body;
        const insertedUser = await db.insertUser(userData);

        res.status(201).json({ message: 'User registered successfully', user: insertedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
