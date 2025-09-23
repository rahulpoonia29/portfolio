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
    name: 'API Gateway',
    blurb:
      'Lightweight Go API gateway with hot-reload configs, radix-tree routing & adaptive balancing.',
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
    name: 'Applic – Job Tracker',
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
    name: 'Devmetrics Extension',
    blurb:
      'Local-only VS Code extension turning Git diffs into focus & activity insights (no telemetry).',
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
    name: 'Form Builder',
    blurb: 'Visual composer that emits clean React Hook Form components + matching Zod schema.',
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
    name: 'Shad-UI Builder',
    blurb:
      'Drag-and-drop canvas for composing Tailwind + shadcn/ui blocks with production-ready export.',
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
