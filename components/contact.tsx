import { contactLinks } from "@/constants";
import { bricolageGrotesque } from "@/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { createElement } from "react";

export const Contact = () => {
	return (
		<div id="contact" className="flex flex-col gap-4">
			<div className="space-y-1">
				<h5 className={cn(bricolageGrotesque, "text-xl font-semibold")}>
					Contact
				</h5>
				<p className="text-sm text-zinc-400">
					Feel free to reach out to me for any queries,
					collaborations, or just to say hi!
				</p>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				{contactLinks.map((contactItem, key) => (
					<div
						key={key}
						className="border border-foreground/10 px-4 py-2 flex items-center gap-2 rounded-sm"
					>
						{createElement(contactItem.icon, {
							size: 16,

							className: "font-medium",
						})}
						<Link
							href={contactItem.link}
							target="_blank"
							prefetch={false}
							rel="noopener noreferrer"
							className="text-sm opacity-70 hover:opacity-100 transition-all duration-300"
						>
							{contactItem.text}
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};
