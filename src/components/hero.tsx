import { CONTACT_DETAILS } from '@/constants/contactDetails';

export default function Hero() {
  return (
    <section id="home" className="flex scroll-mt-20 flex-col gap-6 font-mono" aria-labelledby="hero-heading">
      <div className="flex items-center gap-2">
        <h1 id="hero-heading" className="text-primary text-2xl font-bold tracking-tight">
          &gt; Rahul Poonia<span className="animate-blink ml-1 inline-block h-6 w-2.5 bg-current align-middle"></span>
        </h1>
      </div>

      <div className="space-y-4 text-sm md:text-base">
        <p className="text-muted-foreground leading-relaxed">
          <span className="text-primary font-bold">#</span> B.Tech. student at IIT Kharagpur & Full-stack developer.
          <br />
          <span className="text-primary font-bold">#</span> Turning raw ideas into working products.
          <br />
          <span className="text-primary font-bold">#</span> Currently building a local RAG desktop app.
        </p>

        <div className="space-y-2">
          <p className="text-muted-foreground">
            <span className="text-foreground font-bold">$ stack</span> --web --backend
          </p>
          <div className="text-muted-foreground/80 flex flex-wrap gap-x-3 gap-y-1 pl-4">
            <span>React</span>
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Go</span>
            <span>Python</span>
            <span>Node.js</span>
            <span>Hono</span>
            <span>Postgres</span>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-muted-foreground">
            <span className="text-foreground font-bold">$ stack</span> --tools --infra
          </p>
          <div className="text-muted-foreground/80 flex flex-wrap gap-x-3 gap-y-1 pl-4">
            <span>VS Code</span>
            <span>Neovim</span>
            <span>Docker</span>
            <span>AWS</span>
            <span>Vercel</span>
            <span>GitHub Actions</span>
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
                [{c.text}]
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
