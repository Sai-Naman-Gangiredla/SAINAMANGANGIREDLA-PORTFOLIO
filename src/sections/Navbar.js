"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Work", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Certificates", href: "/certificates" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50 bg-black/60 backdrop-blur-xl border-b border-gray-800">
      <div className="w-full px-4 md:px-10 lg:px-16 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="w-8 h-8 flex items-center justify-center rounded-md 
            bg-gradient-to-br from-blue-500 to-purple-500 text-white text-sm font-bold shadow-lg
            transition-all duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
            group-hover:scale-110 group-hover:brightness-110"
          >
            SN
          </div>

          <span
            className="font-semibold text-base md:text-lg tracking-wide text-white
            transition-all duration-300
            group-hover:text-blue-400 group-hover:translate-x-[1px]
            leading-tight"
          >
            Sai Naman Gangiredla
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-6 text-sm items-center">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={i}
                href={link.href}
                className="relative group px-1 py-1
                transition-all duration-300
                [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]"
              >
                <span
                  className={`transition-all duration-300 ${
                    isActive
                      ? "text-blue-400"
                      : "text-gray-400 group-hover:text-white"
                  }`}
                >
                  {link.name}
                </span>

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500
                  transition-all duration-300
                  [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
                  ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                />

                {isActive && (
                  <span className="absolute inset-0 rounded-md bg-blue-500/10 blur-md -z-10" />
                )}
              </Link>
            );
          })}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span
            className={`w-5 h-[2px] bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`w-5 h-[2px] bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-5 h-[2px] bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-black/95 backdrop-blur-xl">
          <div className="flex flex-col px-6 py-4">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={i}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`py-3 text-sm transition-all duration-300 ${
                    isActive
                      ? "text-blue-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
