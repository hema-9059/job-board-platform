import { Link } from "react-router-dom";

function SeekerDashboard() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Job Seeker Dashboard</h1>

      <h3>Welcome Job Seeker</h3>

      <br />

      <Link to="/jobs">
        <button
          style={{
            padding: "10px 20px",
            margin: "10px",
            cursor: "pointer",
          }}
        >
          Browse Jobs
        </button>
      </Link>

      <br />
      <br />

      <Link to="/applications">
        <button
          style={{
            padding: "10px 20px",
            margin: "10px",
            cursor: "pointer",
          }}
        >
          My Applications
        </button>
      </Link>
    </div>
  );
}

export default SeekerDashboard;