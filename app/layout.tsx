import { NavigationBar } from "@/components/navigation-bar";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

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
		<html lang="en">
			<body
				className={cn(
					inter.className + "bg-[#121114] text-white min-h-screen"
				)}
			>
				<div className="w-full h-12 fixed top-0 z-10 bg-gradient-to-b from-zinc-900 to-transparent"></div>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<main className="min-h-full w-full md:max-w-2xl mx-auto px-5 py-20">
						{children}
					</main>
					<NavigationBar />
					<Analytics />
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
