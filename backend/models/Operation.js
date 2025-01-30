const mongoose = require('mongoose');

const operationSchema = new mongoose.Schema({
    patientName: {
        type: String,
        required: true
    },
    operationType: {
        type: String,
        required: true
    },
    chiefDoctorName: {
        type: String,
        required: true
    },
    patientContact: {
        type: String,
        required: true
    },
    relativeDetails: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Operation', operationSchema);
