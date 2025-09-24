import { TECH_STACK } from '@/constants/techStack';
import { Fragment } from 'react/jsx-runtime';

export default function TechStack() {
  const groups = TECH_STACK.filter(Boolean);

  const renderChip = (item: { name: string; iconUrl?: string }) => (
    <span
      key={item.name}
      title={item.name}
      className="border-border bg-card inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-sm font-medium whitespace-nowrap transition hover:shadow-sm"
      aria-label={item.name}
    >
      {item.iconUrl && <img src={item.iconUrl} alt={item.name} className="-ml-0.5 size-4" />}
      {/* {item.icon && <item.icon className="-ml-0.5 size-5 opacity-80" strokeWidth={1.5} />} */}
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
              className="grid grid-cols-[2fr_2fr_7fr] items-start gap-4 px-4 py-4"
              style={{ gridTemplateRows: `repeat(${g.clusters.length}, auto)` }}
            >
              <span
                className={
                  'text-muted-foreground/90 col-span-1 row-span-full self-center text-sm font-semibold tracking-wide uppercase'
                }
              >
                {g.category}
              </span>

              {g.clusters.map((cluster) => (
                <Fragment key={cluster.label}>
                  <span className="text-muted-foreground/80 border-border col-start-2 w-fit rounded-md border bg-transparent px-2 py-1 text-xs font-semibold tracking-wide uppercase select-none">
                    {cluster.label}
                  </span>

                  <div className="flex flex-wrap items-start gap-2">
                    {cluster.items.map((item) => (item ? renderChip(item) : null))}
                  </div>
                </Fragment>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
