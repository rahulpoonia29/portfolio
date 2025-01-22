import { CONTACT_DETAILS } from "@/constants";
import { bricolageGrotesque } from "@/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { createElement } from "react";

export default function Contact() {
	return (
		<div id="contact" className="flex flex-col gap-4">
			<div className="space-y-1">
				<h5
					className={cn(
						bricolageGrotesque,
						"text-xl font-semibold text-zinc-200"
					)}
				>
					Contact
				</h5>
				<p className="text-sm text-zinc-400">
					Feel free to reach out to me for any queries,
					collaborations, or just to say hi!
				</p>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				{CONTACT_DETAILS.map((contactItem, key) => (
					<Link
						key={key}
						href={contactItem.link}
						target="_blank"
						prefetch={false}
						rel="noopener noreferrer"
						className="text-base opacity-80 hover:opacity-100 transition-all duration-300 text-zinc-300"
					>
						<div className="border border-foreground/15 px-4 py-2 flex items-center gap-2 rounded-sm bg-[#1A191B]">
							{createElement(contactItem.icon, {
								size: 20,

								className: "font-medium text-zinc-300",
							})}
							{contactItem.text}
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
