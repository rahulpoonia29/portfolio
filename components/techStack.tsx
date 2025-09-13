import { TECH_STACK } from "@/constants/techStack";
import { createElement } from "react";

export default function TechStack() {
	const groups = TECH_STACK.filter(Boolean);

	// A small reusable chip renderer so chips look consistent
	const renderChip = (item: { name: string; icon?: any }) => (
		<span
			key={item.name}
			title={item.name}
			className="inline-flex items-center gap-2 whitespace-nowrap rounded-full px-3 py-1 text-sm font-medium border border-border bg-card hover:shadow-sm transition"
			aria-label={item.name}
		>
			{item.icon && (
				<span className="opacity-80 -ml-0.5">
					{createElement(item.icon, { size: 14 })}
				</span>
			)}
			{item.name}
		</span>
	);

	return (
		<section
			id="skills"
			className="section"
			aria-labelledby="tech-stack-heading"
		>
			<h2 id="tech-stack-heading" className="section-heading">
				Tools & Stack
			</h2>

			<div className="rounded-md border border-border overflow-hidden bg-card">
				<ul className="divide-y divide-border/70">
					{groups.map((g) => (
						<li
							key={g.category}
							className="grid grid-cols-[80px_minmax(0,1fr)] md:grid-cols-[130px_minmax(0,1fr)] px-4 py-4 gap-4 items-start"
						>
							{/* Left category label */}
							<div className="pt-1">
								<span className="text-sm font-semibold tracking-wide uppercase text-muted-foreground/90">
									{g.category}
								</span>
							</div>

							{/* Right: clusters */}
							<div className="flex flex-col gap-3">
								{g.clusters.map((cluster) => (
									// Each cluster is its own two-column row: small fixed label + chips
									<div
										key={cluster.label}
										className="grid grid-cols-[90px_minmax(0,1fr)] gap-3 items-start"
									>
										{/* Cluster label — small, muted, top-aligned */}
										<div className="pt-0.5">
											<span className="inline-flex items-center justify-center px-2 py-1 rounded-md text-xs font-semibold uppercase tracking-wide text-muted-foreground/80 select-none border border-border bg-transparent">
												{cluster.label}
											</span>
										</div>

										{/* Chips area — wraps consistently */}
										<div className="flex flex-wrap gap-2 items-start">
											{cluster.items.map((item) =>
												item ? renderChip(item) : null,
											)}
										</div>
									</div>
								))}
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
