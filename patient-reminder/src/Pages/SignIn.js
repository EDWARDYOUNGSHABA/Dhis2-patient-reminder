import React from 'react';
import { CenteredContent, CircularLoader } from '@dhis2/ui';
import Signin from '../Components/authentication/Signin';
import './General.css';

const SignIn = () => {
    return (
        <CenteredContent>
            <div className="container p-5">
                <Signin />
            </div>
        </CenteredContent>
    );
};

export default SignIn;
