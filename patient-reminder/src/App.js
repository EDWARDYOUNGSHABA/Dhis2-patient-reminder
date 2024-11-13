import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/header/Header';
import HomePage from './Pages/HomePage';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import DataReportPage from './Pages/DataReportPage';
import PatientHistoryPage from './Pages/PatientHistoryPage';
import PatientMessaging from './Pages/PatientMessaging';
import PatientRegistrationPage from './Pages/PatientRegistrationPage';
import AboutUsPage from './Pages/AboutUsPage';
import NotificationPage from './Pages/NotificationPage';
import PrivateRoute from './Components/privaterouting/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {
  const location = useLocation();

  const hideHeaderOnPages = ['/signin', '/signup'];

  return (
    <div>
      {/* Render Header only if the current path is not in hideHeaderOnPages */}
      {!hideHeaderOnPages.includes(location.pathname) && <Header />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Wrap private routes with PrivateRoute */}
        <Route
          path="/patienthistory"
          element={
            <PrivateRoute>
              <PatientHistoryPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/messaging"
          element={
            <PrivateRoute>
              <PatientMessaging />
            </PrivateRoute>
          }
        />
        <Route
          path="/registration"
          element={
            <PrivateRoute>
              <PatientRegistrationPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/report"
          element={
            <PrivateRoute>
              <DataReportPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/aboutus"
          element={
            <PrivateRoute>
              <AboutUsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/notification"
          element={
            <PrivateRoute>
              <NotificationPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
