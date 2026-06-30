import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  alert("Logged Out Successfully");
  navigate("/login");
};

const isLoggedIn = localStorage.getItem("access");

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    marginLeft: "20px",
    fontWeight: "bold",
    fontSize: "16px",
  };

  return (
    <nav
      style={{
        backgroundColor: "#2563eb",
        padding: "18px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      <h2
        style={{
          color: "white",
          margin: 0,
          fontSize: "28px",
        }}
      >
        Job Board
      </h2>

      <div>
        <Link to="/" style={linkStyle}>
          Home
        </Link>

        <Link to="/jobs" style={linkStyle}>
          Jobs
        </Link>
        
        {!isLoggedIn && (
  <>
    <Link to="/login" style={linkStyle}>Login</Link>
    <Link to="/register" style={linkStyle}>Register</Link>
  </>
)}

{isLoggedIn && (
  <>
    <Link to="/employer" style={linkStyle}>Employer</Link>

    <Link to="/seeker" style={linkStyle}>Seeker</Link>
    
  </>
)}   

        

        <button
          onClick={handleLogout}
          style={{
            marginLeft: "20px",
            padding: "6px 12px",
            cursor: "pointer",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#ef4444",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;