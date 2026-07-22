"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const certificates = [
  {
    title: "Automation AI Accelerator",
    org: "Datacom",
    file: "/certificates/Automation-AI-Accelerator-From-Co-pilot-to-Autonomous-Agent.pdf",
  },
  {
    title: "Google Prompting Essentials",
    org: "Cousera-Google"
    file: "/certificates/Google-Prompting-Essentials.pdf",
  },
  {
    title: "Google-AI-Essentials",
    org: "Coursera-Google"
    file: "/certificates/Google-AI-Essentials.pdf",
  },
  {
    title: "Partnering with AI in the Workplace",
    org: "Datacom",
    file: "/certificates/Partnering-with-AI-in-the-Workplace–Forage.pdf",
  },
  {
    title: "Microsoft Azure Fundamentals",
    org: "Microsoft",
    file: "/certificates/Microsoft-Certified-Azure-Fundamentals.pdf",
  },
  {
    title: "AI Tools Workshop",
    org: "Be10x",
    file: "/certificates/1-Day-AI-Tools-Workshop–Be10x.pdf",
  },
  {
    title: "Artificial Intelligence Bootcamp",
    org: "NoviTech",
    file: "/certificates/Artificial-Intelligence-Bootcamp–NoviTech-R&D-Pvt-Ltd.pdf",
  },
  {
    title: "Google Skillshop Trainer Course",
    org: "Google",
    file: "/certificates/Google-Skillshop-Certified-Trainer-Course.pdf",
  },
  {
    title: "AI SEO Masterclass",
    org: "Pankaj Kumar SEO",
    file: "/certificates/3-Day-AI-Powered-SEO-Masterclass–Pankaj-Kumar-SEO.png",
  },
  {
    title: "Python Certification",
    org: "Kaggle",
    file: "/certificates/Python–Kaggle.png",
  },
];

export default function CertificatesPage() {
  const [selected, setSelected] = useState(null);

  const isPDF = (file) => file.endsWith(".pdf");

  // ESC key close + scroll lock
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSelected(null);
    };

    if (selected) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, [selected]);

  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-12">Certificates</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            onClick={() => setSelected(cert)}
            className="group p-6 border border-gray-800 rounded-xl cursor-pointer transition-all duration-300 hover:border-blue-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
          >
            <h3 className="text-lg font-semibold group-hover:text-blue-400 transition">
              {cert.title}
            </h3>

            <p className="text-gray-500 mt-1">{cert.org}</p>

            <p className="text-sm text-gray-600 mt-4">Click to view →</p>
          </div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center z-50 p-4"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl"
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 z-50 bg-black/60 hover:bg-black/80 border border-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition"
              >
                ✕
              </button>

              {/* CONTENT */}
              {isPDF(selected.file) ? (
                <iframe
                  src={selected.file}
                  className="w-full h-[80vh] rounded-lg border border-gray-800"
                />
              ) : (
                <img
                  src={selected.file}
                  className="max-h-[80vh] mx-auto rounded-lg border border-gray-800"
                />
              )}

              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold">{selected.title}</h3>
                <p className="text-gray-400">{selected.org}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
