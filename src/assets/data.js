import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const aboutStory = [
	{
		id: 1,
		story: "December 2022, a group of computing science students decided to come up with an ida to design and implement a user interface to allow students to view their course schedules, check all their courses information, and know more about it without explictly being a registered student."
	},
	{
		id: 2,
		story: "COURSEINFO is a place for everyone who wants to know more about a particular course check all the necessary information and also have the ability to search about a course code to know more about a course, our website is here to help"
	},
	{
		id: 3,
		story: "It's designed and developed using Agile methodology so it can adapt to changes at any time it is an open source project and all the source code can be found in the 'github repository' at the footer section"
	}	
];

export const levels = [
    {
      id: 1,
      userLevel: "100L"
    },
    {
      id: 2,
      userLevel: "200L"
    },
    {
      id: 3,
      userLevel: "300L"
    },
    {
      id: 4,
      userLevel: "400L"
    }
  ];

  export const determineLink = [
	{
		id: 1,
		path: "spend",
		text: "Check my course info",
	},
	{
		id: 2,
		path: "purchase",
		text: "Check a particular course info",
	},
];

export const terms = [
	{
		id: 1,
    path:"/check-info",
		text: "Check my course info",
	},
	{
    id: 2,
    path:"/search-info",
		text: "Search a   Course Info",
	},
	{
    id: 3,
    path:"/developers",
		text: "Developers",
	},
	{
    id: 4,
    path:"/about",
		text: "About",
	},
];

export const socialIcons = [
	{
		id: 1,
		icon: <AiOutlineTwitter />,
		link: "https://twitter.com/_daveworld",
	},
	{
		id: 2,
		icon: <AiOutlineGithub />,
		link: "https://github.com/EniolaAdemola/course-info",
	},
	{
		id: 3,
		icon: <FaFacebookF />,
		link: "https://web.facebook.com/eniola.ademola.1610/",
	},
	{
		id: 4,
		icon: <FaLinkedin />,
		link: "https://www.linkedin.com/in/eniola-ademola",
	},
];