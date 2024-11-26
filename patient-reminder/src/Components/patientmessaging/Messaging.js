import React, { useState } from 'react';
import { Button, Input, TextArea } from '@dhis2/ui';
import './Messaging.css';
<<<<<<< HEAD

const Messaging = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState(null);

    const handleSendSMS = async () => {
        if (!phoneNumber || !message) {
            alert('Phone number and message are required!');
=======

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
>>>>>>> 531a5a8df431cd080fd7792aa53fad193a64b714
            return;
        }

        try {
<<<<<<< HEAD
            const res = await fetch('http://localhost:3000/send-sms', {
=======
            const response = await fetch('http://localhost:5000/send-sms', {
>>>>>>> 531a5a8df431cd080fd7792aa53fad193a64b714
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
<<<<<<< HEAD
                    to: phoneNumber,
=======
                    to: phoneNumber, // Pass the typed phone number
>>>>>>> 531a5a8df431cd080fd7792aa53fad193a64b714
                    message: message,
                }),
            });

<<<<<<< HEAD
            const data = await res.json();
            if (res.ok) {
                setResponse(`Message sent successfully! SID: ${data.sid}`);
            } else {
                setResponse(`Error: ${data.error}`);
            }
        } catch (error) {
            console.error('Failed to send message:', error);
            setResponse('An error occurred while sending the message.');
=======
            const data = await response.json();
            if (data.success) {
                setStatus('Message sent successfully!');
            } else {
                setStatus('Failed to send the message.');
            }
        } catch (error) {
            console.error('Error sending SMS:', error);
            setStatus('Error sending SMS.');
>>>>>>> 531a5a8df431cd080fd7792aa53fad193a64b714
        }
    };

    return (
<<<<<<< HEAD
        <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
            <h2>Send SMS</h2>
            <div style={{ marginBottom: '15px' }}>
                <Input
                    label="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.value)}
                    placeholder="+17753694417"
                />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <TextArea
                    label="Message"
                    value={message}
                    onChange={(e) => setMessage(e.value)}
                    placeholder="Enter your message here"
                />
            </div>
            <Button onClick={handleSendSMS} primary>
                Send Message
            </Button>
            {response && (
                <div style={{ marginTop: '20px', color: response.includes('Error') ? 'red' : 'green' }}>
                    {response}
                </div>
            )}
=======
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
>>>>>>> 531a5a8df431cd080fd7792aa53fad193a64b714
        </div>
    );
};

export default Messaging;