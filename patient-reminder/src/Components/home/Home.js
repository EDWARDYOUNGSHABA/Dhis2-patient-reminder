<<<<<<< HEAD
import React from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import "./Home.css";

const Home = () => {
    const navigate = useNavigate(); // Initialize navigate function

    // Function to handle navigation
    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="app-container">
                   
            {/* Main Content */}
            <main className="main-content">
                <h1 className="main-title">Welcome to DHIS2 Patient Reminder</h1>
                <p className="main-description">
                    Streamline your patient communication with automated reminders, ensuring better healthcare outcomes.
                </p>
                <button
                    className="get-started-button"
                    onClick={() => handleNavigation("/registration")} // Navigate on button click
                >
                    Get Started
                </button>
            </main>

            {/* Features Section */}
            <section className="features" id="features">
                <h2 className="features-title">Features</h2>
                <div className="features-list">
                    <FeatureCard
                        title="Automated Reminders"
                        description="Send SMS and email reminders to patients."
                        onClick={() => handleNavigation("/notification")}
                    />
                    <FeatureCard
                        title="Patient Registration"
                        description="Doctors can register patients."
                        onClick={() => handleNavigation("/registration")}
                    />
                    <FeatureCard
                        title="Patient History"
                        description="view list of registered patients."
                        onClick={() => handleNavigation("/patienthistory")}
                    />
                    <FeatureCard
                        title="About Us"
                        description="Knowing more about DHIS2 Patient Reminder developers and their mission."
                        onClick={() => handleNavigation("/aboutus")}
                    />
                    <FeatureCard
                        title="Reports"
                        description="Generate and view detailed patient activity reports."
                        onClick={() => handleNavigation("/report")}
                    />
                    <FeatureCard
                        title="Set up the reminder"
                        description="Manage and customize patient notification preferences."
                        onClick={() => handleNavigation("/messaging")}
                    />
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2024 DHIS2 Patient Reminder. All rights reserved.</p>
            </footer>
        </div>
    );
};
=======
import React from 'react';
import img2 from './images/project.png';
import img1 from './images/confi.jpg';
import img3 from './images/sponsor.jpg';
import './Home.css';

function Home() {
  return (
    <div className="image-container">
      <img src={img2} alt="Project" className="logo"/>
      <div className="nav-container">
        <a href="#">Home</a>
        <a href="#">About us</a>
      </div>
      <img src={img3} alt="Sponsor" className="handshake"/>
      <h2>Welcome To Zitheka</h2>
      <h1>"Apatsa" Healthy care <img src={img1} alt="Confi" className="stethoscope"/></h1>
      {/* Inline styling for testing */}
      <a 
        href="#" 
        className="sign-in-button" 
        style={{
          display: 'inline-block', 
          padding: '12px 30px', 
          backgroundColor: '#002366', 
          color: 'white', 
          borderRadius: '5px', 
          fontSize: '18px', 
          fontWeight: 'bold', 
          textDecoration: 'none', 
          marginTop: '20px'
        }}
      >
        Sign In
      </a>
    </div>
  );
}
>>>>>>> ac23348e110ccf9359e74a6051e7a8cb5e6cb1ed

// Reusable Feature Card Component
const FeatureCard = ({ title, description, onClick }) => (
    <div className="feature-card" onClick={onClick} style={{ cursor: "pointer" }}>
        <h3 className="feature-card-title">{title}</h3>
        <p className="feature-card-description">{description}</p>
    </div>
);

export default Home;
