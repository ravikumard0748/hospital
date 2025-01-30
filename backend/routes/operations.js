const express = require('express');
const router = express.Router();
const Operation = require('../models/Operation');

// Get all operations
router.get('/', async (req, res) => {
    try {
        const operations = await Operation.find().sort({ createdAt: -1 });
        res.json(operations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add a new operation
router.post('/', async (req, res) => {
    try {
        const operation = new Operation(req.body);
        await operation.save();
        res.status(201).json(operation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update an operation
router.put('/:id', async (req, res) => {
    try {
        const operation = await Operation.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!operation) {
            return res.status(404).json({ message: 'Operation not found' });
        }
        res.json(operation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete an operation
router.delete('/:id', async (req, res) => {
    try {
        const operation = await Operation.findByIdAndDelete(req.params.id);
        if (!operation) {
            return res.status(404).json({ message: 'Operation not found' });
        }
        res.json({ message: 'Operation deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
