import { bricolageGrotesque } from "@/fonts";
import { cn } from "@/lib/utils";
import { CodeXml } from "lucide-react";

export const Hero = () => {
	return (
		<div id="about" className="flex flex-col gap-2">
			<div className="flex items-center gap-2">
				<CodeXml size={20} />
				<h1
					className={cn(
						bricolageGrotesque,
						"text-3xl font-bold uppercase"
					)}
				>
					Rahul Poonia
				</h1>
			</div>
			<h2 className="text-sm text-zinc-400 w-full">
				Fullstack Developer, Open Source Contributor, and Tech
				Enthusiast
			</h2>
		</div>
	);
};
