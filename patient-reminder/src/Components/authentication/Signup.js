import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [sex, setSex] = useState('');
    const [department, setDepartment] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (setter) => (event) => {
        setter(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Make sure all information is filled
        if (!username || !sex || !department || !email || !password) {
            setError('All fields are required.');
            return;
        }

        console.log('Form submitted with data:', { username, sex, department, email, password });

        setUsername('');
        setSex('');
        setDepartment('');
        setEmail('');
        setPassword('');
        setError('');
    };

    return (
        <div className="signup-container">
            <h2 className="signup-title">Sign Up</h2>
            <p className="signup-description">Create your account to get started!</p>

            {error && <div className="error-message">{error}</div>}

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
