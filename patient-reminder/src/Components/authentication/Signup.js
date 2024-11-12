
// import { colors ,} from '@dhis2/ui';

// const Signup = () => {
//     const [username, setUsername] = useState('');
//     const [sex, setSex] = useState('');
//     const [department, setDepartment] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     // Handle input changes
//     const handleInputChange = (setter) => (event) => {
//         setter(event.target.value);
//     };

//     // submission check 
//     const handleSubmit = (event) => {
//         event.preventDefault();

//         // make sure all information is filled
//         if (!username || !sex || !department || !email || !password) {
//             setError('All fields are required.');
//             return;
//         }

    
//         console.log('Form submitted with data:', { username, sex, department, email, password });


//         setUsername('');
//         setSex('');
//         setDepartment('');
//         setEmail('');
//         setPassword('');
//         setError('');
//     };

//     return (
//         <div style={{ padding: '20px', Width: '500px' , borderRadius: '5px', color: 'black', textAlign: 'center', margin: 'auto' }}>
//             <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Sign Up </h2>
//             <p>Welcome! Please complete the form to create an account.</p>

//             {error && <div style={{ color: 'red', marginBottom: '15px' }}>{error}</div>}

//             <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
//                 <label style={{ textAlign: 'start'}}>Username:</label>
//                 <input
//                     type="text"
//                     placeholder=" Enter Username"
//                     value={username}
//                     onChange={handleInputChange(setUsername)}
//                     style={{ padding: '10px', margin: '5px 0', borderRadius: '4px' }}
//                 />
//                 <label style={{ textAlign:'start'}}>Sex:</label>
//                 <input
//                     type="text"
//                     placeholder="Sex"
//                     value={sex}
//                     onChange={handleInputChange(setSex)}
//                     style={{ padding: '10px', margin: '5px 0', borderRadius: '4px' }}
//                 />
//                 <label style={{textAlign:'start'}}>Department:</label>
//                 <input
//                     type="text"
//                     placeholder=" Enter Department"
//                     value={department}
//                     onChange={handleInputChange(setDepartment)}
//                     style={{ padding: '10px', margin: '5px 0', borderRadius: '4px' }}
//                 />
//                 <label style={{textAlign:'start'}}>Email:</label>
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={handleInputChange(setEmail)}
//                     style={{ padding: '10px', margin: '5px 0', borderRadius: '4px' }}
//                 />
//                 <label style={{textAlign:'start'}}>password:</label>
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={handleInputChange(setPassword)}
//                     style={{ padding: '10px', margin: '5px 0', borderRadius: '4px' }}
//                 />
//                 <button type="submit" style={{ padding: '10px', marginTop: '15px', backgroundColor: colors.green600, border: 'none', borderRadius: '4px', color: 'black' }}>
//                     Sign Up
//                 </button>
//             </form>
//         </div>

//     );
// }

// export default Signup;
import React, { useState } from 'react';
import { colors } from '@dhis2/ui';

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

    // Submission check
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
        <div
            style={{
                padding: '5px',
                width: '600px',
                borderRadius: '5px',
                color: 'black',
                textAlign: 'center',
                margin: 'auto',
                border: '1px solid grey', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
            }}
        >
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>Sign Up</h2>
            <p style={{ marginBottom: '20px' }}>Welcome! Please complete the form to create an account.</p>

            {error && <div style={{ color: 'red', marginBottom: '15px' }}>{error}</div>}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                <label style={{ textAlign: 'start', marginBottom: '10px' }}>Username:</label>
                <input
                    type="text"
                    placeholder="Enter Username"
                    value={username}
                    onChange={handleInputChange(setUsername)}
                    style={{
                        padding: '10px',
                        marginBottom: '15px',
                        borderRadius: '4px',
                        border: '1px solid black',
                    }}
                />

                <label style={{ textAlign: 'start', marginBottom: '10px' }}>Sex:</label>
                <input
                    type="text"
                    placeholder="Sex"
                    value={sex}
                    onChange={handleInputChange(setSex)}
                    style={{
                        padding: '10px',
                        marginBottom: '15px', 
                        borderRadius: '4px',
                        border: '1px solid black',
                    }}
                />

                <label style={{ textAlign: 'start', marginBottom: '10px' }}>Department:</label>
                <input
                    type="text"
                    placeholder="Enter Department"
                    value={department}
                    onChange={handleInputChange(setDepartment)}
                    style={{
                        padding: '10px',
                        marginBottom: '15px', 
                        borderRadius: '4px',
                        border: '1px solid black',
                    }}
                />

                <label style={{ textAlign: 'start', marginBottom: '10px' }}>Email:</label>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleInputChange(setEmail)}
                    style={{
                        padding: '10px',
                        marginBottom: '15px', 
                        borderRadius: '4px',
                        border: '1px solid black',
                    }}
                />

                <label style={{ textAlign: 'start', marginBottom: '10px' }}>Password:</label>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleInputChange(setPassword)}
                    style={{
                        padding: '10px',
                        marginBottom: '15px', 
                        borderRadius: '4px',
                        border: '1px solid black',
                    }}
                />

                <button
                    type="submit"
                    style={{ 
                        fontWeight: 'bold',
                        padding: '10px',
                        marginTop: '20px', 
                        backgroundColor: '#3498DB',
                        border: 'none',
                        borderRadius: '4px',
                        color: 'white',
                        cursor: 'pointer',
                    }}
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Signup;