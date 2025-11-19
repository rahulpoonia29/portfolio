import { TECH_STACK } from '@/constants/techStack';

export default function TechStack() {
  const groups = TECH_STACK.filter(Boolean);

  return (
    <section id="skills" className="section" aria-labelledby="tech-stack-heading">
      <h2 id="tech-stack-heading" className="section-heading">
        Tools & Stack
      </h2>

      <div className="bg-card text-card-foreground border-border flex flex-col overflow-hidden rounded-xl border font-mono text-sm">
        {groups.map((g, i) => (
          <div
            key={g.category}
            className="border-border flex flex-col gap-3 border-b p-4 last:border-b-0 md:flex-row md:gap-6"
          >
            <h3 className="text-muted-foreground shrink-0 font-bold tracking-wider uppercase md:w-48">
              {g.category}
            </h3>

            <div className="flex w-full flex-col gap-3">
              {g.clusters.map((cluster) => (
                <div
                  key={cluster.label}
                  className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-4"
                >
                  <div className="shrink-0 md:w-28">
                    <span className="border-border text-muted-foreground inline-block rounded border px-1.5 py-0.5 text-center text-[10px] font-medium uppercase">
                      {cluster.label}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {cluster.items.map((item) =>
                      item ? (
                        <span
                          key={item.name}
                          className="border-border bg-muted/20 text-muted-foreground hover:text-foreground hover:border-foreground/30 inline-flex items-center gap-1.5 rounded border px-2 py-0.5 text-xs font-medium transition-colors"
                        >
                          {item.iconUrl && (
                            <img
                              src={item.iconUrl}
                              alt={item.name}
                              className="size-3 opacity-70 grayscale"
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
          </div>
        ))}
      </div>
    </section>
  );
}
