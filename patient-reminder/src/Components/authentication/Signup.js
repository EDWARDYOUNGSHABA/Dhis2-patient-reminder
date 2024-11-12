import React from 'react';
import { CenteredContent, NoticeBox, colors } from '@dhis2/ui';

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
        <CenteredContent>
            <div style={{ backgroundColor: colors.green600, padding: '20px', maxWidth: '500px', borderRadius: '5px', color: colors.white, textAlign: 'center' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Sign Up Page</h2>
                <p>Welcome! Please complete the form to create an account.</p>
            </div>
        </CenteredContent>
    );
}

export default Signup;
