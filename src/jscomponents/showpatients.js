import React, { useEffect, useState } from 'react';
import '../csscomponents/patients.css';


const ShowPatients = () => {
    const [patients, setPatients] = useState([]);
    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await fetch('http://localhost:5000/patients');
                const data = await response.json();
                setPatients(data);
            } catch (error) {
                console.error('Error fetching patients:', error);
            }
        };

        fetchPatients();
    }, []);

    return (
        <div className="patients">
            <div className="patnav">
                <nav>
                    <ul>
                        <li>Patients List</li>
                    </ul>
                </nav>
            </div>
            <div className="patformdiv">
                <div className="form">
                    <h1>All Patients</h1>
                    <hr />
                    <div className="patient-list">
                        {patients.length === 0 ? (
                            <p>No patients found</p>
                        ) : (
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>Email</th>
                                        <th>Sex</th>
                                        <th>Phone</th>
                                        <th>Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {patients.map((patient) => (
                                        <tr key={patient._id}>
                                            <td>{patient.name}</td>
                                            <td>{patient.age}</td>
                                            <td>{patient.email}</td>
                                            <td>{patient.sex}</td>
                                            <td>{patient.phone}</td>
                                            <td>{patient.address}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowPatients;