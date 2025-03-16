export interface JobPosting {
    id: number;
    title: string;
    description: string;
    location: string;
    status: string;
    openingDate: string;
    closingDate: string;
    chosenCandidate: string;
    budgetRange: string;
    requiredSkills: string[];
    openings: number;
    hiringManager: string;
  }
  