import React from "react";
import { useNavigate } from "react-router-dom";
import "./style/UserList.css";

const UserList = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h2>Welcome to Resume Builder</h2>
      <p>Choose how you'd like to create your resume</p>

      <div className="category-section">
        {/* Auto Create Resume Section */}
        <div className="category-card auto-card">
          <h3>Auto-Create Resume</h3>
          <p>Generate your resume instantly using your previously saved data.</p>
          <button onClick={() => navigate("/upload")}>Auto Create Resume</button>
        </div>

        {/* Create From Scratch Section */}
        <div className="category-card scratch-card">
          <h3>Create from Scratch</h3>
          <p>Start fresh and build a personalized resume step-by-step.</p>
          <button onClick={() => navigate("/resume-student")}>Create from Scratch</button>
        </div>
      </div>
    </div>
  );
};

export default UserList;
