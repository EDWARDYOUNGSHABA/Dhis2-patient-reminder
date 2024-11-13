import React from 'react';
import img2 from './images/project.png';
import img1 from './images/confi.jpg';
import img3 from './images/sponsor.jpg';
import './Home.css';

function Images() {
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

export default Images;
