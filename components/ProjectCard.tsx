"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { GitHubProject } from "@/types/github";

const languageColors: Record<string, string> = {
  JavaScript: "#f7df1e",
  TypeScript: "#3178c6",
  Python:     "#3572A5",
  Dart:       "#00B4AB",
  Java:       "#EA2D2E",
  HTML:       "#e34c26",
  CSS:        "#563d7c",
};

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: GitHubProject;
  index?: number;
}) {
  const { name, description, url, demo, language, topics, image, imageFallback } = project;
  const [imgSrc, setImgSrc] = useState(image);

  return (
    <motion.a
      href={demo || url}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl overflow-hidden flex flex-col hover:bg-slate-900/60 hover:border-rose-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-rose-600/5"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -6, scale: 1.01 }}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-slate-900 border-b border-slate-800">
        <img
          src={imgSrc}
          alt={name}
          onError={() => setImgSrc(imageFallback)}
          className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-500"
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col flex-1">
        {/* Top row */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-bold text-slate-100 group-hover:text-rose-600 transition-colors duration-300 font-mono capitalize">
            {name.replace(/-/g, " ")}
          </h3>
          <div className="flex gap-2 ml-3 shrink-0">
            {demo && (
              <span
                onClick={(e) => { e.preventDefault(); window.open(demo, "_blank"); }}
                className="w-7 h-7 flex items-center justify-center text-slate-500 hover:text-rose-500 transition-colors cursor-pointer"
                title="Ver demo"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </span>
            )}
            <span
              onClick={(e) => { e.preventDefault(); window.open(url, "_blank"); }}
              className="w-7 h-7 flex items-center justify-center text-slate-500 hover:text-rose-500 transition-colors cursor-pointer"
              title="Ver en GitHub"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.387.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
          {description}
        </p>

        {/* Topics */}
        <div className="flex flex-wrap gap-2 mb-4">
          {topics.slice(0, 4).map((topic) => (
            <span
              key={topic}
              className="px-3 py-1.5 bg-[#030712] border border-slate-800 text-slate-400 text-xs rounded-full font-mono hover:bg-rose-950/20 hover:text-rose-400 hover:border-rose-600/50 transition-all duration-300"
            >
              {topic}
            </span>
          ))}
        </div>

        {/* Language */}
        {language && (
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: languageColors[language] ?? "#64748b" }}
            />
            <span className="text-xs font-mono text-slate-500">{language}</span>
          </div>
        )}
      </div>
    </motion.a>
  );
}
