import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [sex, setSex] = useState('');
    const [department, setDepartment] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleInputChange = (setter) => (event) => {
        setter(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validation
        if (!username || !sex || !department || !email || !password) {
            setError('All fields are required.');
            return;
        }
        setError('');

        // Payload for DHIS2 API
        const payload = {
            userCredentials: {
                username: username,
                password: password,
            },
            surname: department, // Assuming department maps to surname for simplicity
            email: email,
            gender: sex,
        };

        try {
            const response = await fetch('https://data.research.dhis2.org/in5320/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Basic ' + btoa('admin:district'), // Update with valid credentials
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('User created:', data);
                setSuccess('User registered successfully!');
                setUsername('');
                setSex('');
                setDepartment('');
                setEmail('');
                setPassword('');
            } else {
                const errorData = await response.json();
                console.error('Error response:', errorData);
                setError(`Failed to register user: ${errorData.message || 'Unknown error'}`);
            }
        } catch (error) {
            console.error('Network or server error:', error);
            setError('An error occurred while submitting the registration.');
        }
    };

    return (
        <div className="signup-container">
            <h2 className="signup-title">Sign Up</h2>
            <p className="signup-description">Create your account to get started!</p>

            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}

            <form onSubmit={handleSubmit} className="signup-form">
                <label className="signup-label">Username</label>
                <input
                    type="text"
                    placeholder="Enter Username"
                    value={username}
                    onChange={handleInputChange(setUsername)}
                    className="input-field"
                />

                <label className="signup-label">Sex</label>
                <input
                    type="text"
                    placeholder="Sex"
                    value={sex}
                    onChange={handleInputChange(setSex)}
                    className="input-field"
                />

                <label className="signup-label">Department</label>
                <input
                    type="text"
                    placeholder="Enter Department"
                    value={department}
                    onChange={handleInputChange(setDepartment)}
                    className="input-field"
                />

                <label className="signup-label">Email</label>
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={handleInputChange(setEmail)}
                    className="input-field"
                />

                <label className="signup-label">Password</label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={handleInputChange(setPassword)}
                    className="input-field"
                />

                <button type="submit" className="submit-button">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
