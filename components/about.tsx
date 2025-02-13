import { ABOUT_ME_DETAILS } from "@/constants/index";

export default function About() {
	return (
		<section
			id="about"
			className="flex flex-col gap-4"
			aria-labelledby="about-heading"
		>
			<h2
				id="about-heading"
				className="text-lg font-semibold text-zinc-900 dark:text-zinc-200"
			>
				About Me
			</h2>

			<ul className="space-y-2 list-disc marker:text-zinc-500 dark:marker:text-zinc-400 pl-5">
				{ABOUT_ME_DETAILS.map((detail, index) => (
					<li
						key={index}
						className="text-zinc-700 dark:text-zinc-400 text-base pl-2"
					>
						{detail}
					</li>
				))}
			</ul>
		</section>
	);
}
