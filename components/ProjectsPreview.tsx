"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import type { GitHubProject } from "@/types/github";

function PreviewCard({ project, index }: { project: GitHubProject; index: number }) {
  const { name, description, url, demo, language, topics, image, imageFallback } = project;
  const [imgSrc, setImgSrc] = useState(image);

  const languageColors: Record<string, string> = {
    JavaScript: "#f7df1e", TypeScript: "#3178c6", Python: "#3572A5",
    Dart: "#00B4AB", Java: "#EA2D2E", HTML: "#e34c26", CSS: "#563d7c",
  };

  return (
    <motion.a
      href={demo || url}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl overflow-hidden flex flex-col hover:bg-slate-900/60 hover:border-rose-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-rose-600/5"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Image */}
      <div className="relative h-48 md:h-52 overflow-hidden bg-slate-900 border-b border-slate-800">
        <img
          src={imgSrc}
          alt={name}
          onError={() => setImgSrc(imageFallback)}
          className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-125 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-slate-100 group-hover:text-rose-600 transition-colors duration-300 font-mono capitalize">
            {name.replace(/-/g, " ")}
          </h3>
          <div className="flex gap-2 ml-3 shrink-0">
            {demo && (
              <span
                onClick={(e) => { e.preventDefault(); window.open(demo, "_blank"); }}
                className="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-rose-500 transition-colors cursor-pointer"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </span>
            )}
            <span
              onClick={(e) => { e.preventDefault(); window.open(url, "_blank"); }}
              className="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-rose-500 transition-colors cursor-pointer"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </span>
          </div>
        </div>

        <p className="text-slate-400 text-base leading-relaxed mb-6 flex-1">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {topics.slice(0, 4).map((topic) => (
            <span key={topic} className="px-4 py-2 bg-[#030712] border border-slate-800 text-slate-400 text-sm rounded-full font-mono hover:bg-rose-950/20 hover:text-rose-400 hover:border-rose-600/50 transition-all duration-300">
              {topic}
            </span>
          ))}
        </div>

        {language && (
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: languageColors[language] ?? "#64748b" }} />
            <span className="text-xs font-mono text-slate-500">{language}</span>
          </div>
        )}
      </div>
    </motion.a>
  );
}

interface ProjectsPreviewProps {
  projects: GitHubProject[];
}

export default function ProjectsPreview({ projects }: ProjectsPreviewProps) {
  const featured = projects.slice(0, 3);

  return (
    <section id="projects" className="scroll-motion">
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 mb-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {featured.map((project, index) => (
          <PreviewCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link
          href="/projects"
          className="group flex items-center gap-3 px-8 py-4 border border-slate-700 rounded-xl text-slate-400 font-mono text-sm hover:border-rose-600/60 hover:text-rose-400 hover:bg-rose-950/10 transition-all duration-300"
        >
          View all projects
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </motion.div>
    </section>
  );
}
