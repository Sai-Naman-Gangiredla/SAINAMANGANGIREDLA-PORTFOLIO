"use client";

import { motion } from "framer-motion";

export default function WhyMe() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="max-w-4xl">
        {/* LABEL */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-gray-500 uppercase tracking-widest mb-6"
        >
          Why Me
        </motion.p>

        {/* HEADLINE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-semibold leading-tight mb-10"
        >
          I don’t just build features — I design systems that{" "}
          <span className="text-blue-400">survive real-world complexity</span>.
        </motion.h2>

        {/* CORE PHILOSOPHY */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg leading-relaxed mb-12 max-w-3xl"
        >
          Most projects work in ideal conditions. I focus on what happens when
          things break — scale increases, data grows, users behave
          unpredictably. That’s where real systems are defined.
        </motion.p>

        {/* DIFFERENTIATOR GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="border border-gray-800 rounded-xl p-6 bg-white/0 backdrop-blur-sm hover:border-blue-500/40 transition"
          >
            <h3 className="text-lg font-semibold mb-3 text-blue-400">
              Think in Systems
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              I break problems into flows, dependencies, and edge cases — not
              just UI screens or isolated features.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="border border-gray-800 rounded-xl p-6 hover:border-purple-500/40 transition"
          >
            <h3 className="text-lg font-semibold mb-3 text-purple-400">
              Build for Reality
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              I design for real-world conditions — latency, scaling, user
              unpredictability — not just perfect demos.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="border border-gray-800 rounded-xl p-6 hover:border-green-500/40 transition"
          >
            <h3 className="text-lg font-semibold mb-3 text-green-400">
              Go Beyond Surface
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              I focus on structure, clarity, and long-term reliability — not
              just making things look or work once.
            </p>
          </motion.div>
        </div>

        {/* CLOSING LINE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-white text-lg"
        >
          Because good software isn’t just about working — it’s about{" "}
          <span className="text-blue-400">holding up when it matters</span>.
        </motion.p>
      </div>
    </section>
  );
}
