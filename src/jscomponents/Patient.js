import React, { useState } from 'react';
import '../csscomponents/patient.css';

const Patient = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [sex, setSex] = useState('');

    const handlesubmit = async (e) => {
        e.preventDefault();

        const patientData = {
            name,
            age,
            address,
            phone,
            email,
            sex,
        };

        try {
            const response = await fetch('http://localhost:5000/patients/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(patientData),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error adding patient:', error);
        }
    };

    return (
        <div className="patients">
            <div className="patnav">
                <nav>
                    <ul>
                        <li>Patients</li>
                    </ul>
                </nav>
            </div>
            <div className="patformdiv">
                <div className="form">
                    <h1>Add Patient</h1>
                    <hr />
                    <form onSubmit={handlesubmit}>
                        <label>Name</label>
                        <br />
                        <input type="text" onChange={(e) => setName(e.target.value)} />
                        <br />
                        <label>Age</label>
                        <br />
                        <input type="number" onChange={(e) => setAge(e.target.value)} />
                        <br />
                        <label>Email</label>
                        <br />
                        <input type="email" onChange={(e) => setEmail(e.target.value)} />
                        <br />
                        <label>Sex</label>
                        <br />
                        <input type="text" onChange={(e) => setSex(e.target.value)} />
                        <br />
                        <label>Phone</label>
                        <br />
                        <input type="number" onChange={(e) => setPhone(e.target.value)} />
                        <br />
                        <label>Address</label>
                        <br />
                        <input type="text" onChange={(e) => setAddress(e.target.value)} />
                        <br />
                        <button id="bt" type="submit">Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Patient;
