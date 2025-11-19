import { EXPERIENCE } from '@/constants/experience';

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="section-heading">
        Experience
      </h2>

      <div className="flex flex-col gap-8">
        {EXPERIENCE.map((exp, i) => {
          return (
            <div key={i} className="group relative pl-6 sm:pl-8 font-mono">
              {/* Terminal-style marker */}
              <div className="text-muted-foreground absolute top-0 left-0 flex size-6 items-center justify-center text-xs font-bold">
                &gt;
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-foreground text-base font-bold">
                    {exp.title} <span className="text-muted-foreground font-normal">@</span>{' '}
                    {exp.company}
                  </h3>
                  <time className="text-muted-foreground text-xs tabular-nums">
                    {exp.duration}
                  </time>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                  {exp.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
