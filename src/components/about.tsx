import { ABOUT_ME_DETAILS } from '@/constants/aboutMeDetails';

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <h2 id="about-heading" className="section-heading">
        About Me
      </h2>

      <ul className="marker:text-muted-foreground list-disc space-y-1.5 pl-4">
        {ABOUT_ME_DETAILS.map((detail, index) => (
          <li key={index} className="text-muted-foreground pl-1 text-base">
            {detail}
          </li>
        ))}
      </ul>
    </section>
  );
}
