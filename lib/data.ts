import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import homyz from "@/public/homyz.png";
import carhub from "@/public/carhub.png";
import shopboard from "@/public/shopbaord.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import apple from "@/public/apple.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Btech in Information Technology",
    location: "GL Bajaj Institue of Technology",
    description:
      "I gradauted as an IT student and learned various frontend and backend technologies",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2023",
  },
  {
    title: "Front-End  Web Developer Intern",
    location: "The Sparks Foundation",
    description:
      "I did an internship at Sparks Foundation worked on various projects.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [
  {
    title: "Apple Iphone 15 Pro Website",
    description:
      "iPhone 15 Pro website crafted with React and JavaScript, employing GSAP for animations and Sentry for issue management. Hosted on Vercel for seamless deployment and user accessibility.",
    tags: ["React", "GSAP", "Sentry", "Javascript", "Tailwind"],
    imageUrl: apple,
    githublink: "https://appleweb.vercel.app/",
  },
  {
    title: "Homyz",
    description:
      "Homyz, a MERN app, integrates Auth0 for secure authentication and Prisma/MongoDB for efficient data schema. React Query enhances performance with optimized query handling and caching.",
    tags: [
      "React",
      "MongoDB",
      "Express",
      "Node",
      "Mantine",
      "Tailwind",
      "Prisma",
    ],
    imageUrl: homyz,
    githublink: "https://real-estate-mern-frontend-fawn.vercel.app/",
  },
  {
    title: "CarHub",
    description:
      "CarHub combines ReactJS/NextJS to integrate detailed car data from Rapid API, with SSR for smooth UX and SEO optimization. Utilizing Headless UI on Vercel ensures high customization and visibility.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: carhub,
    githublink:
      "https://car-rental-website-1wzx.vercel.app/?manufacturer=hyundai&limit=20",
  },
  {
    title: "ShopBoard",
    description:
      "ShopBoard's ReactJS admin dashboard offers advanced features like revenue analysis and customizable themes. Integration of Syncfusion components enhances functionality and visual appeal, ensuring a seamless user experience.",
    tags: ["React", "JavaScript", "Tailwind", "CSS", "HTMl"],
    imageUrl: shopboard,
    githublink: "https://github.com/shrikant9024/ReactAdminDashboard",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "Headless Ui",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Django",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "GSAP",
] as const;
