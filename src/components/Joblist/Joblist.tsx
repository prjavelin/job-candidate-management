import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { JobPosting } from "../../models/JobPosting";
import JobForm from "../Joblist/AddJob"; 

const JobList: React.FC = () => {
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [showModal, setShowModal] = useState(false);

  const addJob = (newJob: JobPosting) => {
    setJobs([...jobs, newJob]);
    setShowModal(false); // Close modal after adding
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Job Postings</h2>
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary mb-3" onClick={() => setShowModal(true)}>
          Add Job
        </button>
      </div>

      {/* Show modal when state is true */}
      {showModal && <JobForm onAddJob={addJob} onClose={() => setShowModal(false)} />}

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
              <th>Top Candidates</th>
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
                <td>{job.topCandidates}</td>
                <td>{job.chosenCandidate}</td>
                <td>{job.budgetRange}</td>
                <td>{job.requiredSkills}</td>
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
