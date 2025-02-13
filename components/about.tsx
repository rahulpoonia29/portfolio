import { ABOUT_ME_DETAILS } from "@/constants/index";

export default function About() {
	return (
		<section
			id="about-me"
			className="flex flex-col gap-4"
			aria-label="About Me"
		>
			<h2 className="text-xl w-fit font-semibold text-zinc-200 border-b-4 border-zinc-200 pb-1 inline-block">About Me</h2>
			<div className="border-2 border-zinc-200 bg-zinc-900 rounded-lg px-5 py-4 shadow-[4px_4px_0px_0px_rgba(244,244,245)]">
				<ul className="space-y-3 list-none" role="list">
					{ABOUT_ME_DETAILS.map((detail) => (
						<li
							key={detail}
							className="flex items-start gap-3 text-zinc-300 text-base leading-relaxed 
							hover-slide group cursor-default"
						>
							<span
								className="mt-2 size-2 rounded-sm bg-zinc-300 flex-shrink-0 
								transition-all duration-300 group-hover:rotate-45 group-hover:bg-accent"
								aria-hidden="true"
							/>
							{detail}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
