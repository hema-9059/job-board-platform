import { useState } from "react";

function JobForm() {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    job_type: "",
  });

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(job);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add New Job</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="company"
          placeholder="Company"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="job_type"
          placeholder="Job Type"
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Post Job</button>
      </form>
    </div>
  );
}

export default JobForm;