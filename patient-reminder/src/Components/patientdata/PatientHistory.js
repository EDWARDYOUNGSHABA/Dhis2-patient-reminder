import React from "react";
import patientData from "../datareport/PatientData";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableFoot,
    NoticeBox,
} from "@dhis2/ui";

import "./PatientHistory.css"; // Optional custom styling

const PatientHistory = () => {
    return (
        <div className="patient-history-wrapper">
            <header className="patient-history-header">
                <h1>Patient History</h1>
                <p className="subtitle">
                    A comprehensive list of registered patients, including their
                    details and registration date.
                </p>
            </header>

            {/* Display a notice if no data is available */}
            {patientData.length === 0 ? (
                <NoticeBox title="No Patient Data">
                    No patients have been registered in the system yet.
                </NoticeBox>
            ) : (
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Gender</TableCell>
                            <TableCell>Registration Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {patientData.map((patient) => (
                            <TableRow key={patient.id}>
                                <TableCell>{patient.id}</TableCell>
                                <TableCell>{patient.name}</TableCell>
                                <TableCell>{patient.age}</TableCell>
                                <TableCell>{patient.gender}</TableCell>
                                <TableCell>{patient.registrationDate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFoot>
                        <TableRow>
                            <TableCell colSpan="5" className="footer">
                                Total Patients: {patientData.length}
                            </TableCell>
                        </TableRow>
                    </TableFoot>
                </Table>
            )}
        </div>
    );
};

export default PatientHistory;
