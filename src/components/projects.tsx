import { PROJECTS } from '@/constants/projects';
import type { Project } from '@/types/project';
import { cn } from '@/utils/cn';
import { IconChevronDown } from '@tabler/icons-react';
import { motion } from 'motion/react';
import { useState } from 'react';

interface ProjectItemProps {
  project: Project;
  index: number;
}

export default function Projects() {
  return (
    <section id="projects" className="section font-mono" aria-labelledby="projects-section-heading">
      <h2 id="projects-section-heading" className="section-heading">
        Projects
      </h2>

      <div className="flex flex-col gap-1">
        {PROJECTS.map((project, i) => (
          <ProjectItem key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectLinkButton({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        [{label}]
      </a>
    </li>
  );
}

function ProjectItem({ project, index }: ProjectItemProps) {
  const [open, setOpen] = useState(false);
  const panelId = `project-panel-${index}`;
  const buttonId = `project-trigger-${index}`;

  return (
    <li className="border-border list-none border-b last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        id={buttonId}
        aria-expanded={open}
        aria-controls={panelId}
        className="group hover:bg-muted/50 flex w-full cursor-pointer items-center justify-between gap-3 px-2 py-3 text-left transition-colors"
      >
        <h3 className="text-foreground max-w-2/3 truncate text-base font-bold">
          <span className="text-muted-foreground mr-3 inline-block opacity-50 transition-all group-hover:translate-x-1 group-hover:opacity-100">
            &gt;
          </span>
          {project.name}
        </h3>

        <div className="ms-2 flex min-w-0 shrink-0 items-center gap-4">
          {project.links && (
            <ol className="flex items-center gap-3">
              {project.links.live && <ProjectLinkButton href={project.links.live} label="live" />}
              {project.links.code && <ProjectLinkButton href={project.links.code} label="code" />}
              {project.links.demo && <ProjectLinkButton href={project.links.demo} label="demo" />}
            </ol>
          )}
          <IconChevronDown
            className={cn(
              'text-muted-foreground size-4 transition-transform duration-300 ease-out',
              open && 'rotate-180',
            )}
          />
        </div>
      </button>

      <motion.div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{ overflow: 'hidden', height: 0, opacity: 0 }}
      >
        <div className={cn('px-4 pt-2 pb-6', open && 'bg-muted/20')}>
          <div className="ml-3 space-y-4 pl-0.5">
            <p className="text-muted-foreground text-pretty md:text-base">{project.blurb}</p>

            {project.stack?.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((stack) => (
                  <span
                    key={stack}
                    className="border-border bg-muted/20 text-muted-foreground hover:text-foreground hover:border-foreground/30 inline-flex items-center rounded border px-2 py-0.5 text-xs font-medium transition-colors"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </li>
  );
}
