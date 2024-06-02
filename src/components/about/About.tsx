import Image from "next/image";
import Link from "next/link";
import React from "react";

function About() {
	return (
		<div>
			<h2 className="text-center text-4xl">About Me</h2>

			<div className="mx-auto mt-2 flex w-full flex-col items-center justify-between md:gap-4 lg:mt-20 lg:w-11/12 lg:flex-row 2xl:w-4/5">
				<div className="dark:bg-grey-800 mx-auto flex w-56 flex-col items-center gap-2 self-start rounded-2xl bg-white p-3 transition-transform duration-300 hover:-translate-y-2 md:w-2/5 lg:mx-16 lg:w-72 lg:-rotate-3">
					<Image
						alt="profile"
						width={1000}
						height={1000}
						loading={"lazy"}
						className="h-60 w-full rounded-2xl bg-violet-100 object-cover grayscale transition-all hover:grayscale-0 md:h-80"
						src={""}
					/>
					<span className="font-sans font-medium">
						{"< I Build Stuff 🚀 />"}
					</span>
				</div>

				<div className="mx-4 mt-4 flex-1 text-left md:mx-0 md:mt-0 md:p-6">
					<div className="flex flex-col gap-2.5">
						<p className="text-3xl font-semibold">Rahul</p>
						<p className="w-fit rounded bg-violet-50 px-2 py-1 text-sm text-violet-800 dark:bg-violet-900/10 dark:text-violet-600">
							Full stack
						</p>
						<p className="my-2 text-sm text-gray-600 md:text-base dark:text-gray-300">
							"Ahoy there! 🎉 I'm a seasoned Full-Stack developer based in Pune,
							India, proudly waving my Information Technology undergrad cape
							from SPPU! 🎓 I've delved into web development since my freshman
							days. 💻 My focus lies in crafting websites and applications that
							seamlessly blend functionality. Oh, and did I mention my love for
							building full-stack clones and side projects?💡It's kind of my
							thing! 🚀"
						</p>
						<div className="flex items-center gap-4 md:mt-4">
							<Link
								href={"resumeUrl"}
								target="_blank"
								className="w-fit rounded-md bg-violet-600 px-6 py-2 text-sm text-white transition-shadow hover:shadow-xl md:text-base dark:bg-violet-700"
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
