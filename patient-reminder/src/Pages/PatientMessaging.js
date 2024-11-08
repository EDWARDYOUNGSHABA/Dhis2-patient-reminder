import React from "react";
import Messaging from '../Components/patientmessaging/Messaging';
import { CenteredContent, Box } from '@dhis2/ui';

function PatientMessaging(){
    return(
        <CenteredContent>
            <Box padding="24px" maxWidth="800px" background="white" shadow>
                <Messaging />
            </Box>
        </CenteredContent>
    );
}

export default PatientMessaging;
