import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import { URL } from "url";

const poppin = Poppins({ subsets: ["latin"], weight: "600" });

export const metadata: Metadata = {
	title: "Portfolio | Rahul Poonia - Web Developer",
	description:
		"I'm Rahul Poonia, a web developer based in Kharagpur, India. I currently study at IIT Kharagpur and love to code and build websites.",
	metadataBase: new URL("https://rahulpoonia.vercel.app"),
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
				url: "https://rahulpoonia.vercel.app/og.png",
			},
		],
		locale: "en_US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
	},
	icons: {
		icon: "/favicon.png",
		shortcut: "/favicon.png",
	},
	twitter: {
		card: "summary_large_image",
		title: "Rahul Poonia's Portfolio",
		description:
			"I'm Rahul Poonia, a web developer based in Kharagpur, India. I currently study at IIT Kharagpur and love to code and build websites.",
		creator: "@rahulpoonia229",
		images: ["https://rahulpoonia.vercel.app/og.png"],
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
		<html lang="en" class="dark">
			<body
				className={
					poppin.className +
					" absolute inset-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
				}
			>
				<Navigation />
				{children}
				<Footer />
			</body>
		</html>
	);
}
