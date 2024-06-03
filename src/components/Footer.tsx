import React from "react";

type Props = {};

function Footer({}: Props) {
	return (
		<div className="flex items-center justify-center py-4 bg-zinc-800">
			<p className="font-semibold">
				Made with
				<span className="animate-pulse"> ❤️ </span>
				by
				<span className="text-violet-700 font-bold"> Rahul</span>
			</p>
		</div>
	);
}

export default Footer;
