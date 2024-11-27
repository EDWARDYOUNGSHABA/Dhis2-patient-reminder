import React, { useState } from 'react';
import PatientData from "../datareport/PatientData";
import './Messaging.css';

const Messaging = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
        const patient = PatientData.find(
            (p) =>
                p.id === event.target.value ||
                p.name.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setSelectedPatient(patient || null);
        setPhoneNumber(patient ? patient.phone : ''); // Set phone number if patient is found
    };

    const handleSendSMS = async () => {
        if (!phoneNumber || !message) {
            setStatus('Please enter a valid phone number and message.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/send-sms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    to: phoneNumber, // Pass the typed phone number
                    message: message,
                }),
            });

            const data = await response.json();
            if (data.success) {
                setStatus('Message sent successfully!');
            } else {
                setStatus('Failed to send the message.');
            }
        } catch (error) {
            console.error('Error sending SMS:', error);
            setStatus('Error sending SMS.');
        }
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
                </div>
            )}

            <input
                id="phoneNumberInput"
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)} // Allow manual input of phone number
                className="phone-input"
            />
            <textarea
                id="messageTextarea"
                placeholder="Message"
                className="message-textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
                id="sendButton"
                className="send-button"
                onClick={handleSendSMS}
            >
                Send SMS
            </button>

            {status && <p className="status-message">{status}</p>}
        </div>
    );
};
<<<<<<< HEAD

export default Messaging;
=======
export default Messaging;

>>>>>>> 06dbe7032392688db61c1141933380337276d60a
