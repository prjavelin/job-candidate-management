import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { JobPosting } from '../models/JobPosting';

const JobList: React.FC = () => {
    // Sample job data
    const [jobs, setJobs] = useState<JobPosting[]>([
      {
        id: 1,
        title: "Software Engineer",
        description: "Develop and maintain web applications.",
        location: "Remote",
        status: "Open",
        openingDate: "2025-03-01",
        closingDate: "2025-04-01",
        chosenCandidate: "None",
        budgetRange: "$80,000 - $100,000",
        requiredSkills: ["React", "Node.js", "C#"],
        openings: 2,
        hiringManager: "John Doe",
      },
    ]);
  
    // Function to add a new job
    const addJob = () => {
      const newJob: JobPosting = {
        id: jobs.length + 1,
        title: "New Job Title",
        description: "Job description here.",
        location: "Hybrid",
        status: "Open",
        openingDate: "2025-04-01",
        closingDate: "2025-05-01",
        chosenCandidate: "None",
        budgetRange: "$60,000 - $80,000",
        requiredSkills: ["JavaScript", "SQL"],
        openings: 1,
        hiringManager: "Jane Smith",
      };
      setJobs([...jobs, newJob]);
    };
  
    return (
      <div className="container mt-4">
        <h2 className="mb-3">Job Postings</h2>
        <button className="btn btn-primary mb-3" onClick={addJob}>
          Add Job
        </button>
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Location</th>
                <th>Status</th>
                <th>Opening Date</th>
                <th>Closing Date</th>
                <th>Candidate Chosen</th>
                <th>Budget</th>
                <th>Required Skills</th>
                <th>Openings</th>
                <th>Hiring Manager</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id}>
                  <td>{job.title}</td>
                  <td>{job.description}</td>
                  <td>{job.location}</td>
                  <td>{job.status}</td>
                  <td>{job.openingDate}</td>
                  <td>{job.closingDate}</td>
                  <td>{job.chosenCandidate}</td>
                  <td>{job.budgetRange}</td>
                  <td>{job.requiredSkills.join(", ")}</td>
                  <td>{job.openings}</td>
                  <td>{job.hiringManager}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default JobList;