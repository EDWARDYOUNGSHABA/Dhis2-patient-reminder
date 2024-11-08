import React from 'react';
import AboutUs from '../Components/aboutus/AboutUs';
import { CenteredContent, Box } from '@dhis2/ui';
import './General.css';

const AboutUsPage = () => {
    return (
        <CenteredContent>
            <Box padding="24px" maxWidth="800px" background="white" shadow>
                <AboutUs />
            </Box>
        </CenteredContent>
    );
}

export default AboutUsPage;
