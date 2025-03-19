import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

import { JobPosting } from "../../models/JobPosting";
import JobForm from "../Joblist/AddJob"; 
import { getJobs } from "../../services/jobService";


const JobList: React.FC = () => {
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getJobs()
      .then((data) => setJobs(data))
      .catch((err) => console.error(err));
  }, []);

  const addJob = (newJob: JobPosting) => {
    setJobs([...jobs, newJob]);
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
          <thead className="table-primary">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Location</th>
              <th>Status</th>
              <th>Opening Date</th>
              <th>Closing Date</th>
              <th>Number of Candidates</th>
              {/* <th>Top Candidates</th> */}
              <th>Candidate Chosen</th>
              <th>Budget</th>
              <th>Required Skills</th>
              <th>Openings</th>
              <th>Hiring Manager</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id}>
                <td>{job.title}</td>
                <td>{job.description}</td>
                <td>{job.location}</td>
                <td>
                  {job.status === "Open" ? (
                    <FontAwesomeIcon icon={faCheck} className="text-success" />
                  ) : (
                    <FontAwesomeIcon icon={faTimes} className="text-danger" />
                  )}
                </td>
                <td>{job.openingDate}</td>
                <td>{job.closingDate}</td>
                <td>7</td>
                {/* <td>{job.topCandidates}</td> */}
                <td>{job.chosenCandidate}</td>
                <td>{job.budgetRange}</td>
                <td>{job.requiredSkills}</td>
                <td>{job.openings}</td>
                <td>{job.hiringManager}</td>
                <td><FontAwesomeIcon icon={faEllipsis} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobList;
