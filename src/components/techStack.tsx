import { TECH_STACK } from '@/constants/techStack';
import { createElement } from 'react';

export default function TechStack() {
  const groups = TECH_STACK.filter(Boolean);

  // A small reusable chip renderer so chips look consistent
  const renderChip = (item: { name: string; icon?: any }) => (
    <span
      key={item.name}
      title={item.name}
      className="border-border bg-card inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium whitespace-nowrap transition hover:shadow-sm"
      aria-label={item.name}
    >
      {item.icon && (
        <span className="-ml-0.5 opacity-80">{createElement(item.icon, { size: 14 })}</span>
      )}
      {item.name}
    </span>
  );

  return (
    <section id="skills" className="section" aria-labelledby="tech-stack-heading">
      <h2 id="tech-stack-heading" className="section-heading">
        Tools & Stack
      </h2>

      <div className="border-border bg-card overflow-hidden rounded-md border">
        <ul className="divide-border/70 divide-y">
          {groups.map((g) => (
            <li
              key={g.category}
              className="grid grid-cols-[90px_minmax(0,1fr)] items-start gap-4 px-4 py-4 md:grid-cols-[130px_minmax(0,1fr)]"
            >
              {/* Left category label */}
              <div className="pt-1">
                <span className="text-muted-foreground/90 text-sm font-semibold tracking-wide uppercase">
                  {g.category}
                </span>
              </div>

              {/* Right: clusters */}
              <div className="flex flex-col gap-3">
                {g.clusters.map((cluster) => (
                  // Each cluster is its own two-column row: small fixed label + chips
                  <div
                    key={cluster.label}
                    className="grid grid-cols-[100px_minmax(0,1fr)] items-start gap-3"
                  >
                    {/* Cluster label — small, muted, top-aligned */}
                    <div className="pt-0.5">
                      <span className="text-muted-foreground/80 border-border inline-flex items-center justify-center rounded-md border bg-transparent px-2 py-1 text-xs font-semibold tracking-wide uppercase select-none">
                        {cluster.label}
                      </span>
                    </div>

                    {/* Chips area — wraps consistently */}
                    <div className="flex flex-wrap items-start gap-2">
                      {cluster.items.map((item) => (item ? renderChip(item) : null))}
                    </div>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
