import { PROJECTS } from '@/constants/projects';
import type { Project } from '@/types/project';
import { cn } from '@/utils/cn';
import { IconArrowUpRight, IconBrandGithub, IconChevronDown } from '@tabler/icons-react';
import { motion } from 'motion/react';
import { useState } from 'react';

interface ProjectItemProps {
  project: Project;
  index: number;
}

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-section-heading">
      <h2 id="projects-section-heading" className="section-heading">
        Projects
      </h2>
      <ol className="divide-y-border divide-y-1">
        {PROJECTS.map((project, i) => (
          <ProjectItem key={project.id} project={project} index={i} />
        ))}
      </ol>
    </section>
  );
}

function ProjectLinkButton({
  href,
  icon,
  label,
}: {
  href: string;
  icon?: React.ReactNode;
  label: string;
}) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="border-border bg-muted text-foreground inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-sm font-medium transition-colors hover:border-black"
        onClick={(e) => e.stopPropagation()}
      >
        {icon}
        <span>{label}</span>
      </a>
    </li>
  );
}

function ProjectItem({ project, index }: ProjectItemProps) {
  const [open, setOpen] = useState(false);
  const [aspect, setAspect] = useState<number | null>(null);
  const panelId = `project-panel-${index}`;
  const buttonId = `project-trigger-${index}`;

  return (
    <li className="list-none">
      <button
        onClick={() => setOpen((o) => !o)}
        id={buttonId}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-2 text-left"
      >
        <h3 className="text-foreground max-w-1/2 truncate text-base font-semibold">
          {project.name}
        </h3>

        <div className="flex min-w-0 items-center gap-2">
          {project.links && (
            <ol className="flex items-center gap-1.5">
              {project.links.live && (
                <ProjectLinkButton
                  href={project.links.live}
                  icon={<IconArrowUpRight size={12} />}
                  label="live"
                />
              )}
              {project.links.code && (
                <ProjectLinkButton
                  href={project.links.code}
                  icon={<IconBrandGithub size={12} />}
                  label="code"
                />
              )}
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
        style={{ overflow: 'hidden' }}
      >
        <div className="flex flex-col gap-4 px-4 pt-1 pb-4 md:flex-row">
          {project.image ? (
            <div
              className={cn(
                'relative w-full overflow-hidden rounded border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-800',
                aspect ? (aspect < 1 ? 'md:max-w-[32%]' : 'md:max-w-[50%]') : 'md:max-w-[50%]',
              )}
              style={aspect ? { aspectRatio: aspect.toString() } : undefined}
            >
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                onLoad={(e) => {
                  const { naturalWidth, naturalHeight } = e.currentTarget;
                  if (naturalWidth && naturalHeight) {
                    setAspect(naturalWidth / naturalHeight);
                  }
                }}
                className="h-full w-full object-cover"
              />
              {!aspect && (
                <div className="absolute inset-0 animate-pulse bg-zinc-200 dark:bg-zinc-800" />
              )}
            </div>
          ) : (
            <div className="relative flex aspect-[16/9] w-full items-center justify-center rounded border border-zinc-200 bg-zinc-100 text-xs text-zinc-500 md:max-w-[40%] dark:border-zinc-800 dark:bg-zinc-800">
              <span>Image</span>
            </div>
          )}

          <div className="flex-1 space-y-2">
            <p className="text-muted-foreground text-pretty md:text-base">{project.blurb}</p>

            {project.stack?.length > 0 && (
              <ol className="flex flex-wrap gap-1.5">
                {project.stack.map((stack) => (
                  <li key={stack} className="chip">
                    {stack}
                  </li>
                ))}
              </ol>
            )}
          </div>
        </div>
      </motion.div>
    </li>
  );
}
