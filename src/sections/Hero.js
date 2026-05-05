"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* LOCAL GLOW */}
      <div className="absolute w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl top-[40%] left-[60%]"></div>

      {/* CONTENT */}
      <div className="w-full max-w-4xl mx-auto text-center relative z-10 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Building intelligent systems
          </span>{" "}
          that think, scale, and feel alive.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg text-gray-400"
        >
          Engineer focused on real-time applications, AI-driven systems, and
          product experiences beyond the ordinary.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 flex justify-center gap-4"
        >
          <Link
            href="/projects"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition rounded-lg"
          >
            View Work
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 border border-gray-700 hover:border-blue-400 transition rounded-lg"
          >
            Contact
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
