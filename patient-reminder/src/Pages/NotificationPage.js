import React from "react";
import Report from "../Components/notification/Notification";
import { CenteredContent, Box } from '@dhis2/ui';
import './General.css';

function NotificationPage() {
    return (
        <CenteredContent>
            <Box padding="24px" maxWidth="800px" background="white" shadow>
                <Report />
            </Box>
        </CenteredContent>
    );
}

export default NotificationPage;
