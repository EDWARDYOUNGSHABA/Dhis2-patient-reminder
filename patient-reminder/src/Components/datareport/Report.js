import React, { useState } from 'react';
import './Report.css';
import { CenteredContent, NoticeBox, colors } from '@dhis2/ui';

// Increased sample registered patients data
const registeredPatients = [
    { id: 1, name: 'John Doe', age: 29, registrationDate: '2024-08-01', program: 'Immunization' },
    { id: 2, name: 'Jane Smith', age: 34, registrationDate: '2024-09-10', program: 'Nutrition' },
    { id: 3, name: 'Samuel Green', age: 45, registrationDate: '2024-07-25', program: 'Malaria' },
    { id: 4, name: 'Emily White', age: 30, registrationDate: '2024-08-15', program: 'Immunization' },
    { id: 5, name: 'David Brown', age: 50, registrationDate: '2024-09-05', program: 'Nutrition' },
    { id: 6, name: 'Olivia Blue', age: 24, registrationDate: '2024-06-21', program: 'Immunization' },
    { id: 7, name: 'Chris Gray', age: 38, registrationDate: '2024-05-12', program: 'Nutrition' },
    { id: 8, name: 'Sophie Black', age: 28, registrationDate: '2024-04-30', program: 'Malaria' },
    { id: 9, name: 'Aaron Red', age: 40, registrationDate: '2024-09-15', program: 'Immunization' },
    { id: 10, name: 'Mia Yellow', age: 33, registrationDate: '2024-07-09', program: 'Nutrition' },
    { id: 11, name: 'Ethan Green', age: 55, registrationDate: '2024-02-14', program: 'Malaria' },
    { id: 12, name: 'Sophia White', age: 27, registrationDate: '2024-01-30', program: 'Immunization' },
    { id: 13, name: 'James Purple', age: 60, registrationDate: '2024-03-20', program: 'Nutrition' },
    { id: 14, name: 'Lily Blue', age: 23, registrationDate: '2024-10-05', program: 'Malaria' },
    { id: 15, name: 'Jack Orange', age: 42, registrationDate: '2024-05-01', program: 'Immunization' }
];

const Report = () => {
    const [patients] = useState(registeredPatients); // Set initial patient list state

    return (
        <CenteredContent>
            
            {/* Table to display registered patients with custom CSS class */}
            <table className="report-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Registration Date</th>
                        <th>Program</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map(patient => (
                        <tr key={patient.id}>
                            <td>{patient.name}</td>
                            <td>{patient.age}</td>
                            <td>{patient.registrationDate}</td>
                            <td>{patient.program}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </CenteredContent>
    );
}

export default Report;
