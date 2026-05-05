"use client";

import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="py-28 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-semibold mb-10">About Me</h2>
        </Reveal>

        <Reveal>
          <p className="text-gray-400 leading-relaxed mb-6">
            I started by building small applications, but quickly became
            interested in how systems behave at scale. That curiosity led me
            into working with real-time applications, intelligent systems, and
            structured problem-solving.
          </p>
        </Reveal>

        <Reveal>
          <p className="text-gray-400 leading-relaxed mb-6">
            My focus today is on building systems that are not only functional
            but thoughtfully designed — where performance, usability, and
            clarity all come together.
          </p>
        </Reveal>

        <Reveal>
          <p className="text-gray-500 leading-relaxed">
            I enjoy working on problems that require both technical depth and
            product thinking — especially in areas involving real-time data,
            automation, and intelligent workflows.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
