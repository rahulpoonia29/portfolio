import { bricolageGrotesque } from "@/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Connect = () => {
	return (
		<div id="socials" className="flex flex-col gap-4">
			<h5 className={cn(bricolageGrotesque, "text-xl font-semibold")}>
				Connect
			</h5>
			<p className="font-light">
				Follow me on{" "}
				<Link
					href={""}
					target="_blank"
					prefetch={false}
					className="underline font-normal"
				>
					LinkedIn
				</Link>
				, view my code and open-source projects on{" "}
				<Link
					href={""}
					target="_blank"
					prefetch={false}
					className="underline font-normal"
				>
					Github
				</Link>
				, or email me directly{" "}
				<Link
					href="mailto:rahulpoonia229@gmail.com"
					className="underline font-normal"
				>
					rahulpoonia229@gmail.com
				</Link>
			</p>
		</div>
	);
};
