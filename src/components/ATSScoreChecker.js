import React, { useState } from "react";

const ATSScoreChecker = () => {
  const [file, setFile] = useState(null);
  const [scoreResult, setScoreResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setScoreResult(null);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError("Please select a PDF file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:8080/api/ats/check-score", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setScoreResult(data);
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", padding: "20px", textAlign: "center", boxShadow: "0 0 10px rgba(0,0,0,0.1)", borderRadius: "10px", backgroundColor: "#fff" }}>
      <h2>ATS Score Checker</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".pdf" onChange={handleFileChange} />
        <br /><br />
        <button type="submit" disabled={loading}>
          {loading ? "Checking..." : "Check ATS Score"}
        </button>
      </form>

      {error && <p style={{ color: "red", marginTop: "15px" }}>{error}</p>}

      {scoreResult && (
        <div style={{ marginTop: "20px" }}>
          <h3>Score: {scoreResult.score}%</h3>
          <p>Matched Keywords: {scoreResult.matchedKeywords}</p>
          <p>Total Keywords: {scoreResult.totalKeywords}</p>
        </div>
      )}
    </div>
  );
};

export default ATSScoreChecker;
