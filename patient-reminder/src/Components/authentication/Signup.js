import React, { useState } from 'react';

const Signup = () => {
    // State variables for form inputs
    const [username, setUsername] = useState('');
    const [sex, setSex] = useState('');
    const [department, setDepartment] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Handle input change for each field
    const handleInputChange = (setter) => (event) => {
        setter(event.target.value);
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Basic validation
        if (!username || !sex || !department || !email || !password) {
            setError('All fields are required.');
            return;
        }

        // Handle successful form submission
        console.log('Form submitted with data:', { username, sex, department, email, password });

        // Clear the form (optional)
        setUsername('');
        setSex('');
        setDepartment('');
        setEmail('');
        setPassword('');
        setError('');
    };

    return (
        <div style={{ backgroundColor: '#388E3C', padding: '20px', maxWidth: '500px', borderRadius: '5px', color: 'white', textAlign: 'center', margin: 'auto' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Sign Up Page</h2>
            <p>Welcome! Please complete the form to create an account.</p>

            {error && <div style={{ color: 'red', marginBottom: '15px' }}>{error}</div>}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={handleInputChange(setUsername)}
                    style={{ padding: '10px', margin: '5px 0', borderRadius: '4px' }}
                />
                <input
                    type="text"
                    placeholder="Sex"
                    value={sex}
                    onChange={handleInputChange(setSex)}
                    style={{ padding: '10px', margin: '5px 0', borderRadius: '4px' }}
                />
                <input
                    type="text"
                    placeholder="Department"
                    value={department}
                    onChange={handleInputChange(setDepartment)}
                    style={{ padding: '10px', margin: '5px 0', borderRadius: '4px' }}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleInputChange(setEmail)}
                    style={{ padding: '10px', margin: '5px 0', borderRadius: '4px' }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleInputChange(setPassword)}
                    style={{ padding: '10px', margin: '5px 0', borderRadius: '4px' }}
                />
                <button type="submit" style={{ padding: '10px', marginTop: '15px', backgroundColor: '#81C784', border: 'none', borderRadius: '4px', color: 'white' }}>
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default Signup;
