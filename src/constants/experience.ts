export interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string;
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: 'Backend Developer',
    company: 'OpenSoft (GC), IIT Kharagpur',
    duration: 'Mar 2025',
    description:
      'Engineered a FastAPI backend powered by LangChain and Gemini to analyze conversations, compute vulnerability scores, and generate HR‑ready well‑being insights.',
  },
  {
    title: 'Full‑Stack Developer',
    company: 'Jobfynder',
    duration: 'Nov 2024 – Feb 2025',
    description:
      'Developed and shipped a job board platform featuring real‑time chat and applicant tracking. Implemented JWT role-based auth, an SES/SQS email pipeline, and automated CI/CD deployments to AWS EC2.',
  },
  {
    title: 'Python Backend Developer',
    company: 'Inter IIT Tech Meet, IIT Kharagpur',
    duration: 'Dec 2024',
    description:
      'Built a Quart backend to control physical drones via MAVSDK. Exposed REST APIs and utilized Socket.IO to stream real-time telemetry data to a React dashboard.',
  },
  {
    title: 'Backend Developer (Open Source)',
    company: 'GirlScript Summer Of Code',
    duration: 'Mar 2024',
    description:
      'Contributed to the core Express.js service powering the GSSoC leaderboard. Implemented contributor verification, label checking, and aggressive caching to minimize GitHub API rate limits.',
  },
];
