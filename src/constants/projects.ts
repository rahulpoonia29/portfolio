import type { Project } from '@/types/project';

export const PROJECTS: Project[] = [
  {
    id: 'extractous',
    name: 'Extractous Go — Document Extraction Library',
    blurb:
      'A fast, multi-format document extraction library for Go. Built with Rust for maximum throughput, it includes a streaming API for large files and OCR support for scanned documents via Tesseract.',
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
      'A config-driven Go API gateway with radix-tree routing, hot-reload capabilities, and reverse proxy support. Built with a stateless architecture and features round-robin and least-connections load balancing.',
    stack: ['Go', 'Radix Tree', 'Concurrency', 'HTTP', 'Cobra'],
    tags: ['Infrastructure', 'Gateway'],
    links: { code: 'https://github.com/rahulpoonia29/api-gateway' },
  },
  // {
  //   id: 'iitkgp-erp-login',
  //   name: 'IITKGP-ERP-LOGIN — ERP Login Package',
  //   blurb:
  //     'A Node.js package that seamlessly handles IIT Kharagpur ERP login workflows. Exposes CLI and programmatic APIs to automate OTP, security questions, and session management.',
  //   stack: ['Node.js', 'TypeScript', 'Puppeteer', 'CLI'],
  //   tags: ['Library', 'Utility', 'Automation'],
  //   links: {
  //     live: 'https://www.npmjs.com/package/iitkgp-erp-login',
  //     code: 'https://github.com/rahulpoonia29/IITKGP-ERP-LOGIN',
  //   },
  // },
  {
    id: 'applic',
    name: 'Applic — Job Application Tracker',
    blurb:
      'A full-stack platform for managing job applications. Features status tracking, interview scheduling, document management, optimistic UI updates, and role-based authentication.',
    stack: ['Next.js', 'TypeScript', 'React', 'Tailwind', 'PostgreSQL', 'Prisma', 'NextAuth'],
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
      'A privacy-first coding analytics extension for VS Code. It tracks development metrics via Git diff analysis, persisting data locally using LokiJS. Includes per-project timelines and file focus distribution.',
    stack: ['TypeScript', 'VS Code API', 'Git', 'LokiJS'],
    tags: ['Extension', 'Analytics'],
    links: { code: 'https://github.com/rahulpoonia29/devmetrics' },
  },
  {
    id: 'form-builder',
    name: 'Form‑Builder — Visual Form Designer',
    blurb:
      'A drag-and-drop form builder that exports production-ready React Hook Form components with Zod validation. Includes syntax-highlighted code previews and real-time state management.',
    stack: ['React', 'TypeScript', 'React Hook Form', 'Zod', 'Zustand'],
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
      'A visual UI component builder powered by Craft.js for composing shadcn/ui blocks. Provides live property controls and exports clean, reusable JSX to improve developer velocity.',
    stack: ['React', 'TypeScript', 'Craft.js', 'Tailwind', 'ShadcnUI'],
    tags: ['UI Builder', 'Design Tools'],
    links: {
      code: 'https://github.com/rahulpoonia29/Shad-UI',
      live: 'https://shad-ui.vercel.app/editor',
    },
  },
];
