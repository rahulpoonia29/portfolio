import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ThemeToggle from "@/components/theme-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Rahul Poonia | Portfolio",
	description:
		"Fullstack Developer, Open Source Contributor, and Tech Enthusiast based in IIT Kharagpur, India.",
	metadataBase: new URL("https://rahulpoonia.co"),
	alternates: {
		canonical: "https://rahulpoonia.vercel.app",
		languages: {
			"en-US": "/en-US",
		},
	},
	openGraph: {
		title: "Portfolio | Rahul Poonia - Full Stack Developer",
		description:
			"I'm Rahul Poonia, a web developer based in Kharagpur, India. I currently study at IIT Kharagpur and love to code and build websites.",
		url: "https://rahulpoonia.vercel.app",
		siteName: "Rahul Poonia's Portfolio",
		images: [
			{
				url: "https://rahulpoonia.vercel.app/og/og.png",
			},
		],
		locale: "en_US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
	},
	twitter: {
		card: "summary_large_image",
		title: "Portfolio | Rahul Poonia - Full Stack Developer",
		description:
			"I'm Rahul Poonia, a web developer based in Kharagpur, India. I currently study at IIT Kharagpur and love to code and build websites.",
		creator: "@rahulpoonia229",
		images: ["https://rahulpoonia.vercel.app/og/og.png"],
	},

	keywords:
		"rahul poonia, portfolio, rahul, full stack dev, nextjs portfolio, portfolio design, portfolio website, personal portfolio",
};


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				{/* Inline script to avoid flash of wrong theme */}
				<script
					dangerouslySetInnerHTML={{
						__html: `(() => {try {const t = localStorage.getItem('theme'); if(t === 'light' || (!t && window.matchMedia('(prefers-color-scheme: light)').matches)) { document.documentElement.classList.remove('dark'); } else { document.documentElement.classList.add('dark'); } document.documentElement.style.colorScheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light'; } catch(_) {}})();`,
					}}
				/>
			</head>
			<body
				className={cn(
					inter.className,
					"bg-[#faf9f6] relative dark:bg-[#0d0d10] text-foreground dark:text-foreground min-h-screen antialiased transition-colors duration-300",
				)}
			>
				<ThemeProvider>
					<ThemeToggle />
					<div className="w-full h-12 fixed top-0 z-10 bg-gradient-to-b from-zinc-200/80 dark:from-zinc-900/70 to-transparent pointer-events-none" />
					<main className="flex items-center justify-center mx-auto px-5 py-20">
						{children}
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
