"use client";

import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-28 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Let’s build something impactful
          </h2>
        </Reveal>

        <Reveal>
          <p className="text-gray-400 mb-10">
            Whether it’s building intelligent systems, collaborating on
            projects, or discussing ideas — I’m always open to meaningful
            conversations.
          </p>
        </Reveal>

        <Reveal>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="mailto:your-email@example.com"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"
            >
              Email Me
            </a>

            <a
              href="#"
              className="px-6 py-3 border border-gray-700 hover:border-blue-400 rounded-lg"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="px-6 py-3 border border-gray-700 hover:border-blue-400 rounded-lg"
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
