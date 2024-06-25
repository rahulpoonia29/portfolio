import Image from "next/image";
import Link from "next/link";
import Typewriter from "@/components/utils/Typewriter";
import { Spotlight } from "../Aceternity/Spotlight";
import ScrollWrapper from "../utils/ScrollWrapper";

function Hero() {
	return (
		<ScrollWrapper>
			<div className=" mt-16 flex min-h-[calc(100vh-64px)] flex-col-reverse items-center justify-evenly gap-10 md:justify-around lg:flex-row lg:gap-0">
				<Spotlight
					className="-top-40 left-0 md:-top-20 md:left-60"
					fill="grey"
				/>

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
									<stop stopColor="#2EB9DF" stopOpacity="0"></stop>
									<stop offset="0.5" stopColor="#2EB9DF"></stop>
									<stop offset="1" stopColor="#9E00FF" stopOpacity="0"></stop>
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
								strokeWidth="2"
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
					<div className="flex items-center space-x-6">
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
						<div className="flex space-x-6">
							<Link
								href="https://www.linkedin.com/in/rahulpoonia"
								className="text-blue-700 transition hover:text-blue-500"
								aria-label="LinkedIn"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="h-6 w-6"
								>
									<path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.3 19h-2.6v-9h2.6v9zm-1.3-10.2c-.84 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm12.3 10.2h-2.6v-4.8c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.84 1.25-1.84 2.54v4.89h-2.6v-9h2.5v1.23h.04c.35-.67 1.21-1.38 2.5-1.38 2.67 0 3.17 1.75 3.17 4.03v5.12z" />
								</svg>
							</Link>
							<Link
								href="https://github.com/rahulpoonia29"
								className="text-gray-600 transition hover:text-gray-500"
								aria-label="GitHub"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="h-6 w-6"
								>
									<path d="M12 .5a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.58v-2.17c-3.34.73-4.05-1.61-4.05-1.61-.54-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.94 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.52 11.52 0 016.01 0c2.29-1.55 3.29-1.23 3.29-1.23.67 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.64-5.47 5.94.43.37.82 1.1.82 2.22v3.28c0 .32.22.69.83.58A12 12 0 0012 .5z" />
								</svg>
							</Link>
							<Link
								href="https://www.instagram.com/rahulpoonia029/"
								className="text-pink-600 transition hover:text-pink-400"
								aria-label="Instagram"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="h-6 w-6"
								>
									<path d="M12 0c-3.33 0-3.74.01-5.03.07-1.27.06-2.15.26-2.92.55-.78.29-1.42.67-2.08 1.34C.28 2.68.01 3.32-.28 4.1-.57 4.86-.77 5.74-.83 7.03-.9 8.32-.9 8.73-.9 12s0 3.68.06 5.03c.06 1.27.26 2.16.55 2.92.29.78.67 1.42 1.34 2.08.68.68 1.32.95 2.1 1.24.76.29 1.65.49 2.92.55 1.3.06 1.7.06 5.03.06s3.74 0 5.03-.06c1.27-.06 2.16-.26 2.92-.55.78-.29 1.42-.67 2.08-1.34.68-.68.95-1.32 1.24-2.1.29-.76.49-1.65.55-2.92.06-1.3.06-1.7.06-5.03s0-3.74-.06-5.03c-.06-1.27-.26-2.15-.55-2.92-.29-.78-.67-1.42-1.34-2.08-.68-.68-1.32-.95-2.1-1.24-.76-.29-1.65-.49-2.92-.55-1.3-.06-1.7-.06-5.03-.06zm0 1.5c3.26 0 3.67.01 4.96.07 1.23.06 1.91.25 2.35.42.6.23.96.5 1.37.91.4.4.67.77.91 1.37.17.44.36 1.11.42 2.35.06 1.29.07 1.7.07 4.96s0 3.67-.07 4.96c-.06 1.23-.25 1.91-.42 2.35-.23.6-.5.96-.91 1.37-.4.4-.77.67-1.37.91-.44.17-1.11.36-2.35.42-1.29.06-1.7.07-4.96.07s-3.67 0-4.96-.07c-1.23-.06-1.91-.25-2.35-.42-.6-.23-.96-.5-1.37-.91-.4-.4-.67-.77-.91-1.37-.17-.44-.36-1.11-.42-2.35-.06-1.29-.07-1.7-.07-4.96s0-3.67.07-4.96c.06-1.23.25-1.91.42-2.35.23-.6.5-.96.91-1.37.4-.4.77-.67 1.37-.91.44-.17 1.11-.36 2.35-.42 1.29-.06 1.7-.07 4.96-.07zm0 4.49a5.51 5.51 0 100 11.01 5.51 5.51 0 000-11.01zm0 1.5a4 4 0 110 8 4 4 0 010-8zm6.38-1.1a1.3 1.3 0 100 2.6 1.3 1.3 0 000-2.6z" />
								</svg>
							</Link>
							<Link
								href="https://twitter.com/rahulpoonia229"
								className="text-zinc-600 transition hover:text-zinc-500"
								aria-label="Twitter"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="h-6 w-6"
								>
									<path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z" />
								</svg>
							</Link>
						</div>
					</div>
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
		</ScrollWrapper>
	);
}

export default Hero;
