const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db'); // Connect to DB
const patientRoutes = require('./patient');
const staffRoutes = require('./routes/staffRoutes');
const operationRoutes = require('./routes/operations');
const patientHistoryRoutes = require('./routes/patientHistory');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/patients', patientRoutes);
app.use('/api', staffRoutes);
app.use('/api/operations', operationRoutes);
app.use('/api/patient-history', patientHistoryRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
