import Image from "next/image";
import Link from "next/link";
import Typewriter from "@/components/utils/Typewriter";
import { Spotlight } from "./Aceternity/Spotlight";
import { Oxanium } from "next/font/google";
import OrbitImage from "./OrbitImage";

type Props = {
	socialMedia: { name: string; link: string; logo: any }[];
};

const oxanium = Oxanium({ subsets: ["latin"], weight: "600" });

function Hero({ socialMedia }: Props) {
	return (
		<div
			id="home"
			className="mb-16 mt-16 flex min-h-[calc(100vh-64px)] w-full flex-col-reverse items-center justify-evenly gap-10 overflow-hidden md:justify-around lg:flex-row lg:gap-0"
		>
			<svg
				className="absolute bottom-0 right-0 hidden -translate-x-6 translate-y-4 opacity-25 md:block lg:opacity-70"
				width="186"
				height="186"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M153.722 91.11c-1.137 0-2.085.948-2.085 2.148 0 1.138.948 2.085 2.149 2.085 1.2 0 2.084-.947 2.084-2.148 0-1.137-.947-2.085-2.148-2.085Zm0 30.455c-1.137 0-2.085.947-2.085 2.148 0 1.137.948 2.085 2.149 2.085 1.2 0 2.084-.948 2.084-2.149 0-1.137-.947-2.084-2.148-2.084Zm0 30.391c-1.137 0-2.085.947-2.085 2.148 0 1.137.948 2.085 2.149 2.085 1.2 0 2.084-.948 2.084-2.149 0-1.137-.947-2.084-2.148-2.084Zm0 30.706c-1.011 0-1.769.822-1.769 1.833 0 1.011.822 1.769 1.833 1.769 1.011 0 1.768-.821 1.768-1.833 0-1.011-.821-1.769-1.832-1.769Zm0-121.943a2.103 2.103 0 0 0-2.085 2.085c0 1.137.948 2.085 2.085 2.085a2.104 2.104 0 0 0 2.085-2.085c.063-1.138-.948-2.085-2.085-2.085Zm0-60.466c-1.011 0-1.769.82-1.769 1.832 0 1.011.822 1.77 1.833 1.77 1.011 0 1.768-.822 1.768-1.833 0-1.011-.821-1.769-1.832-1.769ZM93.198 90.226c-1.516 0-2.78 1.264-2.78 2.78 0 1.516 1.264 2.78 2.78 2.78 1.516 0 2.78-1.264 2.78-2.78 0-1.516-1.264-2.78-2.78-2.78Zm0 30.833c-1.326 0-2.464 1.137-2.464 2.401 0 1.327 1.138 2.338 2.464 2.338 1.327 0 2.464-1.138 2.464-2.338 0-1.39-1.137-2.401-2.464-2.401 0-.127 0-.127 0 0Zm0 30.581c-1.2 0-2.148 1.011-2.148 2.148 0 1.2 1.011 2.148 2.148 2.148 1.137 0 2.148-1.011 2.148-2.148a2.13 2.13 0 0 0-2.148-2.148Zm0 30.769a1.834 1.834 0 0 0 0 3.665 1.833 1.833 0 0 0 0-3.665Zm0-122.196c-1.326 0-2.4 1.138-2.4 2.465s1.136 2.4 2.463 2.4c1.327 0 2.401-1.137 2.401-2.4a2.468 2.468 0 0 0-2.464-2.465c0-.063 0-.063 0 0Zm0-60.213a1.833 1.833 0 0 0 0 3.664 1.832 1.832 0 0 0 0-3.664ZM62.936 91.11c-1.327 0-2.463 1.075-2.463 2.401 0 1.327 1.073 2.464 2.4 2.464s2.464-1.074 2.464-2.4c0-1.328-1.075-2.465-2.401-2.465Zm0 30.391c-1.327 0-2.463 1.075-2.463 2.401 0 1.327 1.073 2.464 2.4 2.464s2.464-1.073 2.464-2.401c0-1.327-1.075-2.464-2.401-2.464Zm0 30.708c-1.137 0-2.148.947-2.148 2.084 0 1.138.948 2.148 2.085 2.148s2.148-.948 2.148-2.084c0-1.201-.948-2.148-2.085-2.148Zm0 30.706c-1.011 0-1.832.758-1.832 1.769s.758 1.833 1.769 1.833c1.01 0 1.833-.758 1.833-1.769s-.76-1.833-1.77-1.833Zm0-122.196a2.4 2.4 0 0 0-2.4 2.401 2.4 2.4 0 1 0 4.801 0c0-1.264-1.075-2.4-2.401-2.4ZM32.674 91.426c-1.137 0-2.148.948-2.148 2.085 0 1.138.948 2.149 2.085 2.149s2.148-.948 2.148-2.086c.063-1.2-.948-2.211-2.085-2.148 0-.063 0-.063 0 0Zm0 30.391c-1.137 0-2.148.948-2.148 2.085 0 1.138.948 2.149 2.085 2.149s2.148-.949 2.148-2.086c.063-1.2-.948-2.211-2.085-2.148 0-.063 0-.063 0 0Zm0 30.392c-1.137 0-2.148.947-2.148 2.084 0 1.138.948 2.148 2.085 2.148s2.148-.948 2.148-2.084c.063-1.201-.948-2.212-2.085-2.148 0-.064 0-.064 0 0Zm0 30.706c-1.011 0-1.832.758-1.832 1.769s.758 1.833 1.77 1.833c1.01 0 1.83-.758 1.83-1.769.065-1.075-.757-1.896-1.768-1.833 0-.063 0-.063 0 0Zm90.849-152.271c-1.137 0-2.147.948-2.147 2.084 0 1.138.947 2.149 2.084 2.149 1.138 0 2.148-.947 2.148-2.085.063-1.2-.948-2.212-2.085-2.148 0-.064 0-.064 0 0ZM62.936.569c-1.011 0-1.832.758-1.832 1.769 0 1.01.758 1.832 1.769 1.832 1.01 0 1.833-.758 1.833-1.769.062-1.074-.76-1.895-1.77-1.832 0-.063 0-.063 0 0ZM2.412 91.679c-1.01 0-1.832.758-1.832 1.769 0 1.01.758 1.832 1.768 1.832 1.011 0 1.833-.758 1.833-1.769 0-1.01-.758-1.832-1.769-1.832Zm0 30.391c-1.01 0-1.832.758-1.832 1.769s.758 1.832 1.768 1.832c1.011 0 1.833-.758 1.833-1.769s-.758-1.832-1.769-1.832Zm0 30.391c-1.01 0-1.832.758-1.832 1.769s.758 1.832 1.768 1.832c1.011 0 1.833-.758 1.833-1.769s-.758-1.832-1.769-1.832Zm0 30.391c-1.01 0-1.832.758-1.832 1.769s.758 1.833 1.768 1.833c1.011 0 1.833-.759 1.833-1.77 0-1.011-.758-1.832-1.769-1.832Zm0-151.892c-1.01 0-1.832.821-1.832 1.768 0 .949.821 1.77 1.832 1.77 1.011 0 1.832-.821 1.832-1.77-.127-1.01-.82-1.768-1.832-1.768Zm0 30.39c-1.01 0-1.832.822-1.832 1.77 0 .948.821 1.77 1.832 1.77 1.011 0 1.832-.822 1.832-1.77-.127-1.01-.82-1.77-1.832-1.77Zm0-60.844C1.402.506.58 1.264.58 2.275c0 1.01.758 1.832 1.768 1.832 1.011 0 1.833-.759 1.833-1.77 0-1.01-.758-1.831-1.769-1.831ZM123.46 90.794a2.467 2.467 0 0 0-2.464 2.464 2.427 2.427 0 0 0 2.464 2.464 2.427 2.427 0 0 0 2.464-2.464 2.467 2.467 0 0 0-2.464-2.464Zm0 30.391c-1.327 0-2.464 1.138-2.464 2.464 0 1.327 1.137 2.464 2.464 2.464s2.464-1.137 2.464-2.464c0-1.326-1.137-2.464-2.464-2.464Zm0 30.707c-1.2 0-2.148 1.011-2.148 2.148 0 1.201 1.011 2.149 2.148 2.149 1.138 0 2.148-1.011 2.148-2.149 0-1.137-.948-2.148-2.148-2.148Zm0 30.77a1.833 1.833 0 1 0 1.833 1.833c0-1.075-.822-1.833-1.833-1.833Zm30.262-152.271c-1.137 0-2.147.948-2.147 2.085 0 1.138.947 2.085 2.147 2.085 1.201 0 2.148-.947 2.148-2.085 0-1.2-1.011-2.085-2.148-2.085ZM123.46 60.403c-1.327 0-2.4 1.138-2.4 2.464 0 1.327 1.136 2.402 2.463 2.402 1.327 0 2.401-1.138 2.401-2.465s-1.137-2.4-2.464-2.4Zm0-60.214c-1.011 0-1.832.822-1.832 1.77a1.833 1.833 0 0 0 3.665 0c0-.948-.822-1.77-1.833-1.77Zm60.525 91.3c-1.011 0-1.769.821-1.769 1.832 0 1.011.82 1.77 1.831 1.77 1.011 0 1.769-.822 1.769-1.833 0-1.01-.82-1.768-1.831-1.768Zm0 30.391c-1.011 0-1.769.822-1.769 1.833 0 1.011.82 1.769 1.831 1.769 1.011 0 1.769-.822 1.769-1.833 0-1.011-.82-1.769-1.831-1.769Zm0 30.391c-1.011 0-1.769.822-1.769 1.833 0 1.011.82 1.769 1.831 1.769 1.011 0 1.769-.822 1.769-1.833 0-1.011-.82-1.769-1.831-1.769Zm0 30.391c-1.011 0-1.769.822-1.769 1.833 0 1.011.82 1.769 1.831 1.769 1.011 0 1.769-.821 1.769-1.833 0-1.011-.82-1.769-1.831-1.769Zm0-151.955c-.949 0-1.769.821-1.769 1.77 0 .947.82 1.768 1.769 1.768.947 0 1.768-.821 1.768-1.769.063-1.01-.821-1.77-1.768-1.77Zm0-30.454c-1.011 0-1.769.82-1.769 1.832 0 1.011.82 1.77 1.831 1.77 1.011 0 1.769-.822 1.769-1.833 0-1.011-.82-1.769-1.831-1.769ZM32.674 61.035c-1.2 0-2.085.948-2.085 2.085s.948 2.085 2.085 2.085a2.103 2.103 0 0 0 2.084-2.085c.064-1.2-.947-2.085-2.084-2.085Zm0-60.466c-1.011 0-1.832.758-1.832 1.769 0 1.01.758 1.832 1.77 1.832 1.01 0 1.83-.758 1.83-1.769.065-1.074-.757-1.895-1.768-1.832 0-.063 0-.063 0 0ZM93.26 30.644c-1.137 0-2.148.948-2.148 2.084 0 1.138.948 2.149 2.085 2.149 1.138 0 2.148-.947 2.148-2.085.063-1.2-.948-2.212-2.085-2.148 0-.064 0-.064 0 0Zm-30.325 0a2.063 2.063 0 0 0-2.085 2.084c0 1.138.885 2.086 2.085 2.086s2.085-.884 2.085-2.086c.063-1.136-.884-2.084-2.085-2.084Zm-30.262 0c-1.2 0-2.085.948-2.085 2.084 0 1.138.948 2.086 2.085 2.086a2.103 2.103 0 0 0 2.084-2.086c.064-1.2-.884-2.084-2.084-2.084Zm151.311 30.455c-.949 0-1.769.82-1.769 1.768 0 .948.82 1.77 1.769 1.77.947 0 1.768-.822 1.768-1.77.063-1.01-.821-1.768-1.768-1.768Z"
					fill="url(#a)"
				></path>
				<defs>
					<linearGradient
						id="a"
						x1="56.392"
						y1="0"
						x2="189.028"
						y2="2.312"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#2D88E2"></stop>
						<stop offset="1" stopColor="#36EC74"></stop>
					</linearGradient>
				</defs>
			</svg>
			<Spotlight
				className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
				fill="blue"
			/>
			<Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="white" />

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
				<h1 className={`text-4xl font-bold md:text-6xl ${oxanium.className}`}>
					I&apos;m Rahul Poonia
				</h1>
				<div className="text-lg font-semibold md:text-2xl">
					I am a{" "}
					<Typewriter
						className={`inline-block text-violet-600 ${oxanium.className}`}
						speed={100}
						words={["Next.JS Developer", "MERN Developer", "Student"]}
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
					<div className="flex items-center gap-3">
						{socialMedia.map((info, key) => (
							<div
								key={key}
								className="saturate-180 bg-black-200 border-black-300 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border bg-opacity-75 backdrop-blur-lg backdrop-filter transition-all hover:border-4"
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
			</div>
			<div className="mt-8 h-56 w-56 md:h-80 md:w-80 lg:mt-0 lg:-translate-x-16">
				<Image
					alt="avatar"
					width={1000}
					height={1000}
					className="h-full w-full rounded-full object-cover object-center"
					src={"/profile.jpg"}
				/>
				<OrbitImage
					src={
						"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
					}
					name="NEXT JS"
					size={14}
					className="-left-12 -top-12 size-20"
				/>
				<OrbitImage
					src={
						"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
					}
					name="Redux"
					size={10}
					className="-right-14 -top-4 size-16"
				/>
				<OrbitImage
					src={"/skills/Nodejs.svg"}
					name="Node JS"
					size={8}
					className="-right-24 top-36 size-14"
				/>
				<OrbitImage
					src={
						"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
					}
					name="Tailwind CSS"
					size={8}
					className="-right-8 bottom-0 size-12"
				/>
				<OrbitImage
					src={
						"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
					}
					name="Git"
					size={8}
					className="-bottom-16 right-16 size-14"
				/>
			</div>
		</div>
	);
}

export default Hero;
