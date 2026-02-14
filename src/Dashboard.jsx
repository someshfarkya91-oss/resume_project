import { useState } from "react";
import html2pdf from "html2pdf.js";
import ResumeForm from "./ResumeForm";
import ResumePreview from "./ResumePreview";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";


function Dashboard() {
  const [resume, setResume] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    skills: "",
    project: ""
  });

  const [generatedResume, setGeneratedResume] = useState(null);

  const handleGenerate = () => {

    setGeneratedResume(resume);
  };

  // WRITE DOWNLOAD FUNCTION HERE
  const handleDownload = () => {
    const element = document.getElementById("resume-template");

    const opt = {
      margin: 0.5,
      filename: "My_Resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
    };

    html2pdf().set(opt).from(element).save();
  };
  const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("user");
  navigate("/");
};


  return (
  <div>
    <div className="header">
      <h2>Resume Builder Dashboard</h2>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>


    <div className="dashboard-container">
      <ResumeForm resume={resume} setResume={setResume} />

      {generatedResume && (
        <ResumePreview resume={generatedResume} />
        
      )}
      
    </div>

    {/* WRITE BUTTONS HERE */}
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button className="generate-btn" onClick={handleGenerate}>
        Generate Resume
      </button>

      {generatedResume && (
        <button
          className="generate-btn"
          style={{ marginLeft: "10px" }}
          onClick={handleDownload}
        >
          Download Resume
        </button>
      )}
    </div>
  </div>
);

}

export default Dashboard;
