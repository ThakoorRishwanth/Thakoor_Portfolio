import type { IconType } from "react-icons/lib";
import shiksha from '../assets/projects/shiksha.png';
import thirsty from '../assets/projects/thirsty.png';
import harley from '../assets/projects/harley.png';
import weather from '../assets/projects/weather.png';
import ourhome from '../assets/projects/ourhome.png';
import weather2 from '../assets/projects/weather2.png'

import ReactIcon from "icons/ReactIcon";
import ReduxIcon from "icons/ReduxIcon";
import TailwindIcon from "icons/TailwindIcon";
import { SiReact, SiRedux, SiTailwindcss, SiChakraui, SiJavascript, SiMongodb, SiNodedotjs } from 'react-icons/si';
import { FaGem } from 'react-icons/fa';

const techTypes = [
  "TypeScript", "Vite", "React", "Redux", "Tailwind CSS", "Chakra UI", "JavaScript", 
  "MongoDB", "MongoDB Atlas", "Node.js", "AI Gemini"
] as const;

type TechTuple = typeof techTypes;

export type ProjectTech = { tech: TechTuple[number]; icon: IconType };

export type Project = {
  title: string;
  description: string;
  image: string;
  url: string;
  githubUrl?: string;
  techs: ProjectTech[];
  isPinned?: boolean;
};

const reactTech: ProjectTech = { tech: "React", icon: ReactIcon };
const reduxTech: ProjectTech = { tech: "Redux", icon: ReduxIcon };
const tailwindCssTech: ProjectTech = { tech: "Tailwind CSS", icon: TailwindIcon };
const chakraUITech: ProjectTech = { tech: "Chakra UI", icon: SiChakraui };
const javascriptTech: ProjectTech = { tech: "JavaScript", icon: SiJavascript };
const mongodbTech: ProjectTech = { tech: "MongoDB", icon: SiMongodb };
const mongodbAtlasTech: ProjectTech = { tech: "MongoDB Atlas", icon: SiMongodb };
const nodejsTech: ProjectTech = { tech: "Node.js", icon: SiNodedotjs };
const aiGeminiTech: ProjectTech = { tech: "AI Gemini", icon: FaGem };

export const projects: Project[] = [
  {
    title: "SikshsaSahayak",
    description: "The ShikshaSahayak Platform is a web-based solution designed to assist students who face financial challenges in their education.",
    image: shiksha,
    url: "shikshasahayak-l0px.onrender.com/",
    githubUrl: "https://github.com/JagannathGariNavya/ShikshaSahayak",
    techs: [
      reactTech, chakraUITech, javascriptTech, mongodbTech, mongodbAtlasTech, nodejsTech, aiGeminiTech
    ],
    isPinned: true
  },
  {
    title: "Thirsty",
    description: "The project is about Online Wine Mart. The platform offers a diverse selection of wine products, allowing customers to explore and purchase wines with ease.",
    image: thirsty,
    url: "pay-pal-pioneers-068.vercel.app",
    githubUrl: "https://github.com/Adit704/PayPal-Pioneers_068",
    techs: [
      reactTech, chakraUITech, javascriptTech, reduxTech
    ],
    isPinned: true
  },
  {
    title: "Harley",
    description: "Your ultimate destination for an authentic motorcycle experience offers a seamless platform for enthusiasts to explore the world of motorcycling like never before.",
    image: harley,
    url: "tista-method-019.vercel.app",
    githubUrl: "https://github.com/ThakoorRishwanth/Tista-Method-019",
    techs: [
      reactTech, chakraUITech, javascriptTech, tailwindCssTech, reduxTech,
    ],
    isPinned: true
  },
  {
    title: "Weather Companion",
    description: "A sleek and intuitive weather forecasting tool that provides real-time updates and detailed five-day forecasts for any city. Key features include easy city search, favorite city management, and responsive design. Developed using React and CSS.",
    image: weather2,
    url: "weatherdashboard-1.onrender.com/",
    githubUrl: "https://github.com/ThakoorRishwanth/weatherDashboard",
    techs: [
  
      reactTech, chakraUITech, javascriptTech, reduxTech
      
    ]
  },
  {
    title: "Weather",
    description: "An advanced weather checker that provides instant, accurate weather updates for any city, simply by entering the city's name.",
    image: weather,
    url: "weather-app-eta-navy-64.vercel.app",
    githubUrl: "https://github.com/ThakoorRishwanth/WeatherApp",
    techs: [
      reactTech, chakraUITech, javascriptTech, tailwindCssTech, reduxTech,
    ]
  },
  {
    title: "OurHome",
    description: "This repository houses the collaborative efforts to create a stunning and functional website for OurHome \n the premier destination for chic home decor.",
    image: ourhome,
    url: "https://ourhome.onrender.com/",
    githubUrl: "https://github.com/AbhinavTyagi30/OurHome",
    techs: [
  
      javascriptTech,
      tailwindCssTech,
      
    ]
  }
];
