const mongoose = require('mongoose');

const nurseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    shift: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('nurse', nurseSchema);
