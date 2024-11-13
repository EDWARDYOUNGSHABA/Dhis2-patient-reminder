import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (setter) => (event) => {
        setter(event.target.value);
    };

    // Submission and credential validation
    const handleSubmit = (event) => {
        event.preventDefault();

        // Ensure fields are not empty
        if (!username || !password) {
            setError('Both fields are required.');
            return;
        }

        // Check credentials
        if (username === 'admin' && password === 'district') {
            // Save token to localStorage to indicate the user is authenticated
            localStorage.setItem('authToken', 'authenticated');

            // Clear fields and error, then navigate to a protected route
            setUsername('');
            setPassword('');
            setError('');
            navigate('/'); // Navigate to the home page or any protected page
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div
            style={{
                padding: '20px',
                width: '600px',
                borderRadius: '5px',
                color: 'black',
                textAlign: 'center',
                margin: '50px auto',
                border: '1px solid grey', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
            }}
        >
            <form onSubmit={handleSubmit} style={{ padding: '20px', borderRadius: '10px', width: '500px', margin: '50px auto' }}>
                <h2 style={{ color: 'black', textAlign: 'center' }}>Sign In</h2>

                {error && (
                    <div style={{ color: 'red', marginBottom: '10px' }}>
                        {error}
                    </div>
                )}
                
                <label style={{ display: 'block', marginBottom: '10px', textAlign: 'start' }}>
                    <div style={{ fontWeight: 'bold' }}>Username:</div>
                    <input
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={handleInputChange(setUsername)}
                        required
                        style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '5px',
                            border: '1px solid black'
                        }}
                    />
                </label>
                
                <label style={{ display: 'block', marginBottom: '10px', textAlign: 'start' }}>
                    <div style={{ fontWeight: 'bold' }}>Password:</div>
                    <input
                        type="password"
                        placeholder="********"
                        value={password}
                        onChange={handleInputChange(setPassword)}
                        required
                        style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '5px',
                            border: '1px solid black'
                        }}
                    />
                </label>
                
                <button
                    type="submit"
                    style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        width: '100%',
                        padding: '10px',
                        backgroundColor: '#3498DB',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Login
                </button>

                <div style={{ marginTop: '20px' }}>
                    <span>Don't have an account? </span>
                    <a
                        href="/signup" 
                        style={{
                            color: '#28a745',
                            fontWeight: 'bold',
                        }}
                    >
                        Create account
                    </a>
                </div>
            </form>
        </div>
    );
};

export default Signin;
