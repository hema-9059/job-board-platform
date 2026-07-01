import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    api
      .get(`jobs/${id}/`)
      .then((res) => {
        setJob(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  
  const handleApply = async () => {
    try {
      await api.post("applications/", {
        user: 1,
        job: job.id,
      });

      alert("Application Submitted Successfully!");
    } catch (err) {
      console.log(err);
      alert("Application Failed!");
    }
  };

  if (!job) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h1>{job.title}</h1>

      <p><b>Company:</b> {job.company}</p>

      <p><b>Location:</b> {job.location}</p>

      <p><b>Salary:</b> ₹{job.salary}</p>

      <p><b>Job Type:</b> {job.job_type}</p>

      <p><b>Description:</b> {job.description}</p>

      <button
        onClick={handleApply}
        style={{
          padding: "10px 20px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Apply Now
      </button>
    </div>
  );
}

export default JobDetails;