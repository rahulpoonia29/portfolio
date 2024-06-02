import Image from "next/image";
import Link from "next/link";
import Typewriter from "@/components/utils/Typewriter";

function Hero() {
	return (
		<div className="flex h-[calc(100vh-64px)] flex-col-reverse items-center justify-around gap-10 lg:flex-row lg:gap-0 ">
			<div className="mx-4 flex flex-col gap-4 text-left md:mx-6 md:gap-6 lg:w-1/2 xl:mx-0 2xl:w-1/3">
				<p className="flex items-center gap-2 font-semibold md:text-2xl">
					<Image
						src={"/waving-hand.gif"}
						unoptimized={true}
						alt="waving-hand"
						width={30}
						height={30}
					/>
					Hey
				</p>
				<h1 className="font-bold md:text-6xl">I'm Rahul Poonia</h1>
				<div className="font-semibold md:text-2xl">
					I am a{" "}
					<Typewriter
						className="inline-block dark:text-violet-600"
						speed={100}
						words={["Web Developer", "Web Designer", "Student"]}
					/>
				</div>
				<p className="text-sm text-gray-600 md:text-lg dark:text-zinc-400">
					Dedicated to crafting immersive digital experiences that captivate,
					engage, and inspire users worldwide.
				</p>
				<Link
					className="group flex w-fit cursor-pointer items-center gap-1 rounded-md bg-violet-500 px-4 py-2 text-sm text-white transition-colors hover:bg-violet-700 md:text-base dark:bg-violet-700 hover:dark:bg-violet-800"
					href={"/about"}
				>
					<span>About Me</span>
					<svg
						stroke="currentColor"
						fill="currentColor"
						strokeWidth="0"
						viewBox="0 0 512 512"
						className="transition-transform group-hover:translate-x-1"
						height="1em"
						width="1em"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
					</svg>
				</Link>
			</div>
			<div className="h-56 w-56 md:h-80 md:w-80 lg:-translate-x-16">
				<Image
					alt="avatar"
					width={1000}
					height={1000}
					className="h-full w-full rounded-full object-cover object-center"
					src={"/profile.jpg"}
				/>
			</div>
		</div>
	);
}

export default Hero;
