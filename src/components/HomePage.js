import React from "react";
import { useNavigate } from "react-router-dom"; // <-- import hook
import "./style/Homepage.css";
import heroImage from "../svg/hero-c5.png";

const HomePage = () => {
  const navigate = useNavigate(); // <-- init navigation

  const handleCreateResume = () => {
    navigate("./TemplateSelection");
  };

  const handleUploadResume = () => {
    navigate("/UploadResumePage");
  };

  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-text">
          <h1>Write your story with the ultimate resume builder</h1>
          <p>
            Only <strong>2%</strong> of resumes land interviews. Let’s build you a
            resume that gets you noticed.
          </p>
          <div className="hero-buttons">
            <button className="btn primary" onClick={handleCreateResume}>
              Create my resume
            </button>
            <button className="btn secondary" onClick={handleUploadResume}>
              Upload my resume
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img
            className="hero_resume_image"
            alt="Create my resume"
            src={heroImage}
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
