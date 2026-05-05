"use client";

import Reveal from "@/components/Reveal";

export default function Research() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-10">Research</h2>

      <Reveal>
        <div className="group relative border border-gray-800 rounded-xl p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500/50">
          {/* Glow */}
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl"></div>

          <div className="relative z-10">
            <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition">
              Real-Time Traffic Prediction using Graph Neural Networks & Edge
              Computing
            </h3>

            <p className="text-gray-400 mb-4">
              Conducted a technical research study on predicting real-time
              traffic patterns using Graph Neural Networks (GNNs) combined with
              edge computing architectures to reduce latency and improve
              scalability.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "GNN",
                "Edge Computing",
                "Deep Learning",
                "Real-time Systems",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-gray-800 rounded-full group-hover:bg-gray-700 transition"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="/certificates/research-paper.pdf"
              target="_blank"
              className="inline-block px-5 py-2 border border-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-400 transition"
            >
              View Paper →
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
