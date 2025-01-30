import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../csscomponents/Staff.css';

function Departments() {
    const [departments, setDepartments] = useState([]);
    const [newDepartment, setNewDepartment] = useState({
        name: '',
        head: '',
        capacity: '',
        description: ''
    });

    useEffect(() => {
        fetchDepartments();
    }, []);


    const fetchDepartments = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/departments');
            setDepartments(response.data);
        } catch (error) {
            console.error('Error fetching departments:', error);
        }
    };

    const handleInputChange = (e) => {
        setNewDepartment({
            ...newDepartment,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/departments', newDepartment);
            setNewDepartment({
                name: '',
                head: '',
                capacity: '',
                description: ''
            });
            fetchDepartments();
        } catch (error) {
            console.error('Error adding department:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/departments/${id}`);
            fetchDepartments();
        } catch (error) {
            console.error('Error deleting department:', error);
        }
    };

    return (
        <div className="staff-container">
            <h2>Departments Management</h2>
            
            <div className="add-form">
                <h3>Add New Department</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Department Name"
                        value={newDepartment.name}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="head"
                        placeholder="Department Head"
                        value={newDepartment.head}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="number"
                        name="capacity"
                        placeholder="Capacity"
                        value={newDepartment.capacity}
                        onChange={handleInputChange}
                        required
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={newDepartment.description}
                        onChange={handleInputChange}
                        required
                    />
                    <button type="submit">Add Department</button>
                </form>
            </div>

            <div className="list-container">
                <h3>Departments List</h3>
                <div className="staff-list">
                    {departments.map((department) => (
                        <div key={department._id} className="staff-card">
                            <h4>{department.name}</h4>
                            <p>Head: {department.head}</p>
                            <p>Capacity: {department.capacity}</p>
                            <p>Description: {department.description}</p>
                            <button 
                                onClick={() => handleDelete(department._id)}
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

export default Departments;