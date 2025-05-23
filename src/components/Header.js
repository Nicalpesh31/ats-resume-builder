import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style/Header.css";

const Header = () => {
    const location = useLocation();

    return (
        <header className="header">
            <div className="logo">
                <Link to="/">ResumeBuilder</Link>
            </div>

            <nav className="nav-links">
                {location.pathname !== "/" && (
                    <Link to="/">Home</Link>
                )}
                {location.pathname !== "/TemplateSelection" && (
                    <Link to="/TemplateSelection">Templates</Link>
                )}
                {location.pathname !== "/UploadResumePage" && (
                    <Link to="/UploadResumePage">Upload Resume</Link>
                )}
                {location.pathname !== "/ATSScoreChecker" && (
                    <Link to="/ats-score">Check ATS Score</Link>
                )}

                {/* Hide Sign In if already on login page */}
                {location.pathname !== "/LoginPage" && (
                    <Link to="/LoginPage" className="signin">Sign In</Link>
                )}

                {/* Hide Sign Up if already on register page */}
                {location.pathname !== "/RegisterPage" && (
                    <Link to="/RegisterPage" className="signup">Sign Up</Link>
                )}
            </nav>
        </header>
    );
};

export default Header;
