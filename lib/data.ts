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
    title: "Homyz",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
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
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: carhub,
    githublink:
      "https://car-rental-website-1wzx.vercel.app/?manufacturer=hyundai&limit=20",
  },
  {
    title: "ShopBoard",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
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
] as const;
