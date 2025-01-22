import { HERO_PROJECT } from "@/constants";
import { ArrowRight, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
	return (
		<div id="projects" className="flex flex-col gap-4">
			<div className="flex flex-col gap-4">
				<Link
					href={"/projects"}
					className="flex justify-between items-center group cursor-pointer"
				>
					<h2 className="text-lg font-semibold text-zinc-200">
						Latest Projects
					</h2>
					<div className="flex items-center text-base font-mono">
						See all
						<div className="-translate-x-0 group-hover:translate-x-2 px-2 cursor-pointer transition-transform duration-75 py-0.5">
							<ArrowRight size={20} />
						</div>
					</div>
				</Link>
				<div className="w-full rounded-lg overflow-hidden">
					<Link href={HERO_PROJECT.href}>
						<Image
							alt={HERO_PROJECT.title}
							src={HERO_PROJECT.coverImage}
							loading="lazy"
							width={1280}
							height={780}
							decoding="async"
						/>
					</Link>
					<div className="bg-[#1A191B] p-5 md:p-8 md:py-6 xl:px-10 xl:py-8 flex flex-col gap-5">
						<div className="w-full flex justify-between items-center">
							<div className="flex gap-2 items-center">
								<div className="size-7 rounded-lg bg-white flex items-center justify-center overflow-hidden">
									<Image
										alt={HERO_PROJECT.title}
										src={HERO_PROJECT.logo as string}
										loading="lazy"
										width={256}
										height={256}
										decoding="async"
										className="size-5"
									/>
								</div>
								<span className="font-medium text-lg">
									{HERO_PROJECT.title}
								</span>
							</div>
							<a target="_blank" href={HERO_PROJECT.href}>
								<button className="flex gap-1.5 items-center text-black bg-white rounded px-2 py-1 text-sm font-medium">
									<Globe size={16} />
									Website
								</button>
							</a>
						</div>
						<span className="text-zinc-400">
							{HERO_PROJECT.description}
						</span>
						<div className="flex flex-wrap gap-2">
							{HERO_PROJECT.techStack.map((tech) => (
								<label
									key={tech}
									className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 rounded-md bg-zinc-200 text-black px-2 py-1 text-xs"
								>
									{tech}
								</label>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
