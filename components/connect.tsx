import { bricolageGrotesque } from "@/fonts";
import { cn } from "@/lib/utils";

export const Connect = () => {
	return (
		<div id="socials" className="flex flex-col gap-4 ">
			<h5
				className={cn(
					bricolageGrotesque,
					"text-xl font-semibold text-zinc-200"
				)}
			>
				Connect
			</h5>
			<p className="font-medium text-sm bg-[#1A191B] leading-6 tracking-wide p-6 text-zinc-400 rounded-lg">
				Got a great idea or want to collaborate? <br /> Just say hi, and
				let&apos;s turn it into something awesome! <br /> Let&apos;s
				make magic happen! ✨
			</p>
		</div>
	);
};
