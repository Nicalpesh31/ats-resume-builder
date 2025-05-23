import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./style/TemplateSelection.css";

// Dynamically import all images from the templates folder
const images = require.context("../assets/templates", false, /\.(png|jpe?g|svg)$/);

// Map image filenames to display names
const templateNames = {
  "alpss.png": "Modern Resume",
  "temp.png": "Professional Resume",
  "s2.png": "Elegant Resume",
  "s3.png": "Simple Resume",
  "template5.jpg": "Creative Resume",
  "template6.jpg": "Minimalist Resume",
  "template7.jpg": "ATS Optimized Resume",
  "template8.jpg": "Classic Resume",
  "template9.jpg": "Corporate Resume",
  "template10.jpg": "Bold & Clean Resume",
};

// Build templates array from imported images
const templates = images.keys().map((key, index) => ({
  id: index + 1,
  name: templateNames[key.replace("./", "")] || `Template ${index + 1}`,
  image: images(key),
}));

const TemplateSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const resumeData = location.state?.resumeData || {};

  const handleSelectTemplate = (templateId) => {
    navigate(`/preview/${templateId}`, {
      state: { resumeData, templateId },
    });
  };

  return (
    <div className="template-selection-container">
      <h2>Select Your Resume Template</h2>
      <p>Choose from high-quality, ATS-friendly templates.</p>

      <div className="template-grid">
        {templates.map((template) => (
          <div key={template.id} className="template-card">
            <div className="template-image-wrapper">
              <img
                src={template.image}
                alt={template.name}
                className="template-image"
              />
              <button
                className="use-template-button"
                onClick={() => handleSelectTemplate(template.id)}
              >
                Choose Template
              </button>
            </div>
            <h3 className="template-name">{template.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelection;
