import { Oxanium } from "next/font/google";

const oxanium = Oxanium({ subsets: ["latin"], weight: "600" });
function Footer() {

	return (
		<footer
			className={`dark:bg-grey-800 w-full bg-zinc-900/60 ${oxanium.className}`}
		>
			<div className="mx-auto flex flex-col items-center justify-between gap-4 py-4 tracking-wide md:mx-6 md:flex-row md:gap-0 lg:mx-10 lg:py-6 xl:mx-auto xl:max-w-6xl">
				<p>
					Made with<span className="animate-pulse"> ❤️ </span>by
					<span className="mx-1 whitespace-nowrap rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 p-1">
						Rahul
					</span>
				</p>
				<p>
					Made with
					<span className="mx-1 whitespace-nowrap rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 p-1">
						NEXT.js and TypeScript
					</span>
				</p>
			</div>
		</footer>
	);
}

export default Footer;
