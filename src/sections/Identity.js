"use client";

import { motion } from "framer-motion";

export default function Identity() {
  const items = [
    "AI + Systems Engineering",
    "Real-time Applications",
    "Product-first Thinking",
    "Developer Tools",
  ];

  return (
    <section className="py-16 border-t border-white/10 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-sm md:text-base text-gray-300 hover:text-blue-400 transition"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
