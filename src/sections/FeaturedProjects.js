"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      {/* TITLE */}
      <motion.h2
        className="text-3xl font-bold mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        Featured Work
      </motion.h2>

      {/* GRID */}
      <motion.div
        className="grid md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        {featured.map((project) => (
          <motion.div
            key={project.slug}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href={`/projects/${project.slug}`}>
              <div
                className="group relative border border-gray-800 rounded-xl p-6 cursor-pointer overflow-hidden
                transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
                hover:-translate-y-3 hover:scale-[1.025] hover:border-blue-500/60
                hover:shadow-[0_20px_60px_rgba(59,130,246,0.18)]"
              >
                {/* GLOW */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
                  bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none"
                />

                {/* CONTENT */}
                <div className="relative z-10 transition-transform duration-500 group-hover:translate-y-[-2px]">
                  <h3
                    className="text-xl font-semibold mb-2 transition-all duration-300
                    group-hover:text-blue-400 group-hover:translate-x-[2px]"
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-gray-400 text-sm mb-4 transition-all duration-300
                    group-hover:text-gray-300"
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs bg-gray-800 rounded-full
                        transition-all duration-300
                        group-hover:bg-gray-700 group-hover:scale-[1.05]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* EDGE LIGHT */}
                <div
                  className="absolute inset-0 rounded-xl border border-transparent
                  group-hover:border-blue-500/20 transition duration-500 pointer-events-none"
                />
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* BUTTON */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <Link
          href="/projects"
          className="inline-block px-6 py-3 border border-gray-700 rounded-lg
          transition-all duration-300
          hover:border-blue-400 hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
        >
          View All Projects →
        </Link>
      </motion.div>
    </section>
  );
}
