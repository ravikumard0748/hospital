const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Patient Schema
const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    diagnosis: {
        type: String,
        required: true
    }
});

const Patient = mongoose.model('Patient', patientSchema);

// POST route to add a new patient
router.post('/', async (req, res) => {
    try {
        const newPatient = new Patient(req.body);
        await newPatient.save();
        res.status(201).json(newPatient);
    } catch (error) {
        res.status(400).json({ message: 'Error adding patient', error: error.message });
    }
});

// GET route to fetch all patients
router.get('/', async (req, res) => {
    try {
        const patients = await Patient.find();
        res.status(200).json(patients);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching patients', error: error.message });
    }
});

// DELETE route to remove a patient
router.delete('/:id', async (req, res) => {
    try {
        await Patient.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Patient deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting patient', error: error.message });
    }
});

module.exports = router;
