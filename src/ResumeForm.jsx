function ResumeForm({ resume, setResume }) {
  const handleChange = (e) => {
    setResume({ ...resume, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-section">
      <h2>Resume Details</h2>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input name="education" placeholder="Education" onChange={handleChange} />
      <input name="skills" placeholder="Skills" onChange={handleChange} />
      <input name="project" placeholder="Project" onChange={handleChange} />
    </div>
  );
}

export default ResumeForm;
