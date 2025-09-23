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
          'relative ml-1 space-y-5',
        )}
        aria-label="Work experience timeline"
      >
        {EXPERIENCE.map((exp, i) => {
          const lines = Array.isArray(exp.description)
            ? exp.description.slice(0, 2)
            : [exp.description];
          return (
            <li key={i} className="relative pl-4">
              <span className="bg-ring absolute top-1.5 left-0 size-2 -translate-x-1/2 rounded-full" />
              <div className="grid grid-cols-1 gap-3 md:gap-1.5">
                <div className="grid grid-cols-1 items-baseline gap-1 md:grid-cols-[1fr_auto] md:items-center md:gap-2">
                  <span className="text-foreground truncate text-base font-semibold">
                    {exp.title + ' | ' + exp.company}
                  </span>
                  <time className="text-muted-foreground text-sm font-normal whitespace-nowrap">
                    {exp.duration}
                  </time>
                </div>
                <div className="text-muted-foreground space-y-0.5 text-base tracking-tight">
                  {lines.map((l, idx) => (
                    <p key={idx}>{l}</p>
                  ))}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
