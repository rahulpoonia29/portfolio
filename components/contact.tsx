import { CONTACT_DETAILS } from "@/constants/contactDetails";
import Link from "next/link";
import { createElement } from "react";

export default function Contact() {
	return (
		<section
			className="flex flex-col gap-4"
			aria-labelledby="contact-heading"
		>
			<h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-200">
				Let&apos;s Connect
			</h2>

			<div className="rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
				<div className="p-5 flex flex-col gap-5">
					<div className="space-y-2">
						<h3 className="text-base font-medium text-zinc-900 dark:text-zinc-200">
							Got a project in mind? Let&apos;s collaborate! ✨
						</h3>
						<p className="text-sm text-zinc-600 dark:text-zinc-400">
							Open for interesting projects, tech discussions, or
							just a friendly hello.
						</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
						{CONTACT_DETAILS.map((contact, index) => (
							<Link
								key={index}
								href={contact.link}
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center justify-between bg-white dark:bg-zinc-800/80 px-4 py-3 rounded-md hover:ring-2 hover:ring-zinc-300 dark:hover:ring-zinc-600 transition-all duration-200"
								aria-label={`Contact via ${contact.text}`}
							>
								<div className="flex items-center gap-3 min-w-0">
									{createElement(contact.icon, {
										size: 18,
										className:
											"text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors flex-shrink-0",
									})}
									<span className="text-sm font-medium text-zinc-900 dark:text-zinc-200 truncate">
										{contact.text}
									</span>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
