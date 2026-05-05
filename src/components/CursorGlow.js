"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-40"
      style={{
        transform: `translate(${position.x - 200}px, ${position.y - 200}px)`,
      }}
    >
      <div className="w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl"></div>
    </div>
  );
}
