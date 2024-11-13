import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import './Header.css';

function Header() {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const profileRef = useRef(null);
    const servicesRef = useRef(null);
    const menuRef = useRef(null);
    const navigate = useNavigate();

    const closeDelay = 1500;
    let profileTimeout, servicesTimeout;

    useEffect(() => {
        // Check if the user is authenticated on component mount
        setIsAuthenticated(!!localStorage.getItem('authToken'));

        const handleClickOutside = (event) => {
            if (
                profileRef.current && !profileRef.current.contains(event.target) &&
                servicesRef.current && !servicesRef.current.contains(event.target) &&
                menuRef.current && !menuRef.current.contains(event.target)
            ) {
                setIsProfileOpen(false);
                setIsServicesOpen(false);
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            clearTimeout(profileTimeout);
            clearTimeout(servicesTimeout);
        };
    }, []);

    const closeAllDropdowns = () => {
        clearTimeout(profileTimeout);
        clearTimeout(servicesTimeout);
        setIsProfileOpen(false);
        setIsServicesOpen(false);
        setIsMenuOpen(false);
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
        navigate('/signin');
    };

    return (
        <header className="header">
            <div className="logo-section">                
                <Link to="/" className="home-link" onClick={closeAllDropdowns}>
                    <FaHome className="home-icon" /> 
                </Link>
            </div>

            <nav className="nav-links">
                <div
                    className="dropdown"
                    ref={servicesRef}
                    onMouseEnter={() => {
                        clearTimeout(servicesTimeout);
                        setIsServicesOpen(true);
                    }}
                    onMouseLeave={() => {
                        servicesTimeout = setTimeout(() => setIsServicesOpen(false), closeDelay);
                    }}
                >
                    <button className="dropdown-button">Services</button>
                    {isServicesOpen && (
                        <div className="dropdown-menu">
                            <Link to="/patienthistory" onClick={closeAllDropdowns}>Patient History</Link>
                            <Link to="/registration" onClick={closeAllDropdowns}>Registration</Link>
                            <Link to="/messaging" onClick={closeAllDropdowns}>Messaging</Link>
                        </div>
                    )}
                </div>
                <Link to="/report" onClick={closeAllDropdowns}>Report</Link>
                <Link to="/aboutus" onClick={closeAllDropdowns}>About Us</Link>
                <Link to="/notification" onClick={closeAllDropdowns}>Notification</Link>
            </nav>

            <div className="mobile-menu" ref={menuRef}>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu-button">
                    <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                {isMenuOpen && (
                    <div className="mobile-dropdown">
                        <Link to="/patienthistory" onClick={closeAllDropdowns}>Patient History</Link>
                        <Link to="/registration" onClick={closeAllDropdowns}>Registration</Link>
                        <Link to="/messaging" onClick={closeAllDropdowns}>Messaging</Link>
                        <Link to="/report" onClick={closeAllDropdowns}>Report</Link>
                        <Link to="/aboutus" onClick={closeAllDropdowns}>About Us</Link>
                        <Link to="/notification" onClick={closeAllDropdowns}>Notification</Link>
                    </div>
                )}
            </div>

            <div
                className="profile"
                ref={profileRef}
                onMouseEnter={() => {
                    clearTimeout(profileTimeout);
                    setIsProfileOpen(true);
                }}
                onMouseLeave={() => {
                    profileTimeout = setTimeout(() => setIsProfileOpen(false), closeDelay);
                }}
            >
                <img src="./asserts/images/fever.jpg" alt="Profile" className="profile-img" />
                {isProfileOpen && (
                    <div className="profile-menu">
                        {!isAuthenticated ? (
                            <>
                                <Link to="/signin" onClick={closeAllDropdowns}>Signin</Link>
                                <Link to="/signup" onClick={closeAllDropdowns}>Signup</Link>
                            </>
                        ) : (
                            <button onClick={handleLogout} className="logout-button">Logout</button>
                        )}
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
