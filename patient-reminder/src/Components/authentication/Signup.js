import React from 'react';
import { CenteredContent, NoticeBox, colors } from '@dhis2/ui';

const Signup = () => {
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
