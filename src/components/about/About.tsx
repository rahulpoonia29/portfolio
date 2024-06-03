import Image from "next/image";
import Link from "next/link";
import React from "react";

function About() {
	return (
		<div>
			<h2 className="mb-8 text-center text-4xl lg:mb-0">About Me</h2>

			<div className="mx-auto mt-2 flex w-full flex-col items-center justify-between md:gap-4 lg:mt-20 lg:w-11/12 lg:flex-row 2xl:w-4/5">
				<div className="dark:bg-grey-800 mx-auto flex w-56 flex-col items-center gap-2 self-start rounded-2xl bg-white p-3 transition-transform duration-300 hover:-translate-y-2 md:w-2/5 lg:mx-16 lg:w-72 lg:-rotate-3 dark:bg-zinc-800">
					<Image
						alt={"/self.jpg"}
						width={1000}
						height={1000}
						loading={"lazy"}
						className="h-60 w-full rounded-2xl bg-violet-100 object-top object-cover grayscale transition-all hover:grayscale-0 md:h-80 lg:h-80"
						src={"/self.jpg"}
					/>
					<span className="font-sans font-medium dark:text-gray-300">
						{"< I Build Stuff 🚀 />"}
					</span>
				</div>

				<div className="mx-4 mt-4 flex-1 text-left md:mx-0 md:mt-0 md:p-6">
					<div className="flex flex-col gap-2.5">
						<p className="text-3xl font-semibold">Rahul Poonia</p>
						<p className="w-fit rounded bg-violet-50 px-2 py-1 text-sm text-violet-800 dark:bg-violet-600/15 dark:text-violet-500">
							Full stack Developer
						</p>
						<p className="text-sm font-semibold text-gray-600 md:text-lg dark:text-zinc-400">
							Hey there! I&apos;m a full-stack developer currently studying at IIT
							Kharagpur. I&apos;m all about crafting cool digital stuff that works
							like a charm. Whether it&apos;s making sleek front-end designs or
							building sturdy back-end systems, I love turning ideas into
							reality with code. I&apos;m always up for learning new things and
							teaming up on exciting projects. Let&apos;s chat and see what awesome
							things we can create together!
						</p>
						<div className="flex items-center gap-4 md:mt-4">
							<Link
								href="#"
								target="_blank"
								className="w-fit cursor-pointer rounded-md bg-violet-500 px-4 py-2 text-sm text-white transition-colors hover:bg-violet-700 md:text-base dark:bg-violet-700 hover:dark:bg-violet-800"
							>
								Resume
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
