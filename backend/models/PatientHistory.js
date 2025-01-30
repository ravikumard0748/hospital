const mongoose = require('mongoose');

const patientHistorySchema = new mongoose.Schema({
    patientName: {
        type: String,
        required: true
    },
    admitDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    dischargeDate: {
        type: Date,
        default: null
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('PatientHistory', patientHistorySchema);
