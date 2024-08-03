import { Oxanium } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SiMinutemailer } from "react-icons/si";
import SocialButton from "./SocialButton";

type Props = {
	socialMedia: { name: string; link: string; logo: any }[];
};
const oxanium = Oxanium({ subsets: ["latin"], weight: "600" });

function Contact({ socialMedia }: Props) {
	return (
		<div
			id="contact"
			className="relative flex min-h-screen w-full select-none flex-col items-center justify-center gap-4 text-center"
		>
			<Image
				className="absolute bottom-0 left-1/2 z-[-1] h-full w-full -translate-x-1/2 transform object-cover lg:h-auto"
				src={"/footer-grid.svg"}
				alt="Footer grid"
				width={100}
				height={100}
			/>
			<p
				className={`lg:1/2 w-full text-5xl leading-[3.8rem] tracking-wide md:w-2/3 ${oxanium.className}`}
			>
				Ready to take your digital presence to the{" "}
				<span className="whitespace-nowrap rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 p-1.5">
					next level?
				</span>
			</p>
			<p className="lg:1/2 mb-4 mt-5 text-lg font-medium tracking-wide text-zinc-400 md:w-2/3">
				Contact me today, and let&apos;s make your{" "}
				<span className="whitespace-nowrap">web presence extraordinary!</span>
			</p>
			<Link
				href="mailto:rahulpoonia229@gmail.com"
				className="relative grid w-fit p-[3px]"
			>
				<div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
				<div className="relative flex w-fit items-center gap-2 rounded-[6px] bg-black px-8 py-2 text-white transition duration-200 hover:bg-transparent">
					Get in Touch
					<SiMinutemailer />
				</div>
			</Link>
			<p
				className={`mt-4 text-xl font-semibold tracking-wider ${oxanium.className}`}
			>
				Find me on:
			</p>
			<div className="flex items-center gap-3 md:gap-4">
				{socialMedia.map((social, key) => (
					<SocialButton key={key} social={social} collapse />
				))}
			</div>
		</div>
	);
}

export default Contact;
