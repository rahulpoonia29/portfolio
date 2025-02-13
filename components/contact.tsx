import { CONTACT_DETAILS } from "@/constants";
import Link from "next/link";
import { createElement } from "react";

export default function Contact() {
	return (
		<section
			id="contact"
			className="flex flex-col gap-4"
			aria-labelledby="contact-heading"
		>
			<h2
				id="contact-heading"
				className="text-lg font-semibold text-zinc-900 dark:text-zinc-200"
			>
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
								className="group flex items-center justify-between bg-white dark:bg-zinc-800/80 px-4 py-3 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-700/50 transition-all duration-200"
							>
								<div className="flex items-center gap-3">
									{createElement(contact.icon, {
										size: 18,
										className:
											"text-zinc-500 dark:text-zinc-400",
									})}
									<span className="text-sm font-medium text-zinc-900 dark:text-zinc-200">
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
