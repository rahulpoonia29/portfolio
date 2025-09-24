import { EXPERIENCE } from '@/constants/experience';
import { cn } from '@/utils/cn';

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="section-heading">
        Experience
      </h2>

      <ol
        className={cn(
          'before:bg-border before:absolute before:top-1.5 before:bottom-1.5 before:w-px',
          'relative ml-1 space-y-5 ps-2',
        )}
        aria-label="Work experience timeline"
      >
        {EXPERIENCE.map((exp, i) => {
          return (
            <li key={i} className="relative pl-4">
              <span className="bg-ring/80 absolute top-1.5 left-0 size-2 -translate-x-1/2 rounded-full" />
              <div className="grid grid-cols-1 gap-3 md:gap-1.5">
                <div className="grid grid-cols-1 items-baseline gap-1 md:grid-cols-[1fr_auto] md:items-center md:gap-2">
                  <h3 className="text-foreground truncate text-base font-semibold">
                    {exp.title + ' | ' + exp.company}
                  </h3>
                  <time className="text-muted-foreground text-sm font-normal whitespace-nowrap">
                    {exp.duration}
                  </time>
                </div>
                <p className="text-muted-foreground text-base tracking-tight">{exp.description}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
