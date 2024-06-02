import Link from "next/link";

type Links = { label: string; href: string };

function Navigation() {
	const Links: Links[] = [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "About",
			href: "/about",
		},
		{
			label: "Projects",
			href: "/projects",
		},
	];

	return (
		<header className="dark:bg-grey-900 sticky top-0 z-10 flex h-16 w-full shrink-0 items-center justify-center border-b-0 border-gray-200 px-4 backdrop-blur-lg backdrop-filter md:px-8 dark:border-b-0 dark:bg-opacity-40">
			<nav className="relative flex w-full items-center justify-end lg:w-11/12 2xl:w-4/5">
				<Link className="absolute left-0 text-lg md:left-8" href="/">
					Rahul
				</Link>
				<div className="flex gap-10">
					{Links.map((link, key) => (
						<Link
							key={key}
							href={link.href}
							className="relative block w-fit after:absolute after:block after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
						>
							{link.label}
						</Link>
					))}
				</div>

				<div className="flex gap-3"></div>
			</nav>
		</header>
	);
}

export default Navigation;
