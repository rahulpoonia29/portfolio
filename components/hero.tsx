"use client";

import { CodeXml } from "lucide-react";
import { useEffect, useState } from "react";

function useLocalTime() {
	const [time, setTime] = useState<string>("");
	useEffect(() => {
		const update = () =>
			setTime(
				new Date().toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit",
				}),
			);
		update();
		const id = setInterval(update, 60000);
		return () => clearInterval(id);
	}, []);
	return time;
}

export default function Hero() {
	const time = useLocalTime();

	return (
		<section
			id="home"
			className="flex flex-col gap-4 w-full scroll-mt-20"
			aria-labelledby="hero-heading"
		>
			<div className="grid grid-cols-[auto,1fr,auto] items-center w-full gap-3">
				<CodeXml
					size={28}
					className="text-zinc-900 dark:text-zinc-200 cursor-pointer hover:-rotate-12 transition-transform duration-300"
					aria-hidden="true"
				/>
				<h1
					id="hero-heading"
					className="text-2xl font-semibold text-zinc-900 dark:text-zinc-200"
				>
					Rahul Poonia
				</h1>
				{time && (
					<span className="chip text-sm justify-self-end">
						{time} IST
					</span>
				)}
			</div>
			<div className="space-y-3">
				<p className="text-base text-muted-foreground leading-relaxed max-w">
					I build reliable, accessible web products with a focus on
					developer experience & performance. I enjoy working across
					the stack—turning ambiguous ideas into shipped, maintainable
					features.
				</p>
				<ul className="flex flex-wrap gap-1.5 text-sm font-medium">
					{["Full‑Stack", "Open Source", "Web Performance"].map(
						(t) => (
							<li key={t} className="chip">
								{t}
							</li>
						),
					)}
				</ul>
			</div>
		</section>
	);
}
