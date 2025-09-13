import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { IconType } from "react-icons/lib";
import { LuMail } from "react-icons/lu";

export const CONTACT_DETAILS: {
	icon: IconType;
	link: string;
	text: string;
}[] = [
	{
		icon: LuMail,
		link: "mailto:contact@rahulpoonia229@gmail.com",
		text: "rahulpoonia229@gmail.com",
	},
	{
		icon: FaGithub,
		link: "https://github.com/rahulpoonia29",
		text: "rahulpoonia29",
	},
	{
		icon: FaLinkedin,
		link: "https://www.linkedin.com/in/rahulpoonia",
		text: "rahulpoonia",
	},
	{
		icon: FaInstagram,
		link: "https://www.instagram.com/rahulpoonia029",
		text: "rahulpoonia029",
	},
];
