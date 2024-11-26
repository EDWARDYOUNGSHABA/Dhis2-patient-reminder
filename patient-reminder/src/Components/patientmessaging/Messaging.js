import React, { useState } from 'react';
import { Button, Input, TextArea } from '@dhis2/ui';
import './Messaging.css';

const Messaging = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState(null);

    const handleSendSMS = async () => {
        if (!phoneNumber || !message) {
            alert('Phone number and message are required!');
            return;
        }

        try {
            const res = await fetch('http://localhost:3000/send-sms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    to: phoneNumber,
                    message: message,
                }),
            });

            const data = await res.json();
            if (res.ok) {
                setResponse(`Message sent successfully! SID: ${data.sid}`);
            } else {
                setResponse(`Error: ${data.error}`);
            }
        } catch (error) {
            console.error('Failed to send message:', error);
            setResponse('An error occurred while sending the message.');
        }
    };

    return (
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
        </div>
    );
};

export default Messaging;
