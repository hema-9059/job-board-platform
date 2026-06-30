import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../services/api";

function EmployerDashboard() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [jobType, setJobType] = useState("");
  const [description, setDescription] = useState("");
  const [searchParams] = useSearchParams();
  const editId = searchParams.get("edit");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
  await api.put(`jobs/${editId}/`, {
    title,
    company,
    location,
    salary,
    job_type: jobType,
    description,
  });

  alert("Job Updated Successfully!");
} else {
  await api.post("jobs/", {
    title,
    company,
    location,
    salary,
    job_type: jobType,
    description,
  });

  alert("Job Added Successfully!");
}

      setTitle("");
      setCompany("");
      setLocation("");
      setSalary("");
      setJobType(""),
      setDescription("");

    } catch (error) {
      console.error(error);
      alert("Error adding job");
    }
  };

  return (
    <div
  style={{
    maxWidth: "500px",
    margin: "40px auto",
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  }}
>
      <h1>Employer Dashboard</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <br /><br />

        <input
          type="number"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Job Type"
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
        />
        <br /><br />
        
  

        <textarea
          placeholder="Job Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br /><br />

        <button
  type="submit"
  style={{
    width: "375px",
    backgroundColor: "#2563eb",
    color: "white",
    fontSize: "16px",
  }}
>
  Add Job
</button>
      </form>
    </div>
  );
}

export default EmployerDashboard;