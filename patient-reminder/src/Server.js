require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const twilio = require('twilio');
const axios = require('axios'); // Import Axios

// Load Twilio credentials from environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API endpoint to send SMS
app.post('/send-sms', async (req, res) => {
    const { to, message, apiUrl } = req.body;

    // Validate input
    if (!to || !message) {
        return res.status(400).json({ error: 'Phone number and message are required.' });
    }

    let additionalData = '';
    if (apiUrl) {
        try {
            // Fetch additional data using Axios
            const response = await axios.get(apiUrl);
            additionalData = `\n\nAdditional Info:\n${JSON.stringify(response.data, null, 2)}`;
        } catch (error) {
            console.error('Error fetching data from API:', error.message);
            return res.status(500).json({ error: 'Failed to fetch data from the provided API URL.' });
        }
    }

    // Combine the message with additional data if available
    const fullMessage = `${message}${additionalData}`;

    // Send SMS using Twilio
    client.messages
        .create({
            body: fullMessage,
            from: process.env.TWILIO_PHONE_NUMBER, // Twilio phone number
            to: to,
        })
        .then((msg) => {
            console.log(`Message sent: ${msg.sid}`);
            res.status(200).json({ success: 'Message sent successfully!', sid: msg.sid });
        })
        .catch((error) => {
            console.error('Error sending message:', error.message);
            res.status(500).json({ error: 'Failed to send message.' });
        });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
