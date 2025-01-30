import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../csscomponents/Operations.css';

const Operations = () => {
    const [operations, setOperations] = useState([]);
    const [formData, setFormData] = useState({
        patientName: '',
        operationType: '',
        chiefDoctorName: '',
        patientContact: '',
        relativeDetails: ''
    });
    const [editingId, setEditingId] = useState(null);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetchOperations();
    }, []);

    const fetchOperations = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/operations');
            setOperations(response.data);
        } catch (error) {
            console.error('Error fetching operations:', error);
            alert('Error fetching operations');
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingId) {
                await axios.put(`http://localhost:5000/api/operations/${editingId}`, formData);
                alert('Operation updated successfully!');
            } else {
                await axios.post('http://localhost:5000/api/operations', formData);
                alert('Operation added successfully!');
            }
            setFormData({
                patientName: '',
                operationType: '',
                chiefDoctorName: '',
                patientContact: '',
                relativeDetails: ''
            });
            setEditingId(null);
            setShowForm(false);
            fetchOperations();
        } catch (error) {
            console.error('Error saving operation:', error);
            alert('Error saving operation details');
        }
    };

    const handleEdit = (operation) => {
        setFormData({
            patientName: operation.patientName,
            operationType: operation.operationType,
            chiefDoctorName: operation.chiefDoctorName,
            patientContact: operation.patientContact,
            relativeDetails: operation.relativeDetails
        });
        setEditingId(operation._id);
        setShowForm(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this operation?')) {
            try {
                await axios.delete(`http://localhost:5000/api/operations/${id}`);
                alert('Operation deleted successfully!');
                fetchOperations();
            } catch (error) {
                console.error('Error deleting operation:', error);
                alert('Error deleting operation');
            }
        }
    };

    return (
        <div className="operations-container">
            <div className="operations-header">
                <h2>{editingId ? 'Edit Operation' : 'Operations Management'}</h2>
                {!showForm && (
                    <button className="add-btn" onClick={() => setShowForm(true)}>
                        Add New Operation
                    </button>
                )}
            </div>

            {showForm ? (
                <form onSubmit={handleSubmit} className="operations-form">
                    <div className="form-group">
                        <label>Patient Name:</label>
                        <input
                            type="text"
                            name="patientName"
                            value={formData.patientName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Operation Type:</label>
                        <input
                            type="text"
                            name="operationType"
                            value={formData.operationType}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Chief Doctor Name:</label>
                        <input
                            type="text"
                            name="chiefDoctorName"
                            value={formData.chiefDoctorName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Patient Contact:</label>
                        <input
                            type="tel"
                            name="patientContact"
                            value={formData.patientContact}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Relative Details:</label>
                        <textarea
                            name="relativeDetails"
                            value={formData.relativeDetails}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-buttons">
                        <button type="submit" className="submit-btn">
                            {editingId ? 'Update Operation' : 'Add Operation'}
                        </button>
                        <button type="button" className="cancel-btn" onClick={() => {
                            setShowForm(false);
                            setEditingId(null);
                            setFormData({
                                patientName: '',
                                operationType: '',
                                chiefDoctorName: '',
                                patientContact: '',
                                relativeDetails: ''
                            });
                        }}>
                            Cancel
                        </button>
                    </div>
                </form>
            ) : (
                <div className="operations-list">
                    <table>
                        <thead>
                            <tr>
                                <th>Patient Name</th>
                                <th>Operation Type</th>
                                <th>Chief Doctor</th>
                                <th>Contact</th>
                                <th>Relative Details</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {operations.map((operation) => (
                                <tr key={operation._id}>
                                    <td>{operation.patientName}</td>
                                    <td>{operation.operationType}</td>
                                    <td>{operation.chiefDoctorName}</td>
                                    <td>{operation.patientContact}</td>
                                    <td>{operation.relativeDetails}</td>
                                    <td className="action-buttons">
                                        <button className="edit-btn" onClick={() => handleEdit(operation)}>
                                            Edit
                                        </button>
                                        <button className="delete-btn" onClick={() => handleDelete(operation._id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Operations;
