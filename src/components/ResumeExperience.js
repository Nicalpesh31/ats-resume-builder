import React, { useState } from "react";
import "./style/Resume.module.ex.css"; // Import CSS for styling

const ResumeStudent = () => {
    const [formData, setFormData] = useState({
        photo: null,
        fullName: "",
        email: "",
        phone: "",
        address: "",
        summary: "",
        education: [{ degree: "", institution: "", year: "" }],
        experience: [{ company: "", role: "", duration: "" }],
        skills: "",
        projects: [{ title: "", description: "" }],
        certifications: "",
        awards: "",
        interests: "",
    });

    // Handle input change for text fields
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle file upload
    const handlePhotoUpload = (e) => {
        setFormData({ ...formData, photo: URL.createObjectURL(e.target.files[0]) });
    };

    // Handle dynamic field change (education, experience, projects)
    const handleDynamicChange = (index, field, value, section) => {
        const updatedSection = [...formData[section]];
        updatedSection[index][field] = value;
        setFormData({ ...formData, [section]: updatedSection });
    };

    // Add new entry for dynamic fields
    const addField = (section, newField) => {
        setFormData({ ...formData, [section]: [...formData[section], newField] });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Resume Data:", formData);
        alert("Resume Submitted Successfully!");
    };

    return (
        <div className="resume-form-container">
            <h2>Create Resume - Student</h2>
            <form onSubmit={handleSubmit}>
                {/* Profile Photo */}
                <label className="photo-upload">
                    Upload Photo (Optional)
                    <input type="file" accept="image/*" onChange={handlePhotoUpload} />
                </label>
                {formData.photo && <img src={formData.photo} alt="Profile" className="preview-photo" />}

                {/* Basic Info */}
                <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
                <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
                <textarea name="summary" placeholder="Professional Summary" onChange={handleChange}></textarea>

                {/* Skills */}
                <textarea name="skills" placeholder="Skills (Comma Separated)" onChange={handleChange}></textarea>

                {/* Dynamic Education Section */}
                <h3>Education</h3>
                {formData.education.map((edu, index) => (
                    <div key={index} className="dynamic-field">
                        <input type="text" placeholder="Degree" value={edu.degree} onChange={(e) => handleDynamicChange(index, "degree", e.target.value, "education")} />
                        <input type="text" placeholder="Institution" value={edu.institution} onChange={(e) => handleDynamicChange(index, "institution", e.target.value, "education")} />
                        <input type="text" placeholder="Year" value={edu.year} onChange={(e) => handleDynamicChange(index, "year", e.target.value, "education")} />
                        <input type="number" placeholder="Percentage/CGPA" value={edu.per} onChange={(e) => handleDynamicChange(index, "marks", e.target.value, "education")} />
                    </div>
                ))}
                <button type="button" onClick={() => addField("education", { degree: "", institution: "", year: "" })}>+ Add Education</button>

                {/* Dynamic Experience Section */}
                <h3>Experience (Optional)</h3>
                {formData.experience.map((exp, index) => (
                    <div key={index} className="dynamic-field">
                        <input type="text" placeholder="Company Name" value={exp.company} onChange={(e) => handleDynamicChange(index, "company", e.target.value, "experience")} />
                        <input type="text" placeholder="Job Role" value={exp.role} onChange={(e) => handleDynamicChange(index, "role", e.target.value, "experience")} />
                        <input type="text" placeholder="Duration" value={exp.duration} onChange={(e) => handleDynamicChange(index, "duration", e.target.value, "experience")} />
                    </div>
                ))}
                <button type="button" onClick={() => addField("experience", { company: "", role: "", duration: "" })}>+ Add Experience</button>

                {/* Dynamic Projects Section */}
                <h3>Projects</h3>
                {formData.projects.map((proj, index) => (
                    <div key={index} className="dynamic-field">
                        <input type="text" placeholder="Project Title" value={proj.title} onChange={(e) => handleDynamicChange(index, "title", e.target.value, "projects")} />
                        <textarea placeholder="Description" value={proj.description} onChange={(e) => handleDynamicChange(index, "description", e.target.value, "projects")}></textarea>
                    </div>
                ))}
                <button type="button" onClick={() => addField("projects", { title: "", description: "" })}>+ Add Project</button>

                {/* Other Details */}
                <input type="text" name="certifications" placeholder="Certifications" onChange={handleChange} />
                <input type="text" name="awards" placeholder="Awards & Achievements" onChange={handleChange} />
                <input type="text" name="interests" placeholder="Interests & Hobbies" onChange={handleChange} />

                <button type="submit">Generate Resume</button>
            </form>
        </div>
    );
};

export default ResumeStudent;
