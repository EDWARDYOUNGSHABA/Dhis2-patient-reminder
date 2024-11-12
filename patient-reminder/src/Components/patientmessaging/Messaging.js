import React from 'react';

const Messaging = () => {
    return (
        <div className="flex flex-col items-center justify-center p-5 bg-gray-800 text-black min-h-screen">
            <h2 id="header" class="text-2xl font-semibold mb-5">Remind Patients</h2>
            <input
                id="phoneNumberInput"
                type="text"
                placeholder="Phone Number"
                class="w-full max-w-md p-2 mb-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
                id="messageTextarea"
                placeholder="Message"
                class="w-full max-w-md p-2 mb-3 text-lg border border-gray-300 rounded-md h-24 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
                id="sendButton"
                class="w-full max-w-md p-2 mt-2 text-lg font-semibold text-white bg-blue-700 rounded-md hover:bg-blue-800 transition duration-300"
            >
                Send SMS
            </button>
        </div>
    );
}

export default Messaging;
