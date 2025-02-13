import { HERO_PROJECT } from "@/constants";
import { ArrowRight, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
	return (
		<section
			id="projects"
			className="flex flex-col gap-4"
			aria-label="Projects"
		>
			<div className="flex flex-col gap-4">
				<div className="flex justify-between items-center">
					<h2 className="text-xl font-semibold text-zinc-200 border-b-4 border-zinc-200 pb-1 inline-block">
						Latest Projects
					</h2>
					<Link
						href="/projects"
						className="group flex items-center gap-2 px-3 py-1.5 text-sm font-mono
						border-2 border-zinc-200 rounded-md bg-zinc-900 text-zinc-300
						shadow-[2px_2px_0px_0px_rgba(244,244,245)]
						hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none
						transition-all duration-200"
						aria-label="View all projects"
					>
						View All
						<ArrowRight
							size={14}
							className="group-hover:translate-x-1 transition-transform duration-200"
							aria-hidden="true"
						/>
					</Link>
				</div>

				<article className="border-2 border-zinc-200 bg-zinc-900 rounded-lg overflow-hidden shadow-[4px_4px_0px_0px_rgba(244,244,245)]">
					<Link
						href={HERO_PROJECT.href}
						className="block overflow-hidden"
					>
						<div className="relative aspect-video m-1 rounded-xl bg-red-400">
							<Image
								alt={`Screenshot of ${HERO_PROJECT.title}`}
								src={HERO_PROJECT.coverImage}
								priority
								quality={95}
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
								className="object-cover rounded-sm"
							/>
						</div>
					</Link>

					<div className="p-6 flex flex-col gap-5">
						<div className="flex justify-between items-center">
							<div className="flex items-center gap-3">
								<div className="size-10 rounded-lg bg-zinc-200 border-2 border-zinc-200 p-2">
									<Image
										alt={`${HERO_PROJECT.title} logo`}
										src={HERO_PROJECT.logo as string}
										width={24}
										height={24}
										className="size-full object-contain"
									/>
								</div>
								<h3 className="font-medium text-lg text-zinc-200">
									{HERO_PROJECT.title}
								</h3>
							</div>

							<Link
								href={HERO_PROJECT.href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`Visit ${HERO_PROJECT.title} website`}
							>
								<button
									className="flex items-center gap-2 px-4 py-2 text-sm font-medium
                  border-2 border-zinc-200 rounded-md bg-zinc-900 text-zinc-200
                  shadow-[2px_2px_0px_0px_rgba(244,244,245)]
                  hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none
                  transition-all duration-200"
								>
									<Globe size={18} />
									Visit Site
								</button>
							</Link>
						</div>

						<p className="text-zinc-300 leading-relaxed text-[15px]">
							{HERO_PROJECT.description}
						</p>

						<div className="flex flex-wrap gap-3">
							{HERO_PROJECT.techStack.map((tech) => (
								<span
									key={tech}
									className="px-2.5 py-1 text-xs font-medium rounded-md border-2 border-zinc-200 bg-zinc-900 text-zinc-300 shadow-[2px_2px_0px_0px_rgba(244,244,245)]"
								>
									{tech}
								</span>
							))}
						</div>
					</div>
				</article>
			</div>
		</section>
	);
}
