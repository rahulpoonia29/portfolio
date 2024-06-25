import { Metadata } from "next";
import { Oxanium, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

// Import fonts server-side
export const oxanium = Oxanium({ subsets: ["latin"], weight: "600" });
const poppin = Poppins({ subsets: ["latin"], weight: "600" });

// Metadata definition
export const metadata: Metadata = {
	title: "Portfolio | Rahul Poonia - Web Developer",
	description: "I'm Rahul Poonia, a web developer based in Kharagpur, India...",
	metadataBase: new URL("https://rahulpoonia.vercel.app"),
	alternates: {
		canonical: "https://rahulpoonia.vercel.app",
		languages: { "en-US": "/en-US" },
	},
	openGraph: {
		title: "Portfolio | Rahul Poonia - Full Stack Developer",
		description: "I'm Rahul Poonia...",
		url: "https://rahulpoonia.vercel.app",
		siteName: "Rahul Poonia's Portfolio",
		images: [{ url: "https://rahulpoonia.vercel.app/og/og.png" }],
		locale: "en_US",
		type: "website",
	},
	robots: { index: true, follow: true },
	twitter: {
		card: "summary_large_image",
		title: "Portfolio | Rahul Poonia - Full Stack Developer",
		description: "I'm Rahul Poonia...",
		creator: "@rahulpoonia229",
		images: ["https://rahulpoonia.vercel.app/og/og.png"],
	},
	keywords:
		"rahul poonia, portfolio, rahul, full stack dev, nextjs portfolio, portfolio design, portfolio website, personal portfolio",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="dark">
			<body
				className={
					poppin.className + " ... absolute inset-0 h-full w-full bg-black"
				}
			>
				<Navigation />
				{children}
				<Analytics />
				<Footer />
			</body>
		</html>
	);
}
