import ThemeToggle from '@/components/theme-toggle';
import { CONTACT_DETAILS } from '@/constants/contactDetails';
import { ClientOnly } from 'vite-react-ssg/single-page';

export default function Hero() {
  return (
    <section id="home" className="flex flex-col gap-6 font-mono" aria-labelledby="hero-heading">
      <div className="flex items-center gap-2">
        <h1 id="hero-heading" className="text-primary text-2xl font-bold tracking-tight">
          &gt; Rahul Poonia
        </h1>
        <ClientOnly>
          {() => (
            <ThemeToggle className="border-border hover:bg-muted/80 ml-auto flex cursor-pointer items-center border bg-transparent px-1.5 py-1 transition-colors" />
          )}
        </ClientOnly>
      </div>

      <div className="space-y-4 text-sm md:text-base">
        <p className="text-muted-foreground max-w-full leading-relaxed">
          B.Tech student at <span className="text-foreground font-medium">IIT Kharagpur</span>{' '}
          interested in software development and backend systems. I enjoy exploring new ideas and
          turning some of them into working projects, from web apps and React Native applications to
          building libraries and full-stack systems like{' '}
          <span className="text-foreground font-medium">Extractous-Go</span> and{' '}
          <span className="text-foreground font-medium">Trano</span>.
        </p>

        <div className="space-y-2">
          <p className="text-muted-foreground text-xs font-bold tracking-wider uppercase">Stack</p>
          <div className="flex flex-wrap gap-1.5">
            {[
              'TypeScript',
              'Go',
              'Rust',
              'Python',
              'Kotlin',
              'React',
              'React Native',
              'Next.js',
              'Node.js',
              'PostgreSQL',
              'WebScraping',
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

        <p className="text-muted-foreground/50 mt-2 hidden items-center gap-1.5 text-xs md:flex">
          // Press <kbd className="kbd">Ctrl</kbd> + <kbd className="kbd">K</kbd> to open commands
        </p>
      </div>
    </section>
  );
}
