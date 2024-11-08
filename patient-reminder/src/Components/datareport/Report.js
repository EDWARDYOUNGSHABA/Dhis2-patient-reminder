import React from 'react';
import { CenteredContent, NoticeBox, colors } from '@dhis2/ui';

const Report = () => {
    return (
        <CenteredContent>
            <NoticeBox title="About Us">
                <div style={{ backgroundColor: colors.green500, padding: '20px', borderRadius: '5px' }}>
                    <h1 style={{ color: colors.white }}>Report</h1>
                </div>
            </NoticeBox>
        </CenteredContent>
    );
}

export default Report;
