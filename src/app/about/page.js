"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-32 pb-16">
      {/* INTRO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Sai Naman Gangiredla
        </h1>

        <p className="text-lg text-gray-400 leading-relaxed max-w-3xl">
          I’m an AI Engineer focused on building intelligent systems, real-time
          applications, and scalable digital products that go beyond
          conventional software. My work sits at the intersection of
          engineering, data, and user experience—where systems are not just
          functional, but efficient, adaptive, and impactful.
        </p>
      </motion.section>

      {/* PROFESSIONAL SUMMARY */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold mb-4">Professional Approach</h2>

        <p className="text-gray-400 leading-relaxed max-w-3xl">
          I approach development with a systems mindset—designing solutions that
          are not only scalable but also maintainable and performance-driven.
          From building AI-powered workflows to crafting full-stack
          applications, I focus on creating end-to-end systems that solve real
          problems with clarity and efficiency. My experience spans backend
          architecture, data pipelines, and frontend interfaces, allowing me to
          build products that are both technically sound and user-centric.
        </p>
      </motion.section>

      {/* EDUCATION */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold mb-4">Education</h2>

        <div className="border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition">
          <h3 className="text-lg font-semibold">B.Tech in Computer Science</h3>
          <p className="text-gray-400 mt-1">VIT-AP University · 2025</p>

          <p className="text-gray-500 mt-3">
            Specialized in Artificial Intelligence and Machine Learning with
            strong foundations in software engineering, system design, and
            data-driven development. Gained hands-on experience through projects
            involving real-time systems, automation pipelines, and deep learning
            models.
          </p>
        </div>
      </motion.section>

      {/* CORE DOMAINS */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold mb-6">Core Domains</h2>

        <div className="flex flex-wrap gap-3">
          {[
            "Artificial Intelligence",
            "Machine Learning",
            "Real-Time Systems",
            "Full Stack Development",
            "Automation",
            "Data Systems",
          ].map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-full bg-gray-900 border border-gray-700 text-sm text-gray-300 hover:border-blue-400 transition"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.section>

      {/* TECHNICAL STRENGTHS */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold mb-6">Technical Strengths</h2>

        <div className="flex flex-wrap gap-3">
          {[
            "Deep Learning",
            "System Design",
            "Cloud Integration",
            "Backend Development",
            "Frontend Engineering",
            "Data Analysis",
          ].map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-full bg-gray-900 border border-gray-700 text-sm text-gray-300 hover:border-blue-400 transition"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.section>

      {/* BEYOND ACADEMICS */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Beyond Academics</h2>

        <p className="text-gray-400 leading-relaxed max-w-3xl">
          Outside of engineering, I enjoy gaming, which has strengthened my
          strategic thinking, adaptability, and decision-making under pressure.
          I also spend time exploring history, learning from past civilizations
          and their impact on the present. Alongside this, I have a growing
          inclination toward spirituality, which helps me maintain focus,
          discipline, and a broader perspective toward both work and life.
        </p>
      </motion.section>
    </main>
  );
}
