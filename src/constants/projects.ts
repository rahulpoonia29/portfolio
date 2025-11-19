export type Project = {
  id: string;
  name: string;
  blurb: string;
  stack: string[];
  tags: string[];
  links: { live?: string; code?: string };
};

export const PROJECTS: Project[] = [
  {
    id: 'extractous',
    name: 'Extractous Go — Document Extraction Library',
    blurb:
      'Fast, multi-format document extraction library for Go. Includes streaming API for large files and OCR for scanned documents via Tesseract. Built on Rust for maximum throughput.',
    stack: ['Go', 'Rust', 'CGO', 'FFI', 'Apache Tika', 'Tesseract', 'JNI', 'GitHub Actions'],
    tags: ['Library', 'Systems', 'Cross-Platform'],
    links: {
      code: 'https://github.com/rahulpoonia29/extractous-go',
    },
  },
  {
    id: 'api-gateway',
    name: 'API‑Gateway — Microservice Router',
    blurb:
      'Config-driven Go API gateway with radix-tree routing, hot-reload capabilities, and reverse proxy support. Features round-robin and least-connections load balancing with stateless architecture managed via Cobra CLI.',
    stack: ['Go', 'Radix Tree', 'Concurrency', 'HTTP', 'Cobra'],
    tags: ['Infrastructure', 'Gateway'],
    links: { code: 'https://github.com/rahulpoonia29/api-gateway' },
  },
  {
    id: 'applic',
    name: 'Applic — Job Application Tracker',
    blurb:
      'Full-stack job application management platform with status tracking, interview scheduling, and document management. Features rich text editing, optimistic UI updates, and role-based authentication with email notifications.',
    stack: [
      'Next.js',
      'TypeScript',
      'React',
      'Tailwind',
      'ShadcnUI',
      'PostgreSQL',
      'Prisma',
      'Zustand',
      'NextAuth',
    ],
    tags: ['SaaS', 'Full-Stack'],
    links: {
      live: 'https://applic.vercel.app',
      code: 'https://github.com/rahulpoonia29/applic',
    },
  },
  {
    id: 'devmetrics',
    name: 'Devmetrics — VS Code Extension',
    blurb:
      'Privacy-first coding analytics extension for VS Code. Tracks development metrics through Git diff analysis with local-only persistence using LokiJS. Features per-project timelines, file focus distribution, and customizable analysis intervals.',
    stack: ['TypeScript', 'VS Code API', 'Git', 'LokiJS'],
    tags: ['Extension', 'Analytics'],
    links: { code: 'https://github.com/rahulpoonia29/devmetrics' },
  },
  {
    id: 'form-builder',
    name: 'Form‑Builder — Visual Form Designer',
    blurb:
      'Drag-and-drop form builder that generates production-ready React Hook Form components with type-safe Zod validation schemas. Features syntax-highlighted code previews and real-time form state management.',
    stack: ['React', 'TypeScript', 'React Hook Form', 'Zod', 'Shiki', 'Framer Motion', 'Zustand'],
    tags: ['Developer Tools', 'Code Generation'],
    links: {
      live: 'https://form-builder-bj3.pages.dev',
      code: 'https://github.com/rahulpoonia29/form-builder',
    },
  },
  {
    id: 'shad-ui',
    name: 'Shad‑UI Builder',
    blurb:
      'Visual UI component builder powered by Craft.js for composing shadcn/ui and Tailwind blocks. Features live property controls and exports clean, reusable JSX with focus on developer experience and composability.',
    stack: ['React', 'TypeScript', 'Craft.js', 'Tailwind', 'ShadcnUI'],
    tags: ['UI Builder', 'Design Tools'],
    links: {
      code: 'https://github.com/rahulpoonia29/Shad-UI',
      live: 'https://shad-ui.vercel.app/editor',
    },
  },
];
