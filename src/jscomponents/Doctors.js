import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../csscomponents/Staff.css';

function Doctors() {
    const [doctors, setDoctors] = useState([]);
    const [newDoctor, setNewDoctor] = useState({
        name: '',
        specialization: '',
        experience: '',
        contact: ''
    });

    useEffect(() => {
        fetchDoctors();
    }, []);

    const fetchDoctors = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/doctors');
            setDoctors(response.data);
        } catch (error) {
            console.error('Error fetching doctors:', error);
        }
    };

    const handleInputChange = (e) => {
        setNewDoctor({
            ...newDoctor,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/doctors', newDoctor);
            setNewDoctor({
                name: '',
                specialization: '',
                experience: '',
                contact: ''
            });
            fetchDoctors();
        } catch (error) {
            console.error('Error adding doctor:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/doctors/${id}`);
            fetchDoctors();
        } catch (error) {
            console.error('Error deleting doctor:', error);
        }
    };

    return (
        <div className="staff-container">
            <h2>Doctors Management</h2>
            
            <div className="add-form">
                <h3>Add New Doctor</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={newDoctor.name}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="specialization"
                        placeholder="Specialization"
                        value={newDoctor.specialization}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="number"
                        name="experience"
                        placeholder="Years of Experience"
                        value={newDoctor.experience}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="contact"
                        placeholder="Contact"
                        value={newDoctor.contact}
                        onChange={handleInputChange}
                        required
                    />
                    <button type="submit">Add Doctor</button>
                </form>
            </div>

            <div className="list-container">
                <h3>Doctors List</h3>
                <div className="staff-list">
                    {doctors.map((doctor) => (
                        <div key={doctor._id} className="staff-card">
                            <h4>{doctor.name}</h4>
                            <p>Specialization: {doctor.specialization}</p>
                            <p>Experience: {doctor.experience} years</p>
                            <p>Contact: {doctor.contact}</p>
                            <button 
                                onClick={() => handleDelete(doctor._id)}
                                className="delete-btn"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Doctors;
