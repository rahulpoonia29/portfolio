import Link from "next/link";
import React from "react";
import { LuArrowDownRight } from "react-icons/lu";

type Props = {
	social: {
		name: string;
		link: string;
		logo: JSX.Element;
	};
	collapse?: boolean;
};

function SocialButton({ social, collapse }: Props) {
	return (
		<Link
			key={social.name}
			href={social.link}
			className="group relative inline-flex items-center justify-start space-x-2 overflow-hidden rounded-full px-4 py-3 text-sm font-bold"
		>
			<span className="absolute left-0 top-0 h-32 w-32 -translate-y-2 translate-x-12 rotate-45 bg-gray-50 opacity-[3%]"></span>
			<span className="absolute left-0 top-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-gray-50 opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8"></span>
			<span className="relative text-gray-50 transition-colors duration-200 ease-in-out group-hover:text-gray-900">
				{social.logo}
			</span>
			<span
				className={`hiden relative w-full text-left text-gray-50 transition-colors duration-200 ease-in-out group-hover:inline-block group-hover:text-gray-900 
                    ${collapse ? "hidden md:inline-block" : "inline-block"}`}
			>
				{social.name}
			</span>
			<span className="absolute inset-0 rounded-full border-2 border-white"></span>
		</Link>
	);
}

export default SocialButton;
