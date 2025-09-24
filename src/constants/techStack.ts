export const TECH_STACK: {
  category: string;
  clusters: {
    label: string;
    items: { iconUrl?: string; name: string }[];
  }[];
}[] = [
  {
    category: 'Languages',
    clusters: [
      {
        label: 'Languages',
        items: [
          {
            name: 'TypeScript',
            iconUrl: 'https://svgl.app/library/typescript.svg',
          },
          { name: 'Python', iconUrl: 'https://svgl.app/library/python.svg' },
          { name: 'Go', iconUrl: 'https://svgl.app/library/golang.svg' },
        ],
      },
    ],
  },
  {
    category: 'Frontend Development',
    clusters: [
      {
        label: 'Frameworks',
        items: [
          { name: 'React', iconUrl: 'https://svgl.app/library/react_light.svg' },
          { name: 'Next.js', iconUrl: 'https://svgl.app/library/nextjs_icon_dark.svg' },
        ],
      },
      {
        label: 'State & Styling',
        items: [
          { name: 'Zustand' },
          {
            name: 'Tailwind CSS',
            iconUrl: 'https://svgl.app/library/tailwindcss.svg',
          },
          { name: 'Shadcn UI', iconUrl: 'https://svgl.app/library/shadcn-ui.svg' },
          {
            name: 'Motion',
            iconUrl: 'https://svgl.app/library/motion.svg',
          },
        ],
      },
    ],
  },
  {
    category: 'Backend Development',
    clusters: [
      {
        label: 'Frameworks',
        items: [
          { name: 'Express.js', iconUrl: 'https://svgl.app/library/expressjs.svg' },
          { name: 'Hono', iconUrl: 'https://svgl.app/library/hono.svg' },
        ],
      },
      {
        label: 'Databases',
        items: [
          {
            name: 'PostgreSQL',
            iconUrl: 'https://svgl.app/library/postgresql.svg',
          },
          { name: 'MongoDB', iconUrl: 'https://svgl.app/library/mongodb.svg' },
          { name: 'SQLite', iconUrl: 'https://svgl.app/library/sqlite.svg' },
        ],
      },
      {
        label: 'ORM',
        items: [
          { name: 'Drizzle', iconUrl: 'https://svgl.app/library/drizzle-orm_light.svg' },
          { name: 'Prisma', iconUrl: 'https://svgl.app/library/prisma.svg' },
          { name: 'Mongoose' },
        ],
      },
    ],
  },
  {
    category: 'LLM',
    clusters: [
      {
        label: 'AI Tools',
        items: [
          { name: 'LangChain' },
          { name: 'Vector Search' },
          { name: 'OpenAI API', iconUrl: 'https://svgl.app/library/openai.svg' },
        ],
      },
    ],
  },
  {
    category: 'DevOps & Deployment',
    clusters: [
      {
        label: 'Version Control',
        items: [
          { name: 'Git', iconUrl: 'https://svgl.app/library/git.svg' },
          { name: 'GitHub', iconUrl: 'https://svgl.app/library/github_light.svg' },
          { name: 'GitHub Actions' },
        ],
      },
      {
        label: 'Cloud & Hosting',
        items: [
          { name: 'Vercel', iconUrl: 'https://svgl.app/library/vercel.svg' },
          { name: 'AWS', iconUrl: 'https://svgl.app/library/aws_light.svg' },
          { name: 'Nginx' },
        ],
      },
    ],
  },
];
