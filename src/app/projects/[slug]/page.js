"use client";

import { use } from "react";
import { useState } from "react";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export default function ProjectDetail({ params }) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  const [selectedImage, setSelectedImage] = useState(null);

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const section = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const allImages = [
    project.images?.preview,
    ...(project.images?.gallery || []),
  ].filter(Boolean);

  return (
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      {/* HERO */}
      <motion.div
        className="mb-20 max-w-3xl"
        initial="hidden"
        animate="visible"
        variants={section}
      >
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">
          Case Study / {project.title}
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-sm bg-gray-800/80 border border-gray-700 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-20 items-start">
        {/* LEFT STORY */}
        <div className="border-l border-gray-800 pl-6 space-y-16">
          {/* CONTEXT */}
          {project.story?.context && (
            <motion.div
              variants={section}
              initial="hidden"
              whileInView="visible"
            >
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                Context
              </p>
              <h2 className="text-2xl font-semibold mb-3">Why this exists</h2>
              <p className="text-gray-400 leading-relaxed">
                {project.story.context}
              </p>
            </motion.div>
          )}

          {/* PROBLEM */}
          <motion.div variants={section} initial="hidden" whileInView="visible">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
              Problem
            </p>
            <h2 className="text-2xl font-semibold mb-3">What was broken</h2>
            <p className="text-gray-400 leading-relaxed">
              {project.story?.problem}
            </p>
          </motion.div>

          {/* APPROACH */}
          <motion.div
            variants={section}
            initial="hidden"
            whileInView="visible"
            className="p-5 rounded-xl border border-purple-500/20 bg-purple-500/5"
          >
            <p className="text-xs text-purple-300 uppercase tracking-wider mb-2">
              Approach
            </p>
            <h2 className="text-2xl font-semibold mb-3 text-purple-400">
              How I designed the solution
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {project.story?.approach}
            </p>
          </motion.div>

          {/* CHALLENGES */}
          <motion.div variants={section} initial="hidden" whileInView="visible">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
              Challenges
            </p>
            <h2 className="text-2xl font-semibold mb-3">
              Key decisions & struggles
            </h2>
            <p className="text-gray-400 leading-relaxed">
              {project.story?.challenges}
            </p>
          </motion.div>

          {/* 🔥 NEW: ENGINEERING HIGHLIGHTS */}
          {project.highlights && (
            <motion.div
              variants={section}
              initial="hidden"
              whileInView="visible"
              className="p-5 rounded-xl border border-blue-500/20 bg-blue-500/5"
            >
              <p className="text-xs text-blue-300 uppercase tracking-wider mb-2">
                Engineering Highlights
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-blue-400">
                What makes this system strong
              </h2>

              <div className="space-y-3">
                {project.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">▹</span>
                    <p className="text-gray-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* OUTCOME */}
          <motion.div
            variants={section}
            initial="hidden"
            whileInView="visible"
            className="p-5 rounded-xl border border-green-500/20 bg-green-500/5"
          >
            <p className="text-xs text-green-300 uppercase tracking-wider mb-2">
              Outcome
            </p>
            <h2 className="text-2xl font-semibold mb-3 text-green-400">
              What changed
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {project.story?.outcome}
            </p>
          </motion.div>

          {/* HOW IT WORKS */}
          <motion.div
            variants={section}
            initial="hidden"
            whileInView="visible"
            className="p-5 rounded-xl border border-gray-700 bg-gray-900/40"
          >
            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>

            <div className="mb-6 text-sm text-blue-400 font-medium">
              {project.architecture}
            </div>

            <div className="text-sm text-gray-300 space-y-2">
              {project.flow?.map((step, i) => (
                <p key={i}>• {step}</p>
              ))}
            </div>
          </motion.div>

          {/* BUTTONS */}
          <div className="flex gap-4 pt-6">
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                className="px-5 py-2 border border-gray-700 rounded-lg hover:border-blue-400 transition"
              >
                View Code
              </a>
            )}

            {project.live && project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                className="px-5 py-2 bg-blue-500 rounded-lg hover:opacity-90 transition"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE SYSTEM */}
        <div className="sticky top-28 space-y-4">
          {allImages.length > 0 && (
            <img
              src={selectedImage || allImages[0]}
              alt={project.title}
              onClick={() => setSelectedImage(selectedImage || allImages[0])}
              className="w-full rounded-xl border border-gray-800 cursor-pointer hover:scale-[1.02] transition duration-300"
            />
          )}

          {allImages.length > 1 && (
            <div className="flex gap-3 overflow-x-auto">
              {allImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setSelectedImage(img)}
                  className="w-24 h-16 object-cover rounded-lg border border-gray-800 cursor-pointer hover:scale-105 transition"
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
        >
          <img
            src={selectedImage}
            className="max-h-[90vh] max-w-[90vw] rounded-lg"
          />
        </div>
      )}
    </section>
  );
}
