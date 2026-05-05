"use client";

import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10">Projects</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.slug}
            onClick={() => router.push(`/projects/${project.slug}`)}
            className="group relative border border-gray-800 rounded-xl p-6 cursor-pointer overflow-hidden transition-all duration-500 ease-out
            hover:-translate-y-2 hover:scale-[1.02] hover:border-blue-500/60
            hover:shadow-[0_10px_40px_rgba(59,130,246,0.15)]"
          >
            {/* GLOW LAYER */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-purple-500/10 pointer-events-none" />

            <div className="relative z-10">
              {/* 🔥 CATEGORY BADGE (NEW) */}
              {project.category && (
                <span className="inline-block mb-2 px-3 py-1 text-[11px] tracking-wide text-blue-400 border border-blue-500/20 bg-blue-500/5 rounded-full">
                  {project.category}
                </span>
              )}

              {/* TITLE */}
              <h2 className="text-xl font-semibold mb-2 transition duration-300 group-hover:text-blue-400">
                {project.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-400 text-sm mb-4 transition duration-300">
                {project.description}
              </p>

              {/* TECH */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs bg-gray-800 rounded-full transition duration-300 group-hover:bg-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* 🔥 MORE CARD (UNCHANGED) */}
        <div
          onClick={() =>
            window.open(
              "https://github.com/Sai-Naman-Gangiredla?tab=repositories",
              "_blank",
            )
          }
          className="group relative border border-dashed border-gray-700 rounded-xl p-6 cursor-pointer overflow-hidden transition-all duration-500 ease-out
          hover:-translate-y-2 hover:scale-[1.02] hover:border-purple-500/60
          hover:shadow-[0_10px_40px_rgba(168,85,247,0.2)] flex items-center justify-center"
        >
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-300 group-hover:text-purple-400 transition">
              More →
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Explore all projects on GitHub
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
