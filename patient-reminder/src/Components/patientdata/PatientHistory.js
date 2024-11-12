import React, { useState } from 'react';
import './PatientHistory.css';

function PatientHistory() {
  const [patients, setPatients] = useState([
    {
      patientName: '',
      dayVisited: '',
      typeOfTreatment: '',
      doctorsName: '',
      state: ''
    },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(patients);
  };

  return (
    <div className="patient-container">
      <h2 className="patient-title">Patient Statistics</h2>
      <form onSubmit={handleSubmit}>
        <div className="table-container">
          <table className="patient-table">
            <thead>
              <tr>
                <th>Patient name</th>
                <th>Day Visited</th>
                <th>Type of treatment</th>
                <th>Doctors name</th>
                <th>State</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(8)].map((_, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      placeholder="Enter patient name"
                      onChange={(e) => {
                        const updatedPatients = [...patients];
                        updatedPatients[index].patientName = e.target.value;
                        setPatients(updatedPatients);
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Enter visit date"
                      onChange={(e) => {
                        const updatedPatients = [...patients];
                        updatedPatients[index].dayVisited = e.target.value;
                        setPatients(updatedPatients);
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Enter treatment type"
                      onChange={(e) => {
                        const updatedPatients = [...patients];
                        updatedPatients[index].typeOfTreatment = e.target.value;
                        setPatients(updatedPatients);
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Enter doctor's name"
                      onChange={(e) => {
                        const updatedPatients = [...patients];
                        updatedPatients[index].doctorsName = e.target.value;
                        setPatients(updatedPatients);
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Enter state"
                      onChange={(e) => {
                        const updatedPatients = [...patients];
                        updatedPatients[index].state = e.target.value;
                        setPatients(updatedPatients);
                      }}
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
