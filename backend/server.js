const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db'); // Connect to DB
const patientRoutes = require('./patient');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/patients', patientRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
