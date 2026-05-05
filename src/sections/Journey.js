"use client";

import Reveal from "@/components/Reveal";

export default function Journey() {
  const timeline = [
    {
      title: "Started with Programming",
      description:
        "Began exploring development through small projects and fundamental concepts.",
    },
    {
      title: "Built Real Projects",
      description:
        "Worked on practical applications like BookmarkStack and automation systems.",
    },
    {
      title: "Explored AI & Systems",
      description:
        "Dived into real-time systems and Graph Neural Networks for traffic prediction.",
    },
    {
      title: "Current Focus",
      description:
        "Building intelligent systems and refining product-level thinking.",
    },
  ];

  return (
    <section className="py-28 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">Journey</h2>
        </Reveal>

        <div className="relative border-l border-white/10 pl-6 space-y-10">
          {timeline.map((item, index) => (
            <Reveal key={index}>
              <div className="relative">
                {/* Dot */}
                <div className="absolute -left-[10px] top-1 w-4 h-4 bg-blue-500 rounded-full"></div>

                <h3 className="text-lg font-semibold">{item.title}</h3>

                <p className="text-gray-400 text-sm mt-2">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
