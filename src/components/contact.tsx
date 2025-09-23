import { CONTACT_DETAILS } from '@/constants/contactDetails';

export default function Contact() {
  return (
    <section className="section" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="section-heading">
        Contact
      </h2>
      <ul className="space-y-1.5 text-sm md:text-base">
        {CONTACT_DETAILS.map((c) => {
          const isEmail = c.link.startsWith('mailto:');
          return (
            <li key={c.link} className="flex items-center gap-3">
              <span className="text-muted-foreground/70 text-base">
                {isEmail
                  ? 'Email'
                  : c.link.includes('github')
                    ? 'GitHub'
                    : c.link.includes('linkedin')
                      ? 'LinkedIn'
                      : c.link.includes('instagram')
                        ? 'Instagram'
                        : 'Link' + ': '}
              </span>
              <a
                href={c.link}
                target={isEmail ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="text-foreground truncate text-base font-medium decoration-dotted hover:underline"
              >
                {c.text}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
