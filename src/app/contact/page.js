"use client";

import { useState } from "react";

export default function ContactPage() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const execute = (command) => {
    let output = "";

    switch (command) {
      case "email":
        output = "Opening email...";
        setTimeout(() => {
          window.open("mailto:sainamangangiredla@gmail.com", "_blank");
        }, 400);
        break;

      case "github":
        output = "Redirecting to GitHub...";
        setTimeout(() => {
          window.open("https://github.com/Sai-Naman-Gangiredla", "_blank");
        }, 400);
        break;

      case "linkedin":
        output = "Opening LinkedIn...";
        setTimeout(() => {
          window.open("https://linkedin.com/in/sainamangangiredla", "_blank");
        }, 400);
        break;

      case "resume":
        output = "Opening resume...";
        setTimeout(() => {
          window.open("/Sai_Naman_Gangiredla_Resume.pdf", "_blank");
        }, 400);
        break;

      case "mobile":
        output = "📱 +91 7288090320";
        break;

      case "help":
        output =
          "Commands: email | github | linkedin | resume | mobile | clear";
        break;

      case "clear":
        setHistory([]);
        return;

      default:
        output = `Command not found: ${command}`;
    }

    setHistory((prev) => [...prev, { command, output }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    execute(cmd);
    setInput("");
  };

  const handleClickCommand = (cmd) => {
    setInput(cmd);

    setTimeout(() => {
      execute(cmd);
      setInput("");
    }, 250);
  };

  return (
    <main className="min-h-screen px-6 pt-32 pb-20 flex justify-center">
      <div className="w-full max-w-4xl">
        <div className="bg-black border border-gray-800 rounded-xl p-6 font-mono text-sm shadow-[0_0_40px_rgba(59,130,246,0.08)]">
          {/* HEADER */}
          <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          {/* INTRO */}
          <div className="space-y-2 text-gray-300 mb-6">
            <p>
              <span className="text-blue-400">&gt;</span> initializing
              connection...
            </p>
            <p>
              <span className="text-blue-400">&gt;</span> system: Sai Naman
              Interface v1.0
            </p>
            <p>
              <span className="text-blue-400">&gt;</span> status: open for
              collaboration
            </p>
            <p>
              <span className="text-blue-400">&gt;</span> type{" "}
              <span className="text-purple-400">help</span>
            </p>
          </div>

          {/* COMMAND LIST */}
          <div className="mb-6 text-gray-400 space-y-1">
            <p>Available commands:</p>

            <div className="pl-4 space-y-1">
              {["email", "github", "linkedin", "resume", "mobile"].map(
                (cmd) => (
                  <button
                    key={cmd}
                    onClick={() => handleClickCommand(cmd)}
                    className="block transition hover:text-purple-400 hover:translate-x-1"
                  >
                    - {cmd}
                  </button>
                ),
              )}
            </div>
          </div>

          {/* HISTORY */}
          <div className="space-y-2 mb-4">
            {history.map((item, i) => (
              <div key={i}>
                <p>
                  <span className="text-blue-400">&gt;</span>{" "}
                  <span className="text-purple-400">{item.command}</span>
                </p>
                <p className="text-gray-400 pl-4">{item.output}</p>
              </div>
            ))}
          </div>

          {/* INPUT */}
          <form onSubmit={handleSubmit} className="flex items-center">
            <span className="text-blue-400 mr-2">&gt;</span>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent outline-none text-gray-200 w-full"
              placeholder="type a command..."
            />
          </form>
        </div>

        <p className="text-xs text-gray-600 mt-6 font-mono">
          No forms. No friction. Just signal.
        </p>
      </div>
    </main>
  );
}
