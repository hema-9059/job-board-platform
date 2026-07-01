import { useEffect, useState } from "react";
import axios from "axios";

function Applications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/applications/")
      .then((res) => setApplications(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleWithdraw = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/applications/${id}/`);

      setApplications(
        applications.filter((app) => app.id !== id)
      );

      alert("Application Withdrawn Successfully!");
    } catch (err) {
      console.log(err);
      alert("Failed to Withdraw!");
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "40px",
        background: "#f5f7fb",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <h1 style={{ color: "#2563eb" }}>📋 My Applications</h1>

      {applications.map((app) => (
        <div
          key={app.id}
          style={{
            width: "550px",
            margin: "25px auto",
            padding: "25px",
            background: "#fff",
            borderRadius: "15px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            borderLeft: "6px solid #2563eb",
            textAlign: "left",
          }}
        >
          <h2 style={{ color: "#2563eb" }}>{app.job.title}</h2>

          <p><b>🏢 Company:</b> {app.job.company}</p>

          <p><b>📍 Location:</b> {app.job.location}</p>

          <p><b>💰 Salary:</b> ₹{app.job.salary}</p>

          <p><b>💼 Job Type:</b> {app.job.job_type}</p>

          <p>
            <b>📅 Applied On:</b>{" "}
            {new Date(app.applied_at).toLocaleDateString()}
          </p>

          <p>
            <b>Status:</b>{" "}
            <span style={{ color: "green", fontWeight: "bold" }}>
              Applied ✅
            </span>
          </p>

          <button
            onClick={() => handleWithdraw(app.id)}
            style={{
              marginTop: "15px",
              padding: "10px 20px",
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            ❌ Withdraw Application
          </button>
        </div>
      ))}
    </div>
  );
}

export default Applications;