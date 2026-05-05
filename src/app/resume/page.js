"use client";

import Link from "next/link";
import { FileText, Download, Briefcase, Mail } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="min-h-screen px-6 py-16 max-w-7xl mx-auto">
      {/* Title */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white">Resume</h1>
        <p className="text-gray-400 mt-2">
          AI + Systems Engineer focused on real-time, scalable applications.
        </p>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
        {/* LEFT - PDF */}
        <div className="lg:col-span-7">
          <div className="border border-gray-800 rounded-xl overflow-hidden h-[75vh] bg-black">
            <iframe
              src="/Sai_Naman_Gangiredla_Resume.pdf"
              className="w-full h-full"
              title="Resume"
            />
          </div>
        </div>

        {/* RIGHT - PANEL */}
        <div className="lg:col-span-3 space-y-6">
          {/* Actions */}
          <div className="border border-gray-800 rounded-xl p-5">
            <h2 className="text-white font-semibold mb-4">Quick Actions</h2>

            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <a
                href="/Sai_Naman_Gangiredla_Resume.pdf"
                download
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Download size={16} />
                Download Resume
              </a>

              <Link
                href="/projects"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Briefcase size={16} />
                View Work
              </Link>

              <Link
                href="/contact"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Mail size={16} />
                Contact
              </Link>

              {/* GitHub SVG */}
              <a
                href="https://github.com/Sai-Naman-Gangiredla"
                target="_blank"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.04c-3.34.72-4.04-1.42-4.04-1.42-.55-1.38-1.34-1.75-1.34-1.75-1.1-.76.08-.75.08-.75 1.22.08 1.86 1.25 1.86 1.25 1.08 1.86 2.83 1.32 3.52 1 .11-.78.42-1.32.76-1.62-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.16 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.86.12 3.16.77.84 1.24 1.9 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.3c0 .32.22.69.83.57C20.56 21.79 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>

              {/* LinkedIn SVG */}
              <a
                href="https://www.linkedin.com/in/sainamangangiredla/"
                target="_blank"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.5 8h4V24h-4V8zm7.5 0h3.6v2.16h.05c.5-.95 1.7-1.95 3.5-1.95 3.75 0 4.45 2.47 4.45 5.68V24h-4v-8.5c0-2.03-.04-4.64-2.83-4.64-2.83 0-3.26 2.21-3.26 4.5V24h-4V8z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Summary */}
          <div className="border border-gray-800 rounded-xl p-5">
            <h2 className="text-white font-semibold mb-4">Summary</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              I build systems that survive real-world complexity — scalable,
              reliable, and designed beyond surface-level functionality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
