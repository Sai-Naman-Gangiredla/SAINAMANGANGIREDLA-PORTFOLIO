"use client";

import { motion } from "framer-motion";

import Hero from "@/sections/Hero";
import WhyMe from "@/sections/WhyMe";
import FeaturedProjects from "@/sections/FeaturedProjects";
import Research from "@/sections/Research";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Hero />
      </motion.div>

      {/* WHY ME (NEW 🔥) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <WhyMe />
      </motion.div>

      {/* PROJECTS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
      >
        <FeaturedProjects />
      </motion.div>

      {/* RESEARCH */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Research />
      </motion.div>
    </motion.main>
  );
}
