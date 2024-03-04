"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am an <span className="font-medium">IT</span> graduate from
        <span className="font-medium">
          {" "}
          Gl Bajaj Institue of Technology and Management, Greater Noida
        </span>
        . I am Passionate about problem-solving and and i always look whats new
        in the tech-market{" "}
        <span className="font-medium">full-stack web development.</span> I
        thrive in dynamic environments where learning and growth are encouraged.{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB, Django
        </span>
        .I am also familiar with TypeScript, and Prisma. I am alwaysEager to
        contribute my skills and collaborate on innovative projects, With a
        strong foundation in coding and a drive to excel, I am committed to
        delivering high-quality solutions that make a meaningful impact in the
        world of software development. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> developer role.{" "}
      </p>
    </motion.section>
  );
}
