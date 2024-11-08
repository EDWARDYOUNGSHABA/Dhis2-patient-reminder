import React from 'react';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import DataReportPage from './Pages/DataReportPage';
import PatientHistoryPage from './Pages/PatientHistoryPage';
import PatientMessaging from './Pages/PatientMessaging';
import PatientRegistrationPage from './Pages/PatientRegistrationPage';
import AboutUsPage from './Pages/AboutUsPage';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CenteredContent } from '@dhis2/ui';

function App() {
  return (
    <div>
      <BrowserRouter>        
        <CenteredContent>
          <Routes>
            <Route path='/' element={<HomePage />} />            
            <Route path='/patienthistory' element={<PatientHistoryPage />} />
            <Route path='/messaging' element={<PatientMessaging />} />
            <Route path='/registration' element={<PatientRegistrationPage />} />
            <Route path='/report' element={<DataReportPage />} />
            <Route path='/aboutus' element={<AboutUsPage />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </CenteredContent>
      </BrowserRouter>
    </div>
  );
}

export default App;
