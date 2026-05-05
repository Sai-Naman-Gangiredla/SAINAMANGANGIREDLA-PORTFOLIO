"use client";

import Reveal from "@/components/Reveal";

export default function ExperiencePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-12">Experience</h1>

      <div className="relative border-l border-gray-800">
        <Reveal>
          <div className="mb-12 ml-6">
            {/* Timeline Dot */}
            <span className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full border-4 border-black"></span>

            {/* Year */}
            <p className="text-sm text-gray-500">2026</p>

            {/* Title */}
            <h3 className="text-xl font-semibold">
              AI & Automation Virtual Simulations
            </h3>

            {/* Org */}
            <p className="text-gray-400">Datacom (Virtual Simulation)</p>

            {/* Description */}
            <p className="text-gray-500 mt-2">
              Completed industry-level virtual simulations focused on real-world
              AI and automation workflows, applying problem-solving, system
              design, and structured implementation techniques.
            </p>

            {/* Details */}
            <ul className="mt-3 text-sm text-gray-400 list-disc list-inside space-y-1">
              <li>
                <strong>Automation AI Accelerator:</strong> Designed intelligent
                automation workflows and built AI-driven solutions for
                real-world business problems.
              </li>
              <li>
                <strong>Partnering with AI in the Workplace:</strong> Used
                generative AI for debugging, structured reporting, and workflow
                enhancement.
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
