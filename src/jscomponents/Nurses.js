import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../csscomponents/Staff.css';

function Nurses() {
    const [nurses, setNurses] = useState([]);
    const [newNurse, setNewNurse] = useState({
        name: '',
        department: '',
        shift: '',
        contact: ''
    });

    useEffect(() => {
        fetchNurses();
    }, []);

    const fetchNurses = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/nurses');
            setNurses(response.data);
        } catch (error) {
            console.error('Error fetching nurses:', error);
        }
    };

    const handleInputChange = (e) => {
        setNewNurse({
            ...newNurse,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/nurses', newNurse);
            setNewNurse({
                name: '',
                department: '',
                shift: '',
                contact: ''
            });
            fetchNurses();
        } catch (error) {
            console.error('Error adding nurse:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/nurses/${id}`);
            fetchNurses();
        } catch (error) {
            console.error('Error deleting nurse:', error);
        }
    };

    return (
        <div className="staff-container">
            <h2>Nurses Management</h2>
            
            <div className="add-form">
                <h3>Add New Nurse</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={newNurse.name}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="department"
                        placeholder="Department"
                        value={newNurse.department}
                        onChange={handleInputChange}
                        required
                    />
                    <select
                        name="shift"
                        value={newNurse.shift}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Select Shift</option>
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                        <option value="Night">Night</option>
                    </select>
                    <input
                        type="text"
                        name="contact"
                        placeholder="Contact"
                        value={newNurse.contact}
                        onChange={handleInputChange}
                        required
                    />
                    <button type="submit">Add Nurse</button>
                </form>
            </div>

            <div className="list-container">
                <h3>Nurses List</h3>
                <div className="staff-list">
                    {nurses.map((nurse) => (
                        <div key={nurse._id} className="staff-card">
                            <h4>{nurse.name}</h4>
                            <p>Department: {nurse.department}</p>
                            <p>Shift: {nurse.shift}</p>
                            <p>Contact: {nurse.contact}</p>
                            <button 
                                onClick={() => handleDelete(nurse._id)}
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

export default Nurses;
