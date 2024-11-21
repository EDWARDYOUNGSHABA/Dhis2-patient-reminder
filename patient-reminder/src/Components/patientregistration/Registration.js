import React, { useState } from 'react';
import {
    ReactFinalForm,
    InputFieldFF,
    SingleSelectFieldFF,
    Button,
    CalendarInput,
    hasValue,
    composeValidators,
} from '@dhis2/ui';
import { useNavigate } from 'react-router-dom';
import { onSubmit } from './Api'; // Import onSubmit function

const options = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Other', value: 'Other' },
];

const validatePhone = (value) =>
    /^[0-9]{10,15}$/.test(value) ? undefined : 'Invalid phone number';

const Registration = () => {
    const navigate = useNavigate();
    const [enrollmentDate, setEnrollmentDate] = useState('');

    const handleSubmit = (formData) => {
        onSubmit(formData, enrollmentDate, navigate); // Pass form data to the onSubmit function
    };

    return (
        <ReactFinalForm.Form onSubmit={handleSubmit}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit} style={{ maxWidth: 600, margin: 'auto' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Registration Form</h2>

                    <ReactFinalForm.Field
                        name="name"
                        label="Name"
                        component={InputFieldFF}
                        validate={hasValue}
                        required
                    />

                    <ReactFinalForm.Field
                        name="age"
                        label="Age"
                        component={InputFieldFF}
                        type="number"
                        validate={hasValue}
                        required
                    />

                    <ReactFinalForm.Field
                        name="sex"
                        label="Sex"
                        component={SingleSelectFieldFF}
                        options={options}
                        validate={hasValue}
                        required
                    />

                    <ReactFinalForm.Field
                        name="district"
                        label="District"
                        component={InputFieldFF}
                        validate={hasValue}
                        required
                    />

                    <ReactFinalForm.Field
                        name="diseaseType"
                        label="Disease Type"
                        component={InputFieldFF}
                        validate={hasValue}
                        required
                    />

                    <ReactFinalForm.Field
                        name="phoneNumber"
                        label="Phone Number"
                        component={InputFieldFF}
                        validate={composeValidators(hasValue, validatePhone)}
                        required
                    />

                    <div style={{ margin: '20px 0' }}>
                        <label>Enrollment Date</label>
                        <CalendarInput
                            value={enrollmentDate}
                            onChange={(date) => setEnrollmentDate(date)}
                            calendarPopup
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                        <Button type="submit" primary>
                            Register
                        </Button>
                    </div>
                </form>
            )}
        </ReactFinalForm.Form>
    );
};

export default Registration;
