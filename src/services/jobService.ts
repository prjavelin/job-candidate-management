// src/services/jobService.ts
import { JobPosting } from "../models/JobPosting";

const API_URL = "https://localhost:7226/api/JobPostings";

export const getJobs = async (): Promise<JobPosting[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }
  return response.json();
};

export const postJob = async (job: JobPosting): Promise<JobPosting> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });
  if (!response.ok) {
    throw new Error("Failed to post job");
  }
  return response.json();
};
