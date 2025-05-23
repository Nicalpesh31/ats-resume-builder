import React from "react";
import './style/Footer.css'; // Import the updated CSS file

const Footer = () => {
  return (
    <footer className="footer">
      {/* Section 1 - Get Started */}
      <div className="footer-section">
        <h3>Get Started</h3>
        <ul>
          <li><a href="/create-resume">Create Resume</a></li>
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/cookie-preferences">Cookie Preferences</a></li>
        </ul>
      </div>

      {/* Section 2 - Resume */}
      <div className="footer-section">
        <h3>Resume</h3>
        <ul>
          <li><a href="/resume-examples">Resume Examples</a></li>
          <li><a href="/resume-templates">Resume Templates</a></li>
          <li><a href="/resume-builder">Resume Builder</a></li>
          <li><a href="/resume-summary-generator">Resume Summary Generator</a></li>
          <li><a href="/linkedin-resume-builder">Linkedin Resume Builder</a></li>
          <li><a href="/resume-formats">Resume Formats</a></li>
          <li><a href="/resume-checker">Resume Checker</a></li>
          <li><a href="/ai-resume-review">AI Resume Review</a></li>
          <li><a href="/resume-skills">Resume Skills</a></li>
          <li><a href="/how-to-write-a-resume">How to Write a Resume</a></li>
          <li><a href="/modern-resume-templates">Modern Resume Templates</a></li>
          <li><a href="/simple-resume-templates">Simple Resume Templates</a></li>
        </ul>
      </div>

      {/* Section 3 - Cover Letter */}
      <div className="footer-section">
        <h3>Cover Letter</h3>
        <ul>
          <li><a href="/cover-letter-builder">Cover Letter Builder</a></li>
          <li><a href="/cover-letter-examples">Cover Letter Examples</a></li>
          <li><a href="/cover-letter-generator">Cover Letter Generator</a></li>
          <li><a href="/cover-letter-templates">Cover Letter Templates</a></li>
          <li><a href="/cover-letter-formats">Cover Letter Formats</a></li>
          <li><a href="/how-to-write-a-cover-letter">How to Write a Cover Letter</a></li>
        </ul>
      </div>

      {/* Section 4 - Resources */}
      <div className="footer-section">
        <h3>Resources</h3>
        <ul>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/resume-guides">Resume Guides</a></li>
          <li><a href="/cover-letter-guides">Cover Letter Guides</a></li>
          <li><a href="/job-interview-guides">Job Interview Guides</a></li>
          <li><a href="/job-interview-questions">Job Interview Questions</a></li>
          <li><a href="/career-resources">Career Resources</a></li>
        </ul>
      </div>

      {/* Section 5 - About Us */}
      <div className="footer-section">
        <h3>About Us</h3>
        <ul>
          <li><a href="/company">Company</a></li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="/reviews">Reviews</a></li>
          <li><a href="/contact-us">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
