const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Patient Schema
const patientSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    sex: String,
    phone: String,
    address: String,
});

const Patient = mongoose.model('Patient', patientSchema);

// POST route to add a new patient
router.post('/add', async (req, res) => {
    try {
        const { name, age, email, sex, phone, address } = req.body;
        const newPatient = new Patient({ name, age, email, sex, phone, address });
        await newPatient.save();
        res.status(201).json({ message: 'Patient added successfully!', patient: newPatient });
    } catch (error) {
        res.status(400).json({ message: 'Error adding patient', error });
    }
});

// GET route to fetch all patients
router.get('/', async (req, res) => {
    try {
        const patients = await Patient.find();
        res.status(200).json(patients);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching patients', error });
    }
});

module.exports = router;
