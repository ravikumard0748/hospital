const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');
const Nurse = require('../models/Nurse');
const Department = require('../models/Department');

// Doctor routes
router.post('/doctors', async (req, res) => {
    try {
        const doctor = new Doctor(req.body);
        await doctor.save();
        res.status(201).json(doctor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/doctors', async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/doctors/:id', async (req, res) => {
    try {
        await Doctor.findByIdAndDelete(req.params.id);
        res.json({ message: 'Doctor deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Nurse routes
router.post('/nurses', async (req, res) => {
    try {
        const nurse = new Nurse(req.body);
        await nurse.save();
        res.status(201).json(nurse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/nurses', async (req, res) => {
    try {
        const nurses = await Nurse.find();
        res.json(nurses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/nurses/:id', async (req, res) => {
    try {
        await Nurse.findByIdAndDelete(req.params.id);
        res.json({ message: 'Nurse deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Department routes
router.post('/departments', async (req, res) => {
    try {
        const department = new Department(req.body);
        await department.save();
        res.status(201).json(department);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/departments', async (req, res) => {
    try {
        const departments = await Department.find();
        res.json(departments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/departments/:id', async (req, res) => {
    try {
        await Department.findByIdAndDelete(req.params.id);
        res.json({ message: 'Department deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
