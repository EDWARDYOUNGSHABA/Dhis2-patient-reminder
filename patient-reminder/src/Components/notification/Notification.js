import React from 'react';
import {  NoticeBox, CenteredContent, colors } from '@dhis2/ui';

const Notification = () => {
    return (
        <CenteredContent>
            <NoticeBox title="About Us">
                <div style={{ backgroundColor: colors.green500, padding: '20px', borderRadius: '5px' }}>
                    <h1 style={{ color: colors.white, fontSize: '24px' }}>Notification</h1>
                    <p style={{ color: colors.white, fontSize: '16px', marginTop: '10px' }}>
                        We are Group 10, dedicated to providing innovative solutions in healthcare and patient management. 
                        Our team works relentlessly to improve systems and technologies that can have a significant impact on 
                        public health worldwide.
                    </p>
                </div>
            </NoticeBox>
        </CenteredContent>
    );
}

export default Notification;
