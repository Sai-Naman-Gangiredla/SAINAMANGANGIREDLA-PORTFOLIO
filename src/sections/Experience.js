"use client";

import Reveal from "../components/Reveal";

const experiences = [
  {
    role: "Automation AI Accelerator",
    company: "Datacom (Virtual Simulation)",
    year: "2026",
    description:
      "Designed intelligent automation workflows and implemented AI-driven solutions for real-world business problems.",
  },
  {
    role: "Automation Job Simulation",
    company: "Datacom (Virtual Simulation)",
    year: "2026",
    description:
      "Analyzed client requirements and built structured automation pipelines to optimize processes.",
  },
  {
    role: "Partnering with AI in the Workplace",
    company: "Datacom (Virtual Simulation)",
    year: "2026",
    description:
      "Used generative AI for debugging, structured reporting, and workflow enhancement.",
  },
];

export default function Experience() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl font-bold mb-12">Experience</h2>
        </Reveal>

        <div className="relative border-l border-white/10">
          {experiences.map((exp, i) => (
            <Reveal key={i}>
              <div className="ml-6 mb-10 relative">
                {/* DOT */}
                <div className="absolute -left-[30px] top-2 w-3 h-3 bg-blue-500 rounded-full" />

                {/* YEAR */}
                <p className="text-sm text-gray-500 mb-1">{exp.year}</p>

                {/* ROLE */}
                <h3 className="text-xl font-semibold">{exp.role}</h3>

                {/* COMPANY */}
                <p className="text-gray-400 mb-2">{exp.company}</p>

                {/* DESCRIPTION */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
