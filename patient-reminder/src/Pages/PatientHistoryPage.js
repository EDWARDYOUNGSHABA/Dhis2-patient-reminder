import React from "react";
import PatientHistory from "../Components/patientdata/PatientHistory";
import { CenteredContent, Box } from '@dhis2/ui';

function PatientHistoryPage(){
    return(
      <CenteredContent>
          <Box padding="24px" maxWidth="800px" background="white" shadow>
              <PatientHistory />
          </Box>
      </CenteredContent>
    );
}

export default PatientHistoryPage;
