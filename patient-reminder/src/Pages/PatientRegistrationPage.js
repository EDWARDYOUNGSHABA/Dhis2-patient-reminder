import React from "react";
import Registration from '../Components/patientregistration/Registration';
import { CenteredContent, Box } from '@dhis2/ui';

function PatientRegistration(){
    return(
        <CenteredContent>
            <Box padding="24px" maxWidth="800px" background="white" shadow>
                <Registration />
            </Box>
        </CenteredContent>
    );
}

export default PatientRegistration;
