import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

import { JobPosting } from "../../models/JobPosting";
import JobForm from "../Joblist/AddJob"; 
import { getJobs } from "../../services/jobService";


const JobList: React.FC = () => {
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [jobToEdit, setJobToEdit] = useState<JobPosting | null>(null);
  // Track which job's action menu is open (null means none are open)
  const [activeActionJobId, setActiveActionJobId] = useState<number | null>(null);

  // Toggle the action menu for a specific job row
  const toggleActions = (jobId: number) => {
    setActiveActionJobId((prev) => (prev === jobId ? null : jobId));
  };

  const handleEdit = (job: JobPosting) => {
    setJobToEdit(job);
    setShowModal(true);
    setActiveActionJobId(null);
  };

  const handleDelete = (jobId: number) => {
    // For now, simply remove the job from the list
    setJobs(jobs.filter((job) => job.id !== jobId));
    setActiveActionJobId(null);
  };

  const handleViewCandidates = (jobId: number) => {
    // For now, you might redirect to a placeholder URL or just log the action
    console.log(`View candidates for job id: ${jobId}`);
    setActiveActionJobId(null);
    // e.g., using react-router: navigate(`/jobs/${jobId}/candidates`);
  };
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getJobs()
      .then((data) => setJobs(data))
      .catch((err) => console.error(err));
  }, []);

  const addJob = (newJob: JobPosting) => {
    // If editing, update the existing job; otherwise, add a new job.
    if (jobToEdit) {
      setJobs(jobs.map((job) => (job.id === newJob.id ? newJob : job)));
      setJobToEdit(null);
    } else {
      setJobs([...jobs, newJob]);
    }
  };

  return (
    <div className="container-fluid mt-4">
      <h2 className="mb-3">Job Postings</h2>
      <div className="d-flex justify-content-end">
      <button className="btn btn-primary mb-3" onClick={() => { setJobToEdit(null); setShowModal(true); }}>
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
                <td style={{ position: "relative" }}>
                  <button
                    className="btn btn-link p-0"
                    onClick={() => toggleActions(job.id)}
                  >
                    <FontAwesomeIcon icon={faEllipsis} />
                  </button>
                  {activeActionJobId === job.id && (
                    <div
                      className="position-absolute bg-primary text-white border p-2"
                      style={{
                        top: "100%",
                        right: 0,
                        zIndex: 1000,
                        minWidth: "120px",
                      }}
                    >
                      <span
                        className="d-block mb-1"
                        onClick={() => handleEdit(job)}
                      >
                        Edit
                      </span>
                      <span
                        className="d-block mb-1"
                        onClick={() => handleViewCandidates(job.id)}
                      >
                        View Candidates
                      </span>
                      <span
                        className="d-block"
                        onClick={() => handleDelete(job.id)}
                      >
                        Delete
                      </span>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobList;
