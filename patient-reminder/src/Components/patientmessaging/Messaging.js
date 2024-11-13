import React, { useState } from 'react';
import PatientData from "../datareport/PatientData.json";
import './Messaging.css';
const Messaging = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedPatient, setSelectedPatient] = useState(null);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
        const patient = PatientData.find(
            (p) => p.id === event.target.value || p.name.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setSelectedPatient(patient || null);
    };

    return (
        <div className="messaging-container">
            <h2 id="header" className="header">Remind Patients</h2>

            <input
                type="text"
                placeholder="Search by ID or Name"
                value={searchQuery}
                onChange={handleSearch}
                className="search-input"
            />

            {selectedPatient && (
                <div className="patient-info">
                    <p><strong>ID:</strong> {selectedPatient.id}</p>
                    <p><strong>Name:</strong> {selectedPatient.name}</p>
                    <p><strong>Phone:</strong> {selectedPatient.phone}</p>
                </div>
            )}

            <input
                id="phoneNumberInput"
                type="text"
                placeholder="Phone Number"
                value={selectedPatient ? selectedPatient.phone : ''}
                readOnly
                className="phone-input"
            />
            <textarea
                id="messageTextarea"
                placeholder="Message"
                className="message-textarea"
            ></textarea>
            <button
                id="sendButton"
                className="send-button"
            >
                Send SMS
            </button>
        </div>
    );
};

export default Messaging;
