import { CodeXml } from "lucide-react";

export default function Hero() {
	return (
		<section className="flex flex-col gap-4 w-full" aria-labelledby="hero-heading">
			<div className="flex items-center gap-3">
				<CodeXml
					size={28}
					className="text-zinc-900 dark:text-zinc-200 cursor-pointer hover:rotate-12 transition-transform duration-300"
					aria-hidden="true"
				/>
				<h1
					id="hero-heading"
					className="text-2xl font-semibold text-zinc-900 dark:text-zinc-200"
				>
					Rahul Poonia
				</h1>
			</div>
			<p className="text-base text-zinc-700 dark:text-zinc-400  leading-relaxed">
				Fullstack Developer, Open Source Contributor, and Tech
				Enthusiast
				 {/* based in{" "} */}
				{/* <span className="font-medium text-zinc-600 dark:text-zinc-300">
					IIT Kharagpur
				</span> */}
			</p>
		</section>
	);
}
