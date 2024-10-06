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
				Have a great idea or looking to collaborate? Let&apos;s connect and
				bring it to life! Just send a quick hi, and we can start
				exploring exciting possibilities together!
			</p>
		</div>
	);
};
