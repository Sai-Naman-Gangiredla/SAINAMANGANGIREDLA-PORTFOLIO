"use client";

import FileText from "lucide-react/dist/esm/icons/file-text";
import Download from "lucide-react/dist/esm/icons/download";
import Briefcase from "lucide-react/dist/esm/icons/briefcase";
import Mail from "lucide-react/dist/esm/icons/mail";
import GithubIcon from "lucide-react/dist/esm/icons/github";
import LinkedinIcon from "lucide-react/dist/esm/icons/linkedin";

export default function ResumePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      {/* HEADER */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">Resume</h1>
      </div>

      {/* LAYOUT */}
      <div className="grid lg:grid-cols-[2.5fr_1fr] gap-10">
        {/* LEFT — RESUME VIEWER */}
        <div className="border border-gray-800 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="/Sai_Naman_Gangiredla_Resume.pdf"
            className="w-full h-[85vh]"
          />
        </div>

        {/* RIGHT — SIDEBAR */}
        <div className="space-y-6 lg:sticky lg:top-24 h-fit">
          {/* PROFILE */}
          <div className="border border-gray-800 rounded-xl p-5 bg-gray-900/40">
            <p className="text-xs text-gray-500 mb-2 tracking-wide">PROFILE</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              AI + Systems Engineer focused on building real-time, scalable
              applications that remain reliable under real-world complexity.
            </p>
          </div>

          {/* ACTIONS */}
          <div className="border border-gray-800 rounded-xl p-5">
            <p className="text-xs text-gray-500 mb-4 tracking-wide">ACTIONS</p>

            <div className="flex flex-col gap-3">
              {/* PRIMARY */}
              <a
                href="/Sai_Naman_Gangiredla_Resume.pdf"
                download
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:opacity-90 transition font-medium"
              >
                <Download size={16} />
                Download Resume
              </a>

              {/* SECONDARY */}
              <a
                href="/Sai_Naman_Gangiredla_Resume.pdf"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg hover:border-blue-500 transition"
              >
                <FileText size={16} />
                View Resume
              </a>

              <a
                href="/projects"
                className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg hover:border-blue-500 transition"
              >
                <Briefcase size={16} />
                View Work
              </a>

              <a
                href="/contact"
                className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg hover:border-blue-500 transition"
              >
                <Mail size={16} />
                Contact
              </a>

              <a
                href="https://github.com/Sai-Naman-Gangiredla"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg hover:border-blue-500 transition"
              >
                <GithubIcon size={16} />
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/sainamangangiredla/"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg hover:border-blue-500 transition"
              >
                <LinkedinIcon size={16} />
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* HIGHLIGHTS */}
          <div className="border border-gray-800 rounded-xl p-5">
            <p className="text-xs text-gray-500 mb-3 tracking-wide">
              HIGHLIGHTS
            </p>

            <div className="space-y-2 text-sm text-gray-300 leading-relaxed">
              <p>• Real-time system design</p>
              <p>• AI + automation pipelines</p>
              <p>• Scalable architecture thinking</p>
              <p>• Full-stack development</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
