import { useState } from "react";

import Image from "next/image";

const Contact = () => {
	return (
		<div id="contact" className="mx-4 mb-16 lg:mx-0">
			<h2 className="text-center text-4xl">Contact Me</h2>

			<div className="mx-auto mt-10 flex w-full justify-between rounded-xl md:mt-16 lg:w-5/6 2xl:w-3/4">
				{/* blurDataURL="https://i.imgur.com/owZdhjA.png" */}
				<Image
					unoptimized={true}
					quality={100}
					alt="contact"
					src="/contact.png"
					className="hidden h-full w-1/2 object-cover md:block"
					width={1000}
					height={1000}
				/>
				<div className="flex-1">
					<h3 className="text-2xl">Get in touch</h3>
					<p className="mb-4 text-sm text-gray-400 md:text-base">
						My inbox is always open! 💌 Whether you&apos;ve got a burning
						question or want to drop a friendly &quot;hello&quot;, I&apos;m all
						ears!👂 Let&apos;s chat! 🎉
					</p>

					<form className="flex flex-col gap-4 rounded-xl">
						<input
							required
							name="name"
							type="text"
							placeholder="Full Name *"
							className="dark:bg-grey-800 rounded-lg bg-gray-100 px-4 py-3 placeholder-gray-400 outline-none"
						/>
						<input
							required
							name="email"
							type="email"
							placeholder="Email *"
							className="dark:bg-grey-800 rounded-lg bg-gray-100 px-4 py-3 placeholder-gray-400 outline-none"
						/>
						<textarea
							required
							name="message"
							rows={4}
							placeholder="Message *"
							className="dark:bg-grey-800 resize-none rounded-lg bg-gray-100 px-4 py-3 placeholder-gray-400 outline-none"
						/>
						<button className="self-end rounded-lg bg-violet-600 px-4 py-2 text-white transition-colors hover:bg-violet-700 disabled:cursor-not-allowed"></button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
