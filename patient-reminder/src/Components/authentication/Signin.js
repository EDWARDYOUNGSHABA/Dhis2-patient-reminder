import React from 'react';
import { CenteredContent, NoticeBox, colors } from '@dhis2/ui';

const Signin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // this will handle my input changes
    const handleInputChange = (setter) => (event) => {
        setter(event.target.value);
    };

    //  prevent form submission reload
    const handleSubmit = (event) => {
        event.preventDefault();

        //  validate and make sure everything they are not empty
        if (!username || !password) {
            setError('Both fields are required.');
            return;
        }

        //  valid, you can proceed to submit the form 
        console.log('Form submitted with data:', { username, password });

        // Clear the form
        setUsername('');
        setPassword('');
        setError('');
    };

    return (
        <CenteredContent>
            <NoticeBox title="About Us">
                <div style={{ backgroundColor: colors.green500, padding: '20px', borderRadius: '5px' }}>
                    <h1 style={{ color: colors.white }}>Signin</h1>
                </div>
            </NoticeBox>
        </CenteredContent>
    );
}

export default Signin;
