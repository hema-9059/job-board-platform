import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  const deleteJob = async (id) => {
    if (!window.confirm("Delete this job?")) return;

    try {
      await api.delete(`jobs/${id}/`);
      setJobs(jobs.filter((job) => job.id !== id));
      alert("Job Deleted Successfully");
    } catch (error) {
      console.log(error);
      alert("Delete Failed");
    }
  };

  useEffect(() => {
    api
      .get("jobs/")
      .then((res) => {
        console.log(res.data);
        setJobs(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Available Jobs</h1>

      {jobs.map((job) => (
        <div
          key={job.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            marginBottom: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3>{job.title}</h3>

          <p>
            <b>Company:</b> {job.company}
          </p>

          <p>
            <b>Location:</b> {job.location}
          </p>

          <p>
            <b>Salary:</b> ₹{job.salary}
          </p>

          {job.job_type && (
            <p>
              <b>Job Type:</b> {job.job_type}
            </p>
          )}

          {job.description && (
            <p>
              <b>Description:</b> {job.description}
            </p>
          )}

          <Link to={`/job/${job.id}`}>
            <button
              style={{
                marginRight: "10px",
                padding: "8px 15px",
                cursor: "pointer",
              }}
            >
              View Details
            </button>
          </Link>
          <button
  style={{
    marginRight: "10px",
    padding: "8px 15px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    cursor: "pointer",
  }}
  onClick={() => navigate(`/employer?edit=${job.id}`)}
>
  Edit
</button>
          <button
            style={{
            marginRight: "10px",
            padding: "8px 15px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => deleteJob(job.id)}
          >
          Delete
          </button>

          <button
            style={{
              padding: "8px 15px",
              cursor: "pointer",
            }}
            onClick={() => {
              alert("Application Submitted Successfully!");
              navigate("/applications");
            }}
          >
            Apply Now
          </button>
        </div>
      ))}
    </div>
  );
}

export default Jobs;