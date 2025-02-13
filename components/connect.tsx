import { ArrowRight } from "lucide-react";

export default function Connect() {
	return (
		<section
			id="socials"
			className="flex flex-col gap-4"
			aria-label="Connect"
		>
			<h2 className="text-xl font-semibold w-fit text-zinc-200 border-b-4 border-zinc-200 pb-1 inline-block">
				Connect
			</h2>

			<div
				className="border-2 border-zinc-200 bg-zinc-900 rounded-lg p-6 
        shadow-[4px_4px_0px_0px_rgba(244,244,245)]"
			>
				<div className="flex flex-col gap-4">
					<p className="text-zinc-300 leading-relaxed">
						Got a great idea or want to collaborate?
						<br />
						Just say hi, and let&apos;s turn it into something
						awesome!
					</p>
					<div className="flex items-center gap-2 group">
						<span className="text-zinc-200 text-sm font-medium slide-underline cursor-pointer">
							Let&apos;s make magic happen!
						</span>
						<ArrowRight
							size={16}
							className="text-zinc-300 group-hover:translate-x-1 transition-transform duration-200"
							aria-hidden="true"
						/>
						<span className="text-zinc-200 ml-1 animate-pulse">
							✨
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
