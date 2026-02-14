import "./ResumePreview.css";

function ResumePreview({ resume }) {
  return (
    <div id="resume-template" className="resume-template">
      <div className="resume-header">
        <h1>{resume.name}</h1>
        <p>{resume.email} | {resume.phone}</p>
      </div>

      <div className="resume-section">
        <h2>Skills</h2>
        <p>{resume.skills}</p>
      </div>

      <div className="resume-section">
        <h2>Education</h2>
        <p>{resume.education}</p>
      </div>

      <div className="resume-section">
        <h2>Projects</h2>
        <p>{resume.project}</p>
      </div>
    </div>
  );
}

export default ResumePreview;
