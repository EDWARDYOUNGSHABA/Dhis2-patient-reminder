
import React, { useState } from 'react';
import { NoticeBox, colors, Button, Box } from '@dhis2/ui';

const Signin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (setter) => (event) => {
        setter(event.target.value);
    };

    // submission checking
    const handleSubmit = (event) => {
        event.preventDefault();

        // making sure their not empty
        if (!username || !password) {
            setError('Both fields are required.');
            return;
        }

        console.log('Form submitted with data:', { username, password });

        setUsername('');
        setPassword('');
        setError('');
    };

    return (
        <div
        style={{
            padding: '20px',
            width: '600px',
            borderRadius: '5px',
            color: 'black',
            textAlign: 'center',
            margin: ' 50px',
            border: '1px solid grey', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        }}>
            <form onSubmit={handleSubmit} style={{
                padding: '20px', 
                borderRadius: '10px', 
                width: '500px', 
                margin: '50px'}}>
                <h2 style={{ color: colors.black,  height: '50px',textAlign: 'center' }}>Signin</h2>

                {error && (
                    <NoticeBox error>{error}</NoticeBox>
                )}
                <Box marginBottom="12px">
                    <label style={{ display: 'block', marginBottom: '4px', textAlign: 'start' }}>
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
                                border: `1px solid black`
                            }}
                        />
                    </label>
                </Box>

                <Box marginBottom="10px">
                    <label style={{ display: 'block', marginBottom: '4px', textAlign: 'start' }}>
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
                                border: `1px solid black`
                            }}
                        /> </label>
                </Box>

                <Button
                    type="submit"
                    style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        width: '100%',
                        padding: '10px',
                        backgroundColor: '#3498DB'
                    }}>
                    Login
                </Button>

                <div style={{ marginTop: '20px' }}>
                    <span>Don't have an account? </span>
                    <a
                        href="/signup" 
                        style={{
                            color: colors.green600,
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