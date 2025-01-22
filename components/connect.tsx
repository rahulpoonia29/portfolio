import { bricolageGrotesque } from "@/fonts";
import { cn } from "@/lib/utils";

export const Connect = () => {
	return (
		<div id="socials" className="flex flex-col gap-4 ">
			<h5 className={cn(bricolageGrotesque, "text-xl font-semibold")}>
				Connect
			</h5>
			<div className="rounded-lg bg-[#1A191B] p-5 md:p-8 md:py-6 xl:px-10 xl:py-8 flex flex-col gap-5">
				<span className="text-md text-zinc-300 tracking-wide">
					Got a great idea or want to collaborate? <br /> Just say hi,
					and let&apos;s turn it into something awesome! <br />{" "}
					Let&apos;s make magic happen! ✨
				</span>
			</div>
		</div>
	);
};
