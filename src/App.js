import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import UserList from "./components/UserList";
import ResumeStudent from "./components/ResumeStudent";
import ResumeExperience from "./components/ResumeExperience";
import TemplateSelection from "./components/TemplateSelection";
import UploadResumePage from "./components/UploadResumePage";
import Header from "./components/Header";
import ATSScoreChecker from "./components/ATSScoreChecker";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer"; // Import Footer component
import 'font-awesome/css/font-awesome.min.css';

const Layout = () => {
  const location = useLocation();

  // Hide header only on login and register pages
  const hideHeader = location.pathname === "/LoginPage" || location.pathname === "/RegisterPage";

  return (
    <>
      {!hideHeader && <Header />}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Show HomePage at "/" */}
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/RegisterPage" element={<RegisterPage />} />
          <Route path="/ats-score" element={<ATSScoreChecker />} />
          <Route path="/UserList" element={<UserList />} />
          <Route path="/ResumeStudent" element={<ResumeStudent />} />
          <Route path="/ResumeExperience" element={<ResumeExperience />} />
          <Route path="/UploadResumePage" element={<UploadResumePage />} />
          <Route path="/TemplateSelection" element={<TemplateSelection />} />
        </Routes>
      </div>
      <Footer /> {/* Footer should be rendered outside Routes */}
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Layout />
      </div>
    </Router>
  );
}

export default App;
