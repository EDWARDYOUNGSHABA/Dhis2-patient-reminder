import React from 'react';
import { useD2 } from '@dhis2/app-runtime-adapter-d2';

const Home = () => {
    const { d2 } = useD2(); // Hook to access DHIS2 functionalities if needed

    return (
        <div className="flex items-center justify-center h-screen bg-black text-white px-5 ml-10">
            <h1 className="text-4xl font-bold">Hello, DHIS2!</h1>
        </div>
    );
};

export default Home;
