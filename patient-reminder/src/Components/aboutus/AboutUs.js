import React from 'react';
import { CenteredContent, NoticeBox, colors } from '@dhis2/ui';

const AboutUs = () => {
    return (
        <CenteredContent>
            <NoticeBox title="About Us">
                <div style={{ backgroundColor: colors.green500, padding: '20px', borderRadius: '5px' }}>
                    <h1 style={{ color: colors.white }}>About Us - Group 10</h1>
                </div>
            </NoticeBox>
        </CenteredContent>
    );
}

export default AboutUs;
