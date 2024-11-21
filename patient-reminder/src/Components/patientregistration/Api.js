export const onSubmit = async (formData, enrollmentDate, navigate) => {
    try {
        // Include the enrollment date in the payload
        const payload = {
            trackedEntityType: 'nEenWmSyUEp',
            orgUnit: 'nq7F0t1Pz6t',
            attributes: [
                { attribute: 'sB1IHYu2xQT', value: formData.name },
                { attribute: 'yEKd1xjQhj6', value: formData.age },
                { attribute: 'cejWyOfXge6', value: formData.sex },
                { attribute: 'zg5r4uD1o25', value: formData.district },
                { attribute: 'wy5h2BfEb7s', value: formData.diseaseType },
                { attribute: 'g9eOBujte1U', value: formData.phoneNumber },
            ],
            enrollments: [
                {
                    program: 'VBqh0ynB2wv',
                    orgUnit: 'nq7F0t1Pz6t',
                    enrollmentDate: enrollmentDate || new Date().toISOString(),
                    incidentDate: enrollmentDate || new Date().toISOString(),
                },
            ],
        };

        console.log('Payload:', payload);

        const response = await fetch(
            'https://data.research.dhis2.org/in5320/api/trackedEntityInstances',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Basic ' + btoa('admin:district'),
                },
                body: JSON.stringify(payload),
            }
        );

        if (response.ok) {
            alert('Registration submitted successfully!');
            navigate('/patienthistory');
        } else {
            const errorData = await response.json();
            console.error('Error:', errorData);
            alert('Failed to register patient.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while submitting the registration.');
    }
};
