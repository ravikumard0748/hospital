import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../csscomponents/PatientHistory.css';

const PatientHistory = () => {
    const [histories, setHistories] = useState([]);

    useEffect(() => {
        fetchHistories();
    }, []);

    const fetchHistories = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/patient-history');
            setHistories(response.data);
        } catch (error) {
            console.error('Error fetching patient histories:', error);
            alert('Error fetching patient histories');
        }
    };

    const formatDate = (date) => {
        if (!date) return 'Not Discharged';
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="patient-history-container">
            <div className="patient-history-header">
                <h2>Patient History</h2>
            </div>

            <div className="patient-history-list">
                <table>
                    <thead>
                        <tr>
                            <th>Patient Name</th>
                            <th>Admit Date</th>
                            <th>Discharge Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {histories.map((history) => (
                            <tr key={history._id}>
                                <td>{history.patientName}</td>
                                <td>{formatDate(history.admitDate)}</td>
                                <td>{formatDate(history.dischargeDate)}</td>
                                <td>
                                    <span className={`status-badge ${history.isActive ? 'active' : 'discharged'}`}>
                                        {history.isActive ? 'Active' : 'Discharged'}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PatientHistory;
