import React from 'react';
import { CenteredContent } from '@dhis2/ui';
import Signup from '../Components/authentication/Signup';

const SignUp = () => {
    return (
        <CenteredContent>
            <div className="container p-5">
                <Signup />
            </div>
        </CenteredContent>
    );
};

export default SignUp;
