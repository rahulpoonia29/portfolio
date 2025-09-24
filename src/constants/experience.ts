export interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string; // one-liner summary
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: 'Backend Developer',
    company: 'OpenSoft (GC), IIT Kharagpur',
    duration: 'Mar 2025',
    description:
      'Built a FastAPI backend with LangChain + Gemini to analyse conversations, compute a vulnerability score, and generate HR‑ready well‑being insights.',
  },
  {
    title: 'Full‑stack Developer',
    company: 'Jobfynder',
    duration: 'Nov 2024 – Feb 2025',
    description:
      'Shipped job board, tracker and real‑time chat; added JWT role auth, SES+SQS email pipeline, and CI/CD to EC2 behind Nginx + PM2.',
  },
  {
    title: 'Python Backend Developer',
    company: 'Inter IIT Tech Meet, IIT Kharagpur',
    duration: 'Dec 2024',
    description:
      'Built a Quart backend controlling drones via MAVSDK with REST APIs and Socket.IO telemetry to a React dashboard, plus a Faker‑powered mock vehicle.',
  },
  {
    title: 'Backend Developer (Open Source)',
    company: 'GirlScript Summer Of Code',
    duration: 'Mar 2024',
    description:
      'Contributed to an Express.js service for the GSSoC leaderboard with contributor verification, label checks, indexing and caching to reduce GitHub API calls.',
  },
];
