export type Project = {
  id: string;
  name: string;
  blurb: string;
  details: string[];
  stack: string[];
  tags: string[];
  links: { live?: string; code?: string };
};

export const PROJECTS: Project[] = [
  {
    id: 'api-gateway',
    name: 'API‑Gateway — Microservice Router',
    blurb:
      'Config‑driven Go gateway with radix routing, hot‑reload and reverse proxy; round‑robin/least‑connections balancing.',
    details: [
      'Config-driven API gateway built in Go with Radix Tree routing.',
      'Supports hot-reload configs, reverse proxying, and load balancing (round-robin, least-connections).',
      'Stateless design with external JSON configs, managed via Cobra CLI.',
      'Low-allocation routing with deterministic radix-tree matcher.',
    ],
    stack: ['Go', 'Radix Tree', 'Concurrency', 'HTTP'],
    tags: ['Infra', 'Gateway'],
    links: {},
  },
  {
    id: 'applic',
    name: 'Applic — Job Application Tracker',
    blurb:
      'Unified job hunt workspace—track roles, statuses, interviews, notes & files in one calm surface.',
    details: [
      'Next.js & TypeScript full-stack job tracker with status updates and interview scheduling.',
      'Rich editor (Novel) with attachment uploads (UploadThing).',
      'Optimistic updates via Zustand cache over Postgres/Prisma.',
      'Role-aware authentication with guarded mutations and email updates via Resend.',
    ],
    stack: [
      'Next.js',
      'React',
      'Tailwind',
      'ShadcnUI',
      'PostgreSQL',
      'Prisma',
      'Zustand',
      'NextAuth',
      'UploadThing',
      'Novel',
    ],
    tags: ['SaaS', 'Product'],
    links: {
      live: 'https://applic.rahulpoonia.co',
      code: 'https://something.com',
    },
  },
  {
    id: 'devmetrics',
    name: 'Devmetrics — VS Code Extension',
    blurb: 'Local‑only coding metrics from Git diffs; privacy by design (LokiJS, no telemetry).',
    details: [
      'TypeScript VS Code extension that tracks coding metrics via Git diff analysis.',
      'Local persistence with LokiJS ensuring privacy (no external telemetry).',
      'Per-project timeline, file focus distribution, and customisable analysis intervals.',
      'Integrated TreeView, StatusBar, and Command Palette for intuitive UX.',
    ],
    stack: ['VS Code API', 'TypeScript', 'Git', 'LokiJS'],
    tags: ['Extension', 'Analytics'],
    links: {},
  },
  {
    id: 'form-builder',
    name: 'Form‑Builder — Visual → Code',
    blurb: 'Drag‑drop form builder that generates RHF components and matching Zod schemas.',
    details: [
      'Drag-and-drop interface for building forms with Framer Motion.',
      'Generates React Hook Form JSX and Zod schemas from design.',
      'Syntax-highlighted previews using ShikiJS.',
      'Managed complex form states with Zustand for smooth editing.',
    ],
    stack: ['React', 'React Hook Form', 'Zod', 'Shiki', 'Framer Motion', 'Zustand'],
    tags: ['Builder'],
    links: {},
  },
  {
    id: 'shad-ui',
    name: 'Shad‑UI Builder',
    blurb: 'Compose Tailwind + shadcn/ui blocks on a canvas; export clean, reusable JSX.',
    details: [
      'Craft.js powered canvas with live prop controls.',
      'Exports uncluttered, reusable JSX blocks.',
      'Focuses on composability and developer experience over heavy theming.',
    ],
    stack: ['React', 'Craft.js', 'Tailwind', 'ShadcnUI'],
    tags: ['UI', 'Drag&Drop'],
    links: {},
  },
];
