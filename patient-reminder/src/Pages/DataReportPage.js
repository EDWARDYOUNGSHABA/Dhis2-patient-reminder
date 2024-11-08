import React from "react";
import Report from "../Components/datareport/Report";
import { CenteredContent, Box } from '@dhis2/ui';

function DataReportPage() {
    return (
        <CenteredContent>
            <Box padding="24px" maxWidth="800px" background="white" shadow>
                <Report />
            </Box>
        </CenteredContent>
    );
}

export default DataReportPage;
