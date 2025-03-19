import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { JobPosting } from "../../models/JobPosting";
import { postJob } from "../../services/jobService";
//import "./JobForm.module.css";

// interface JobFormProps {
//   onAddJob: (newJob: JobPosting) => void;
//   onClose: () => void;
// }

// const JobForm: React.FC<JobFormProps> = ({ onAddJob, onClose }) => {
//   const [job, setJob] = useState<JobPosting>({
//     id: 0,
//     title: "",
//     description: "",
//     location: "Remote",
//     status: "Open",
//     openingDate: "",
//     closingDate: "",
//     chosenCandidate: "None",
//     topCandidates: "",
//     budgetRange: "",
//     requiredSkills: '',
//     openings: 1,
//     hiringManager: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setJob({ ...job, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onAddJob({ ...job, id: Date.now() }); // Assign unique ID
//     onClose();
//   };

interface JobFormProps {
    onAddJob: (newJob: JobPosting) => void;
    onClose: () => void;
  }
  
const JobForm: React.FC<JobFormProps> = ({ onAddJob, onClose }) => {
  const [job, setJob] = useState<JobPosting>({
    id: 1,
    title: "",
    description: "",
    location: "Remote",
    status: "Open",
    openingDate: "",
    closingDate: "",
    chosenCandidate: "None",
    budgetRange: "",
    requiredSkills: '',
    openings: 1,
    hiringManager: "",
  });
  
    const handleChange = (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      // For the requiredSkills field, you might later parse a comma-separated string into an array
      setJob({ ...job, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        // Post the job to the backend API
        const newJob = await postJob({ ...job, id: 1 });
        onAddJob(newJob);
        onClose();
      } catch (err) {
        console.error(err);
        console.log(Response);
      }
    };

  return (
    <div className="modal show d-block" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add New Job</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Job Title</label>
                <input type="text" name="title" className="form-control" value={job.title} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea name="description" className="form-control" value={job.description} onChange={handleChange} required></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">Location</label>
                <select name="location" className="form-select" value={job.location} onChange={handleChange}>
                  <option value="Remote">Remote</option>
                  <option value="On-Site">On-Site</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Opening Date</label>
                <input type="date" name="openingDate" className="form-control" value={job.openingDate} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Closing Date</label>
                <input type="date" name="closingDate" className="form-control" value={job.closingDate} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Budget Range</label>
                <input type="text" name="budgetRange" className="form-control" value={job.budgetRange} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Required Skills (comma-separated)</label>
                <input type="text" name="requiredSkills" className="form-control" value={job.requiredSkills} onChange={handleChange} />
                </div>
              <div className="mb-3">
                <label className="form-label">Hiring Manager</label>
                <input type="text" name="hiringManager" className="form-control" value={job.hiringManager} onChange={handleChange} required />
              </div>
              <button type="submit" className="btn btn-primary add-job-btn">Add Job</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobForm;
