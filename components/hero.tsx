import { CodeXml } from "lucide-react";

export default function Hero() {
	return (
		<header
			id="about"
			className="flex flex-col gap-4"
			aria-label="Introduction"
		>
			<div className="flex items-center gap-3 group">
				<CodeXml
					size={28}
					className="text-zinc-200 transition-transform duration-300 group-hover:rotate-12"
					aria-hidden="true"
				/>
				<h1 className="text-3xl font-bold text-zinc-200 tracking-tight border-b-4 border-zinc-200 pb-1">
					Rahul Poonia
				</h1>
			</div>

			<div className="space-y-4 border-2 border-zinc-200 bg-zinc-900 rounded-lg p-4 shadow-[4px_4px_0px_0px_rgba(244,244,245)]">
				<h2 className="text-lg font-medium text-zinc-200 leading-relaxed max-w-2xl">
					Fullstack Developer, Open Source Contributor, and Tech
					Enthusiast
				</h2>
			</div>
		</header>
	);
}
