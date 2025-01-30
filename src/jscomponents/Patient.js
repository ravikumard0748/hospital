import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../csscomponents/Staff.css';

function Patient() {
    const [patients, setPatients] = useState([]);
    const [newPatient, setNewPatient] = useState({
        name: '',
        age: '',
        gender: '',
        contact: '',
        address: '',
        diagnosis: ''
    });

    useEffect(() => {
        fetchPatients();
    }, []);

    const fetchPatients = async () => {
        try {
            const response = await axios.get('http://localhost:5000/patients');
            setPatients(response.data);
        } catch (error) {
            console.error('Error fetching patients:', error);
            alert('Error fetching patients. Please try again.');
        }
    };

    const handleInputChange = (e) => {
        setNewPatient({
            ...newPatient,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/patients', newPatient);
            console.log('Patient added:', response.data);
            
            // Create patient history entry
            await axios.post('http://localhost:5000/api/patient-history', {
                patientName: newPatient.name
            });

            setNewPatient({
                name: '',
                age: '',
                gender: '',
                contact: '',
                address: '',
                diagnosis: ''
            });
            fetchPatients();
            alert('Patient added successfully!');
        } catch (error) {
            console.error('Error adding patient:', error);
            alert('Error adding patient. Please try again.');
        }
    };

    const handleDelete = async (id, patientName) => {
        if (window.confirm('Are you sure you want to delete this patient?')) {
            try {
                await axios.delete(`http://localhost:5000/patients/${id}`);
                
                // Find and update patient history entry
                const historyResponse = await axios.get('http://localhost:5000/api/patient-history');
                const patientHistory = historyResponse.data.find(
                    history => history.patientName === patientName && history.isActive
                );
                
                if (patientHistory) {
                    await axios.put(`http://localhost:5000/api/patient-history/${patientHistory._id}/discharge`);
                }

                fetchPatients();
                alert('Patient deleted successfully!');
            } catch (error) {
                console.error('Error deleting patient:', error);
                alert('Error deleting patient. Please try again.');
            }
        }
    };

    return (
        <div className="staff-container">
            <div className="staff-form">
                <h2>Add New Patient</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={newPatient.name}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        value={newPatient.age}
                        onChange={handleInputChange}
                        required
                    />
                    <select
                        name="gender"
                        value={newPatient.gender}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <input
                        type="tel"
                        name="contact"
                        placeholder="Contact"
                        value={newPatient.contact}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={newPatient.address}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="diagnosis"
                        placeholder="Diagnosis"
                        value={newPatient.diagnosis}
                        onChange={handleInputChange}
                        required
                    />
                    <button type="submit">Add Patient</button>
                </form>
            </div>

            <div className="staff-list">
                <h2>Patient List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Contact</th>
                            <th>Address</th>
                            <th>Diagnosis</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient) => (
                            <tr key={patient._id}>
                                <td>{patient.name}</td>
                                <td>{patient.age}</td>
                                <td>{patient.gender}</td>
                                <td>{patient.contact}</td>
                                <td>{patient.address}</td>
                                <td>{patient.diagnosis}</td>
                                <td>
                                    <button className="delete-btn" onClick={() => handleDelete(patient._id, patient.name)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Patient;