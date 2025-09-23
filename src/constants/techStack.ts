import {
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandPython,
  IconBrandGolang,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTailwind,
  //   IconBrandShadcnui,
  IconBrandFramer,
  //   IconBrandNodedotjs,
  //   IconBrandExpress,
  //   IconBrandPostgresql,
  IconBrandMongodb,
  IconBrandPrisma,
  IconBrandGit,
  IconBrandGithub,
  //   IconBrandGithubActions,
  IconBrandVercel,
  IconBrandAws,
  type Icon,
} from '@tabler/icons-react';

export const TECH_STACK: {
  category: string;
  clusters: {
    label: string;
    items: { name: string; icon?: Icon }[];
  }[];
}[] = [
  {
    category: 'Languages',
    clusters: [
      {
        label: 'Primary',
        items: [
          {
            name: 'TypeScript',
            icon: IconBrandTypescript,
          },
          {
            name: 'JavaScript',
            icon: IconBrandJavascript,
          },
          { name: 'Python', icon: IconBrandPython },
          { name: 'Go', icon: IconBrandGolang },
        ],
      },
    ],
  },
  {
    category: 'Frontend',
    clusters: [
      {
        label: 'Core',
        items: [
          { name: 'React', icon: IconBrandReact },
          { name: 'Next.js', icon: IconBrandNextjs },
          { name: 'Zustand' },
        ],
      },
      {
        label: 'Styling',
        items: [
          {
            name: 'Tailwind CSS',
            icon: IconBrandTailwind,
          },
          {
            name: 'Shadcn UI',
            //  icon: IconBrandShadcnui
          },
          {
            name: 'Framer Motion',
            icon: IconBrandFramer,
          },
        ],
      },
    ],
  },
  {
    category: 'Backend',
    clusters: [
      {
        label: 'Frameworks',
        items: [
          {
            name: 'Node.js',
            // icon: IconBrandNodedotjs
          },
          {
            name: 'Express.js',
            //  icon: IconBrandExpress
          },
          { name: 'Hono' },
          { name: 'FastAPI' },
        ],
      },
      {
        label: 'Databases',
        items: [
          {
            name: 'PostgreSQL',
            // icon: IconBrandPostgresql,
          },
          { name: 'MongoDB', icon: IconBrandMongodb },
          { name: 'SQLite' },
        ],
      },
      {
        label: 'ORM & Query',
        items: [
          { name: 'Prisma', icon: IconBrandPrisma },
          { name: 'Drizzle ORM' },
          { name: 'Mongoose' },
        ],
      },
    ],
  },
  {
    category: 'AI / Data',
    clusters: [
      {
        label: 'NLP & RAG',
        items: [{ name: 'LangChain' }, { name: 'Embeddings / Vector Search' }],
      },
    ],
  },
  {
    category: 'Tools & Infra',
    clusters: [
      {
        label: 'CI/CD',
        items: [
          { name: 'Git', icon: IconBrandGit },
          { name: 'GitHub', icon: IconBrandGithub },
          {
            name: 'GitHub Actions',
            // icon: IconBrandGithubActions,
          },
        ],
      },
      {
        label: 'Infra',
        items: [
          { name: 'Nginx' },
          { name: 'Vercel', icon: IconBrandVercel },
          { name: 'AWS', icon: IconBrandAws },
        ],
      },
    ],
  },
];
