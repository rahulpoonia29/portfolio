import { CONTACT_DETAILS } from '@/constants/contactDetails';
import { IconCode } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { InlinePopover } from './inline-popover';
import { Timer } from './timer';
import { ClientOnly } from 'vite-react-ssg/single-page';
import ThemeToggle from './theme-toggle';

function useLocalTime() {
  const [time, setTime] = useState<string>('00:00 PM');
  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      );
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Hero() {
  const time = useLocalTime();

  return (
    <section id="home" className="flex scroll-mt-20 flex-col gap-4" aria-labelledby="hero-heading">
      <div className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-3">
        <IconCode
          size={28}
          className="text-foreground cursor-pointer transition-transform duration-300 hover:-rotate-12"
          aria-hidden="true"
        />
        <h1 id="hero-heading" className="text-primary text-2xl font-semibold">
          Rahul Poonia
        </h1>
        <ClientOnly>
          {() => <ThemeToggle className="chip cursor-pointer" iconClassName="size-5" />}
        </ClientOnly>
        <ClientOnly>{() => <Timer value={time} />}</ClientOnly>
      </div>
      <div className="space-y-3">
        <p className="text-muted-foreground max-w text-base leading-relaxed text-pretty">
          Hey, I’m a B.Tech. student at IIT Kharagpur and a full-stack developer. I like taking raw
          ideas and shaping them into working products. Currently working on a local RAG desktop app
          that makes your documents searchable.
        </p>
        <p className="text-muted-foreground max-w text-base leading-relaxed text-pretty">
          I usually build with{' '}
          <InlinePopover label={<span className="text-foreground">Technologies</span>}>
            <div className="space-y-2">
              <div className="text-muted-foreground text-xs tracking-wider uppercase">
                Web & Backend
              </div>
              <ol className="flex flex-wrap gap-1.5">
                {[
                  'React',
                  'Next.js',
                  'TypeScript',
                  'Go',
                  'Python',
                  'Node.js',
                  'Express',
                  'Hono',
                  'Postgres',
                  'MongoDB',
                  'SQLite',
                  'Prisma',
                  'Drizzle',
                ].map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ol>
            </div>
          </InlinePopover>{' '}
          and my daily toolkit includes{' '}
          <InlinePopover label={<span className="text-foreground">Dev Tools & Infra</span>}>
            <div className="space-y-2">
              <div className="text-muted-foreground text-xs tracking-wider uppercase">
                Dev Tools & Infra
              </div>
              <ol className="flex flex-wrap gap-1.5">
                {[
                  'VS Code',
                  'Neovim',
                  'GitHub',
                  'Docker',
                  'Nginx',
                  'AWS EC2',
                  'AWS SES',
                  'AWS SQS',
                  'Vercel',
                  'PM2',
                  'GitHub Actions',
                ].map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ol>
            </div>
          </InlinePopover>
          .
        </p>

        <div className="flex flex-wrap gap-2 text-sm font-medium">
          {CONTACT_DETAILS.map((c) => {
            const isExternal = /^https?:/i.test(c.link);
            const isEmail = /^mailto:/i.test(c.link);
            const label = isEmail ? `Email ${c.text}` : `${c.text} (opens in new tab)`;
            return (
              <a
                href={c.link}
                className="border-border hover:border-ring focus-visible:ring-ring/60 inline-flex cursor-pointer items-center overflow-hidden rounded-md border p-1 transition-colors focus:outline-none focus-visible:ring-2"
                key={c.link}
                aria-label={label}
                title={c.text}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
              >
                <c.icon className="text-foreground/80 size-5" stroke={1.5} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
