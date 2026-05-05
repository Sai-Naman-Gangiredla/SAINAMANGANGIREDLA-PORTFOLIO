"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <nav className="w-full fixed top-0 z-50 bg-black/60 backdrop-blur-xl border-b border-gray-800">
      <div className="w-full px-6 md:px-10 lg:px-16 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="w-8 h-8 flex items-center justify-center rounded-md 
            bg-gradient-to-br from-blue-500 to-purple-500 text-white text-sm font-bold shadow-lg
            transition-all duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
            group-hover:scale-110 group-hover:brightness-110"
          >
            SN
          </div>

          <span
            className="font-semibold text-lg tracking-wide text-white
            transition-all duration-300
            group-hover:text-blue-400 group-hover:translate-x-[1px]"
          >
            Sai Naman Gangiredla
          </span>
        </Link>

        {/* LINKS */}
        <div className="flex gap-6 text-sm items-center">
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
                {/* TEXT */}
                <span
                  className={`transition-all duration-300 ${
                    isActive
                      ? "text-blue-400"
                      : "text-gray-400 group-hover:text-white"
                  }`}
                >
                  {link.name}
                </span>

                {/* UNDERLINE (improved motion) */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500
                  transition-all duration-300
                  [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
                  ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                />

                {/* ACTIVE GLOW */}
                {isActive && (
                  <span className="absolute inset-0 rounded-md bg-blue-500/10 blur-md -z-10" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
