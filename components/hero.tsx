import { CodeXml } from "lucide-react";

export default function Hero() {
	return (
		<div id="about" className="flex flex-col gap-2">
			<div className="flex items-center gap-2">
				<CodeXml size={24} />
				<h1 className="text-3xl font-bold uppercase text-zinc-200">
					Rahul Poonia
				</h1>
			</div>
			<h2 className="text-base font-medium text-zinc-400 w-full">
				Fullstack Developer, Open Source Contributor, and Tech
				Enthusiast
			</h2>
		</div>
	);
}
