import ThemeToggle from '@/components/theme-toggle';
import { CONTACT_DETAILS } from '@/constants/contactDetails';
import { ClientOnly } from 'vite-react-ssg/single-page';

export default function Hero() {
  return (
    <section
      id="home"
      className="flex scroll-mt-20 flex-col gap-6 font-mono"
      aria-labelledby="hero-heading"
    >
      <div className="flex items-center gap-2">
        <h1 id="hero-heading" className="text-primary text-2xl font-bold tracking-tight">
          &gt; Rahul Poonia
          <span className="animate-blink ml-1.5 inline-block h-6 w-2 -translate-y-0.5 bg-current align-middle"></span>
        </h1>
        <ClientOnly>
          {() => (
            <ThemeToggle className="border-border hover:bg-muted/80 ml-auto flex cursor-pointer items-center border bg-transparent px-1.5 py-1 transition-colors" />
          )}
        </ClientOnly>
      </div>

      <div className="space-y-4 text-sm md:text-base">
        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          B.Tech. student at IIT Kharagpur & Full-stack developer. I like taking raw ideas and
          shaping them into working products. Currently building a local RAG desktop app that makes
          your documents searchable.
        </p>

        <div className="space-y-2">
          <p className="text-muted-foreground text-xs font-bold tracking-wider uppercase">Stack</p>
          <div className="flex flex-wrap gap-1.5">
            {[
              'TypeScript',
              'Go',
              'Python',
              'Rust',
              'React',
              'Next.js',
              'Node.js',
              'PostgreSQL',
              'Docker',
              'AWS',
            ].map((t) => (
              <span
                key={t}
                className="border-border bg-muted/20 text-muted-foreground hover:text-foreground hover:border-foreground/30 inline-flex items-center rounded border px-2 py-0.5 text-xs font-medium transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
          {CONTACT_DETAILS.map((c) => {
            return (
              <a
                href={c.link}
                className="text-muted-foreground hover:text-foreground inline-flex cursor-pointer items-center gap-2 transition-colors"
                key={c.link}
                aria-label={c.text}
                title={c.text}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="inline-flex items-center gap-1.5">
                  [<c.icon className="size-4" /> {c.text}]
                </span>
              </a>
            );
          })}
        </div>

        <p className="text-muted-foreground/50 mt-2 hidden text-xs md:block">
          // Press <span className="font-bold">Ctrl+K</span> to open commands
        </p>
      </div>
    </section>
  );
}
