import { CONTACT_DETAILS } from "@/constants";
import Link from "next/link";
import { createElement } from "react";

export default function Contact() {
	return (
		<section
			id="contact"
			className="flex flex-col gap-4"
			aria-label="Contact Information"
		>
      <h2 className="text-xl font-semibold text-zinc-200 w-fit border-b-4 border-zinc-200 pb-1">
        Contact
      </h2>

			<div className="border-2 border-zinc-200 bg-zinc-900 rounded-lg p-6 shadow-[4px_4px_0px_0px_rgba(244,244,245)]">
				<p className="text-zinc-300 mb-6">
					Feel free to reach out to me for any queries,
					collaborations, or just to say hi!
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{CONTACT_DETAILS.map((contactItem) => (
						<Link
							key={contactItem.text}
							href={contactItem.link}
							target="_blank"
							prefetch={false}
							rel="noopener noreferrer"
							className="group"
						>
							<div
								className="border-2 border-zinc-200 bg-zinc-900 px-4 py-3 flex items-center gap-3 rounded-md 
                shadow-[2px_2px_0px_0px_rgba(244,244,245)]
                hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none
                transition-all duration-200"
							>
								{createElement(contactItem.icon, {
									size: 18,
									className:
										"text-zinc-300 group-hover:text-zinc-100 transition-colors",
									"aria-hidden": "true",
								})}
								<span className="text-sm font-medium text-zinc-300 group-hover:text-zinc-100">
									{contactItem.text}
								</span>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
