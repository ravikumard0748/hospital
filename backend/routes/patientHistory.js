const express = require('express');
const router = express.Router();
const PatientHistory = require('../models/PatientHistory');

// Get all patient histories
router.get('/', async (req, res) => {
    try {
        const histories = await PatientHistory.find().sort({ admitDate: -1 });
        res.json(histories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add a new patient history
router.post('/', async (req, res) => {
    try {
        const history = new PatientHistory({
            patientName: req.body.patientName,
            admitDate: new Date(),
            isActive: true
        });
        await history.save();
        res.status(201).json(history);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update patient history (for discharge)
router.put('/:id/discharge', async (req, res) => {
    try {
        const history = await PatientHistory.findById(req.params.id);
        if (!history) {
            return res.status(404).json({ message: 'Patient history not found' });
        }
        
        history.dischargeDate = new Date();
        history.isActive = false;
        await history.save();
        
        res.json(history);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
