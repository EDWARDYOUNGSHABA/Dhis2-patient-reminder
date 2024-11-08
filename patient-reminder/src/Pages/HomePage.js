import React from "react";
import Home from "../Components/home/Home";
import { CenteredContent, Box } from '@dhis2/ui';

function HomePage() {
    return (
        <CenteredContent>
            <Box padding="24px" maxWidth="800px" background="white" shadow>
                <Home />
            </Box>
        </CenteredContent>
    );
}

export default HomePage;
