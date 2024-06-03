import Skills from "@/components/skill/Skills";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Skills
				categories={["Frontend", "Backend", "Others"]}
				skillData={{
					Frontend: [
						{
							name: "JavaScript",
							image:
								"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
						},
						{
							name: "Next JS",
							image:
								"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
						},
						{
							name: "React",
							image:
								"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
						},
						{
							name: "Redux",
							image:
								"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
						},
						{
							name: "TypeScript",
							image:
								"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
						},
						{
							name: "Tailwind CSS",
							image:
								"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
						},
						{
							name: "HTML",
							image:
								"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons//html5/html5-original.svg",
						},
						{
							name: "CSS",
							image:
								"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons//css3/css3-original.svg",
						},
						{
							name: "Bootstrap",
							image:
								"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons//bootstrap/bootstrap-original.svg",
						},
					],
					Backend: [
						{ name: "Node.js", image: "/skills/Nodejs.svg" },
						{
							name: "Express JS",
							image:
								"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
						},
						{
							name: "AppWrite",
							image:
								"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/appwrite/appwrite-original.svg",
						},
						{
							name: "MongoDB",
							image:
								"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
						},
					],
					Others: [
						{
							name: "Python",
							image:
								"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
						},
						{
							name: "GitHub",
							image:
								"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
						},
						{
							name: "Vercel",
							image:
								"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
						},
						{
							name: "Netlify",
							image:
								"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg",
						},
						{
							name: "Git",
							image:
								"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
						},
					],
				}}
			/>
			<Projects
				projectData={[
					{
						title: "Blogify",
						description:
							"A sleek blog app with user authentication and profiles.",
						techStack: "React, Redux, Tailwind CSS, TinyMCE, Appwrite",
						image: "/projects/blogify.png",
						link: "https://blogify-app-sage.vercel.app",
						github: "https://github.com/rahulpoonia29/React-Blog-app",
					},
					{
						title: "Search a Word",
						description:
							"Search for a word using an API and get its detailed info.",
						techStack: "React, React Router, Tailwind CSS, Dictionary API",
						image: "/projects/searchaword.png",
						link: "https://search-a-word.vercel.app/search/earth",
						github: "https://github.com/rahulpoonia29/Search-a-Word",
					},
					{
						title: "Currency Exchange App",
						description:
							"React App to convert currency with real-time exchange rates",
						techStack: "React, Tailwind CSS",
						image: "/projects/currencymaster.png",
						link: "https://currency-exchange-wine.vercel.app/",
						github: "https://github.com/rahulpoonia29/Currency-Exchange-App",
					},
					{
						title: "Password Forge",
						description:
							"Generates a random password with the click of a button.",
						techStack: "React, Tailwind CSS",
						image: "/projects/passwordforge.png",
						link: "https://passwordforge.vercel.app/",
						github: "https://github.com/rahulpoonia29/Paassword-Generator",
					},
				]}
			/>
		</>
	);
}
