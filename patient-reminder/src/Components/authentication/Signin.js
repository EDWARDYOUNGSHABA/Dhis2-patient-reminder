import React, { useState } from 'react';

const Signin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // This will handle input changes for username and password
    const handleInputChange = (setter) => (event) => {
        setter(event.target.value);
    };

    // Prevent form submission reload
    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate to make sure both fields are not empty
        if (!username || !password) {
            setError('Both fields are required.');
            return;
        }

        // If valid, proceed to submit the form
        console.log('Form submitted with data:', { username, password });

        // Clear the form
        setUsername('');
        setPassword('');
        setError('');
    };

    // Example color scheme (you can define your own or use a library like Material-UI or Tailwind CSS)
    const colors = {
        green500: '#4CAF50', // A shade of green
        white: '#FFFFFF',    // White color
        red: '#F44336',      // Red for errors
    };

    return (
        <div style={{ backgroundColor: colors.green500, padding: '20px', borderRadius: '5px', maxWidth: '400px', margin: 'auto' }}>
            <h1 style={{ color: colors.white, textAlign: 'center' }}>Sign In</h1>
            
            {error && <div style={{ color: colors.red, marginBottom: '15px', textAlign: 'center' }}>{error}</div>}
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={handleInputChange(setUsername)}
                    style={{ padding: '10px', margin: '10px 0', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleInputChange(setPassword)}
                    style={{ padding: '10px', margin: '10px 0', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <button
                    type="submit"
                    style={{
                        padding: '10px', 
                        marginTop: '10px', 
                        backgroundColor: '#81C784', 
                        border: 'none', 
                        borderRadius: '4px', 
                        color: 'white', 
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}
                >
                    Sign In
                </button>
            </form>
        </div>
    );
}

export default Signin;
