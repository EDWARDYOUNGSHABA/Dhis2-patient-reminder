import React, { useState, useEffect } from "react";
import { fetchRegisteredPatients } from './Api';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableFoot,
    NoticeBox,
    CircularLoader,
} from "@dhis2/ui";

import "./PatientHistory.css"; 

const PatientHistory = () => {
    const [patientData, setPatientData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const orgUnitId = "PMa2VCrupOd";
        const programId = "x5T8A6QtcP2";

        const loadPatients = async () => {
            try {
                const data = await fetchRegisteredPatients(orgUnitId, programId);
                setPatientData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadPatients();
    }, []);

    return (
        <div className="patient-history-wrapper">
            <header className="patient-history-header">
                <h1>Patient History</h1>
                <p className="subtitle">
                    A comprehensive list of registered patients, including their
                    details and registration date.
                </p>
            </header>

            {loading ? (
                <div className="loading-wrapper">
                    <CircularLoader />
                </div>
            ) : error ? (
                <NoticeBox title="Error Fetching Data">
                    {error}
                </NoticeBox>
            ) : patientData.length === 0 ? (
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
                                <TableCell>{patient?.name || "N/A"}</TableCell>
                                <TableCell>{patient?.age || "N/A"}</TableCell>
                                <TableCell>{patient?.gender || "N/A"}</TableCell>
                                <TableCell>{patient?.registrationDate || "N/A"}</TableCell>
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
