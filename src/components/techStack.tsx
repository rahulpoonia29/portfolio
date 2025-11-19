import { TECH_STACK } from '@/constants/techStack';

export default function TechStack() {
  const groups = TECH_STACK.filter(Boolean);

  return (
    <section id="skills" className="section" aria-labelledby="tech-stack-heading">
      <h2 id="tech-stack-heading" className="section-heading">
        Tools & Stack
      </h2>

      <div className="flex flex-col gap-6 font-mono text-sm">
        {groups.map((g, i) => (
          <div key={g.category} className="flex flex-col gap-3 md:flex-row md:gap-6">
            <h3 className="text-muted-foreground shrink-0 font-bold tracking-wider uppercase md:w-48">
              {g.category}
            </h3>

            <div className="flex w-full flex-wrap gap-1.5">
              {g.clusters
                .flatMap((c) => c.items)
                .map((item) =>
                  item ? (
                    <span
                      key={item.name}
                      className="group border-border bg-muted/20 text-muted-foreground hover:text-foreground hover:border-foreground/30 inline-flex cursor-default items-center gap-1.5 rounded-sm border px-2 py-0.5 text-xs font-medium transition-colors"
                    >
                      {item.iconUrl && (
                        <img
                          src={item.iconUrl}
                          alt={item.name}
                          className="size-3 opacity-70 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0"
                        />
                      )}
                      {item.name}
                    </span>
                  ) : null,
                )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
