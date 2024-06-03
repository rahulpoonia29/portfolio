import Image from "next/image";
import Link from "next/link";
import Typewriter from "@/components/utils/Typewriter";

function Hero() {
	return (
		<div className="flex min-h-[calc(100vh-64px)] flex-col-reverse items-center justify-evenly gap-10 md:justify-around lg:flex-row lg:gap-0">
			<div className="relative mx-6 flex flex-col gap-4 text-left md:mx-6 md:gap-6 lg:w-1/2 xl:mx-0 2xl:w-1/3">
				<div className="absolute -top-8">
					<svg
						width="236"
						height="68"
						viewBox="0 0 236 68"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<defs>
							<linearGradient
								id="paint0_linear"
								gradientUnits="userSpaceOnUse"
								x1="0"
								y1="0"
								x2="236"
								y2="0"
							>
								<stop stop-color="#2EB9DF" stop-opacity="0"></stop>
								<stop offset="0.5" stop-color="#2EB9DF"></stop>
								<stop offset="1" stop-color="#9E00FF" stop-opacity="0"></stop>
							</linearGradient>

							<mask id="mask">
								<rect x="-236" y="0" width="236" height="68" fill="white">
									<animate
										attributeName="x"
										from="236"
										to="-236"
										dur="2.5s"
										repeatCount="indefinite"
									/>
								</rect>
							</mask>
						</defs>

						<path
							d="M0.5 0.5H89C90.6569 0.5 92 1.84315 92 3.5V29C92 30.6569 93.3431 32 95 32H148.5C150.157 32 151.5 33.3431 151.5 35V64C151.5 65.6569 152.843 67 154.5 67H235.5"
							stroke="url(#paint0_linear)"
							stroke-width="2"
							mask="url(#mask)"
						/>
					</svg>
				</div>
				<p className="flex items-center gap-2 text-lg font-semibold md:text-2xl">
					<Image
						src={"/waving-hand.gif"}
						unoptimized={true}
						alt="waving-hand"
						width={30}
						height={30}
					/>
					Hey
				</p>
				<h1 className="text-4xl font-bold md:text-6xl">
					I&apos;m Rahul Poonia
				</h1>
				<div className="text-lg font-semibold md:text-2xl">
					I am a{" "}
					<Typewriter
						className="inline-block text-violet-600"
						speed={100}
						words={["Web Developer", "Web Designer", "Student"]}
					/>
				</div>
				<p className="text-sm text-zinc-400 md:text-lg">
					Dedicated to crafting immersive digital experiences that captivate,
					engage, and inspire users worldwide.
				</p>
				<Link
					className="group flex w-fit cursor-pointer items-center gap-1 rounded-md bg-violet-700 px-4 py-2 text-sm text-white transition-colors hover:bg-violet-800 md:text-base"
					href={"#about"}
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
			<div className="mt-8 h-56 w-56 md:h-80 md:w-80 lg:mt-0 lg:-translate-x-16">
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
