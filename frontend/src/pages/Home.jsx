import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "linear-gradient(to right, #eef2ff, #ffffff)",
      }}
    >
      <h1 style={{ fontSize: "55px", marginBottom: "10px" }}>
        Welcome to Job Board
      </h1>

      <p
        style={{
          fontSize: "20px",
          color: "#555",
          marginBottom: "35px",
        }}
      >
        Find your dream job or hire the best talent.
      </p>

      <div>
        <Link to="/jobs">
          <button
            style={{
              padding: "12px 30px",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              marginRight: "15px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            View Jobs
          </button>
        </Link>

        <Link to="/register">
          <button
            style={{
              padding: "12px 30px",
              backgroundColor: "#16a34a",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;