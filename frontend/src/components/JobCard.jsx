function JobCard({ job }) {
  return (
    <div
      style={{
  background: "#fff",
  borderRadius: "10px",
  padding: "20px",
  marginBottom: "20px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  border: "1px solid #e5e7eb",
   }}
      >
    
      <h2>{job.title}</h2>

      <p>
        <strong>Company:</strong> {job.company}
      </p>

      <p>
        <strong>Location:</strong> {job.location}
      </p>

      <p>
        <strong>Salary:</strong> ₹{job.salary}
      </p>

      <p>
        <strong>Job Type:</strong> {job.job_type}
      </p>

      <button
       style={{
  background: "#fff",
  borderRadius: "10px",
  padding: "20px",
  marginBottom: "20px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  border: "1px solid #e5e7eb",
}}
      >
        Apply Now
      </button>
    </div>
  );
}

export default JobCard;