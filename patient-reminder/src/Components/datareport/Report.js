import React from 'react';
import './Report.css';
import { patientData } from './PatientData'; // Import the patient data

const Report = () => {
    // Calculate additional data for the report
    const totalPatients = patientData.length;
    const maleCount = patientData.filter(patient => patient.gender === 'Male').length;
    const femaleCount = patientData.filter(patient => patient.gender === 'Female').length;

    // Group by age ranges
    const ageGroups = [
        { range: '20-30', count: patientData.filter(p => p.age >= 20 && p.age < 30).length },
        { range: '30-40', count: patientData.filter(p => p.age >= 30 && p.age < 40).length },
        { range: '40-50', count: patientData.filter(p => p.age >= 40 && p.age < 50).length },
        { range: '50-60', count: patientData.filter(p => p.age >= 50 && p.age < 60).length },
        { range: '60+', count: patientData.filter(p => p.age >= 60).length },
    ];

    return (
        <div className="report-container">
            {/* Page Title Section */}
            <header className="report-header">
                <h1 className="report-title">Patient Data Report</h1>
                <p className="report-subtitle">Comprehensive patient data with insights and trends</p>
            </header>

            {/* Report Content Section */}
            <section className="report-content">
                <div className="overview-section">
                    <h3>Overview</h3>
                    <p>Total Patients: {totalPatients}</p>
                    <p>Male Patients: {maleCount}</p>
                    <p>Female Patients: {femaleCount}</p>
                </div>

                {/* Age Group Breakdown */}
                <div className="age-group-section">
                    <h4>Age Group Breakdown</h4>
                    <ul>
                        {ageGroups.map(group => (
                            <li key={group.range}>{group.range}: {group.count} patients</li>
                        ))}
                    </ul>
                </div>

                {/* Detailed Patient Data Table */}
                <div className="patient-table">
                    <h4>Patient Details</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Registration Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patientData.map(patient => (
                                <tr key={patient.id}>
                                    <td>{patient.id}</td>
                                    <td>{patient.name}</td>
                                    <td>{patient.age}</td>
                                    <td>{patient.gender}</td>
                                    <td>{patient.registrationDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="report-footer">
                <p>&copy; 2024 DHIS2 Patient Reminder. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Report;
