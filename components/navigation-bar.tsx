import { NAV_LINKS } from "@/constants";
import { bricolageGrotesque } from "@/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const NavigationBar = () => {
	return (
		<div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-11/12 sm:w-3/4 lg:w-2/5 px-6 py-3 pl-6 bg-[#1A191B]  border border-foreground/15 rounded-lg flex items-center justify-between">
			<Link href="/">
				<h1 className={cn(bricolageGrotesque, "font-bold text-base")}>Rahul</h1>
			</Link>
			<div className="flex items-center gap-6 font-medium text-sm">
				{NAV_LINKS.map((link, i) => (
					<Link key={i} href={link.href} className="text-sm">
						{link.name}
					</Link>
				))}
			</div>
		</div>
	);
};
