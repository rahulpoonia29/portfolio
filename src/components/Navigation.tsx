"use client";

import Link from "next/link";
import { useState } from "react";
import BurgerButton from "@/components/utils/BurgerButton";

type Links = { label: string; href: string };

function Navigation() {
	const Links: Links[] = [
		{
			label: "About",
			href: "#about",
		},
		{
			label: "Skills",
			href: "#skills",
		},
		{
			label: "Projects",
			href: "#projects",
		},
		{
			label: "Contact",
			href: "#contact",
		},
	];

	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="bg-grey-900 fixed top-0 z-50 flex h-16 w-full items-center justify-center border-b-0 border-gray-200 bg-opacity-40 px-4 backdrop-blur-lg backdrop-filter md:px-8">
			<nav className="relative flex w-full items-center justify-end lg:w-11/12 2xl:w-4/5">
				<Link className="group absolute left-0 text-lg" href="#home">
					<span className="group: animate-spotlight">✦</span> Rahul
				</Link>
				<div className="hidden gap-10 sm:flex">
					{Links.map((link, key) => (
						<Link
							key={key}
							href={link.href}
							className="relative block w-fit after:absolute after:block after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition after:duration-300 after:content-[''] hover:after:scale-x-100"
						>
							{link.label}
						</Link>
					))}
				</div>

				<div className="grid sm:hidden">
					<BurgerButton onClick={handleClick} isOpen={isOpen} />
					<div
						className={`fixed right-0 top-16 flex h-screen w-1/2 max-w-xs flex-col gap-8 rounded-md bg-zinc-800/90 p-6 py-10 shadow-2xl backdrop-blur-md backdrop-filter transition-all duration-300 ease-in-out ${
							isOpen ? "-translate-x-4  md:-translate-x-8" : "translate-x-full"
						}`}
						aria-hidden={!isOpen}
					>
						{Links.map((link, key) => (
							<div
								className="grid justify-center"
								key={key}
								onClick={handleClick}
							>
								<Link
									href={link.href}
									className="relative block w-fit after:absolute after:block after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition after:duration-300 after:content-[''] hover:after:scale-x-100"
								>
									{link.label}
								</Link>
							</div>
						))}
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Navigation;
