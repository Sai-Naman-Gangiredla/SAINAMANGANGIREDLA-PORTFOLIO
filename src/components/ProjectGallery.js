"use client";

import { useState } from "react";

export default function ProjectGallery({ project }) {
  const images = [project.images.preview, ...(project.images.gallery || [])];

  const [active, setActive] = useState(images[0]);

  return (
    <div className="space-y-6">
      {/* MAIN IMAGE */}
      <div className="relative group rounded-xl overflow-hidden border border-gray-800">
        <img
          src={active}
          alt="project preview"
          className="w-full h-auto transition duration-500 ease-in-out group-hover:scale-105"
        />

        {/* subtle glow overlay */}
        <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition duration-500" />
      </div>

      {/* THUMBNAILS */}
      <div className="flex gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(img)}
            className={`relative rounded-lg overflow-hidden border transition duration-300 ${
              active === img
                ? "border-blue-500 scale-105"
                : "border-gray-700 hover:border-blue-400"
            }`}
          >
            <img src={img} alt="thumb" className="w-28 h-20 object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
