"use client";

import Link from "next/link";
import { FileText, Download, Briefcase, Mail, GitHub } from "lucide-react";

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

      {/* 70/30 Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
        {/* LEFT (70%) → PDF Viewer */}
        <div className="lg:col-span-7">
          <div className="border border-gray-800 rounded-xl overflow-hidden h-[75vh] bg-black">
            <iframe
              src="/resume.pdf"
              className="w-full h-full"
              title="Resume"
            />
          </div>
        </div>

        {/* RIGHT (30%) → Info Panel */}
        <div className="lg:col-span-3 space-y-6">
          {/* Quick Actions */}
          <div className="border border-gray-800 rounded-xl p-5">
            <h2 className="text-white font-semibold mb-4">Quick Actions</h2>

            <div className="flex flex-col gap-3">
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
              >
                <Download size={16} />
                Download Resume
              </a>

              <Link
                href="/work"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
              >
                <Briefcase size={16} />
                View Work
              </Link>

              <Link
                href="/contact"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
              >
                <Mail size={16} />
                Contact
              </Link>

              <a
                href="https://github.com/Sai-Naman-Gangiredla"
                target="_blank"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
              >
                <GitHub size={16} />
                GitHub
              </a>

              {/* LinkedIn SVG */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
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
              I build systems that work under real-world conditions — not just
              demos. Focused on scalability, reliability, and intelligent
              automation.
            </p>
          </div>

          {/* Skills */}
          <div className="border border-gray-800 rounded-xl p-5">
            <h2 className="text-white font-semibold mb-4">Focus Areas</h2>

            <div className="flex flex-wrap gap-2 text-xs text-gray-300">
              <span className="px-2 py-1 border border-gray-700 rounded">
                Real-time Systems
              </span>
              <span className="px-2 py-1 border border-gray-700 rounded">
                AI + Automation
              </span>
              <span className="px-2 py-1 border border-gray-700 rounded">
                Scalable Architecture
              </span>
              <span className="px-2 py-1 border border-gray-700 rounded">
                Full Stack
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
