import { ABOUT_ME_DETAILS } from "@/constants/aboutMeDetails";

export default function About() {
	return (
		<section
			id="about"
			className="section"
			aria-labelledby="about-heading"
		>
			<h2
				id="about-heading"
				className="section-heading"
			>
				About Me
			</h2>

			<ul className="space-y-1.5 list-disc marker:text-muted-foreground pl-5">
				{ABOUT_ME_DETAILS.map((detail, index) => (
					<li
						key={index}
						className="text-base text-muted-foreground pl-1"
					>
						{detail}
					</li>
				))}
			</ul>
		</section>
	);
}
