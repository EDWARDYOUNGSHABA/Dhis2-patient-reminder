import React, { useState, useEffect } from 'react';
import PatientData from './PatientData.json'; // Correctly import the JSON data
import './PatientHistory.css';

function PatientHistory() {
  const [patients, setPatients] = useState(PatientData); // Initialize with imported JSON data

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(patients, null, 2));
  };

  const handleChange = (index, field, value) => {
    const updatedPatients = [...patients];
    updatedPatients[index][field] = value;
    setPatients(updatedPatients);
  };

  return (
    <div className="patient-container">
      <h2 className="patient-title">Patient History</h2>
      <form onSubmit={handleSubmit}>
        <div className="table-container">
          <table className="patient-table">
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Day Visited</th>
                <th>Type of Treatment</th>
                <th>Doctor's Name</th>
                <th>State</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      placeholder="Enter patient name"
                      value={patient.patientName}
                      onChange={(e) => handleChange(index, 'patientName', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Enter visit date"
                      value={patient.dayVisited}
                      onChange={(e) => handleChange(index, 'dayVisited', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Enter treatment type"
                      value={patient.typeOfTreatment}
                      onChange={(e) => handleChange(index, 'typeOfTreatment', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Enter doctor's name"
                      value={patient.doctorsName}
                      onChange={(e) => handleChange(index, 'doctorsName', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Enter state"
                      value={patient.state}
                      onChange={(e) => handleChange(index, 'state', e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="button-container">
          <button type="submit" className="enter-button">Enter</button>
        </div>
      </form>
    </div>
  );
}

export default PatientHistory;
