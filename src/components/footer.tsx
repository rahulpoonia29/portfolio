import { CONTACT_DETAILS } from '@/constants/contactDetails';

export default function Footer() {
  const year = new Date().getFullYear();
  const email = CONTACT_DETAILS.find((c) => c.link.startsWith('mailto:'));
  const updated = new Date().toLocaleDateString(undefined, {
    month: 'short',
    year: 'numeric',
  });

  return (
    <footer role="contentinfo" className="relative mt-2">
      <div className="mx-auto w-full max-w-3xl px-4 py-6">
        <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row">
          <div className="text-muted-foreground flex items-center gap-3 text-sm">
            <span>© {year} Rahul Poonia</span>
            <span className="bg-ring/80 hidden h-1 w-1 rounded-full md:inline-block" />
            <span className="whitespace-nowrap">Updated {updated}</span>
          </div>

          {email ? (
            <a
              href={email.link}
              className="interactive border-border bg-primary text-primary-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium hover:brightness-110"
              aria-label={`Email ${email.text}`}
              title={email.text}
            >
              <span>Let’s build something</span>
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
