import { CONTACT_DETAILS } from '@/constants/contactDetails';

export default function Footer() {
  const year = new Date().getFullYear();
  const email = CONTACT_DETAILS.find((c) => c.link.startsWith('mailto:'));

  return (
    <footer role="contentinfo" className="relative mt-2 font-mono">
      <div className="mx-auto w-full max-w-3xl px-4 py-6">
        <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row">
          <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-3 text-sm md:justify-start">
            <span>// &copy; {year} Rahul Poonia</span>
            <span className="hidden md:inline-block">|</span>
            <span className="whitespace-nowrap">git status: clean</span>
            <span className="hidden md:inline-block">|</span>
            <span
              className="hidden cursor-help text-xs opacity-50 transition-opacity hover:opacity-100 md:inline-block"
              title="Press '?' or 'Ctrl+K' for commands"
            >
              Ctrl+K for commands
            </span>
          </div>

          {email ? (
            <a
              href={email.link}
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
              aria-label={`Email ${email.text}`}
              title={email.text}
            >
              <span>$ ./contact.sh</span>
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
