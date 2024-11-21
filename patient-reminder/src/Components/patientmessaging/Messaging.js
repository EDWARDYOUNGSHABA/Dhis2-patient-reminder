import React, { useState } from 'react';
import PatientData from "../datareport/PatientData";

const Messaging = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedPatient, setSelectedPatient] = useState(null);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
        const patient = PatientData.find(
            (p) => p.id === event.target.value || p.name.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setSelectedPatient(patient || null);
    };

    return (
        <div className="flex flex-col items-center justify-center p-5 bg-gray-800 text-black min-h-screen">
            <h2 id="header" className="text-2xl font-semibold mb-5">Remind Patients</h2>

            <input
                type="text"
                placeholder="Search by ID or Name"
                value={searchQuery}
                onChange={handleSearch}
                className="w-full max-w-md p-2 mb-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {selectedPatient && (
                <div className="w-full max-w-md mb-3 p-3 bg-white rounded-md shadow-md">
                    <p><strong>ID:</strong> {selectedPatient.id}</p>
                    <p><strong>Name:</strong> {selectedPatient.name}</p>
                    <p><strong>Phone:</strong> {selectedPatient.phone}</p>
                </div>
            )}

            <input
                id="phoneNumberInput"
                type="text"
                placeholder="Phone Number"
                value={selectedPatient ? selectedPatient.phone : ''}
                className="w-full max-w-md p-2 mb-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                readOnly
            />
            <textarea
                id="messageTextarea"
                placeholder="Message"
                className="w-full max-w-md p-2 mb-3 text-lg border border-gray-300 rounded-md h-24 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
                id="sendButton"
                className="w-full max-w-md p-2 mt-2 text-lg font-semibold text-white bg-blue-700 rounded-md hover:bg-blue-800 transition duration-300"
            >
                Send SMS
            </button>
        </div>
    );
};

export default Messaging;
