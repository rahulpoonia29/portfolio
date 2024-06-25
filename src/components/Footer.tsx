import { Oxanium } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { LiaLinkedinIn } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";

const oxanium = Oxanium({ subsets: ["latin"], weight: "600" });

function Footer() {
	const socialMedia = [
		{
			name: "LinkedIn",
			link: "https://www.linkedin.com/in/rahulpoonia",
			logo: LiaLinkedinIn,
		},
		{
			name: "GitHub",
			link: "https://github.com/rahulpoonia29",
			logo: BsGithub,
		},
		{
			name: "Instagram",
			link: "https://www.instagram.com/rahulpoonia029/",
			logo: BsInstagram,
		},
		{
			name: "Twitter",
			link: "https://twitter.com/rahulpoonia229",
			logo: BsTwitter,
		},
	];

	return (
		<div className=" mt-20">
			<div className="my-4 mb-20 flex w-full flex-col items-center justify-center  gap-4 text-center">
				<p
					className={`lg:1/2 w-full text-5xl leading-[3.8rem] tracking-wide md:w-2/3 ${oxanium.className}`}
				>
					Ready to take your digital presence to the{" "}
					<span className="whitespace-nowrap rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 p-1.5">
						next level?
					</span>
				</p>
				<p className="lg:1/2 mb-4 mt-5 text-lg font-medium tracking-wide text-zinc-400 md:w-2/3">
					Contact me today, and let's make your web presence extraordinary!
				</p>
				<Link
					href="mailto:someone@example.com"
					className="relative flex w-fit items-center gap-2 p-[3px]"
				>
					<div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
					<div className="group relative  rounded-[6px] bg-black  px-8 py-2 text-white transition duration-200 hover:bg-transparent">
						Get in Touch <SiMinutemailer />
					</div>
				</Link>
				<p
					className={`mt-4 text-xl font-semibold tracking-wider ${oxanium.className}`}
				>
					Find me on
				</p>
				<div className="flex items-center gap-6 md:gap-3">
					{socialMedia.map((info, key) => (
						<div
							key={key}
							className="saturate-180 bg-black-200 border-black-300 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border bg-opacity-75 backdrop-blur-lg backdrop-filter"
						>
							<Link
								href={info.link}
								aria-label={info.name}
								target="_blank"
								rel="noopener noreferrer"
							>
								{info.logo({ className: "h-5 w-5" })}
							</Link>
						</div>
					))}
				</div>
			</div>

			<div className="flex items-center justify-center bg-zinc-800 py-4">
				<p className="font-semibold">
					Made with
					<span className="animate-pulse"> ❤️ </span>
					by
					<span className="font-bold text-violet-600"> Rahul</span>
				</p>
			</div>
		</div>
	);
}

export default Footer;
