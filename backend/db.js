const mongoose = require('mongoose');

// Use the 127.0.0.1 format for the connection string
mongoose.connect('mongodb://127.0.0.1:27017/hospital');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});
