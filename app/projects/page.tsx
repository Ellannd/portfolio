// app/projects/page.tsx
// Página completa de proyectos — misma estética que page.tsx

import { getPortfolioProjects } from "@/lib/github";
import ProjectCard from "@/components/ProjectCard";

export const revalidate = 3600;

export default async function ProjectsPage() {
  let projects: Awaited<ReturnType<typeof getPortfolioProjects>> = [];
  let error: string | null = null;

  try {
    projects = await getPortfolioProjects();
  } catch (e) {
    error = (e as Error).message;
  }

  return (
    <main className="font-sans relative z-10 w-full min-h-screen bg-[#030712] text-slate-400 antialiased overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4 py-16 lg:py-24">

        {/* Header */}
        <div className="mb-16">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-slate-500 font-mono text-sm hover:text-rose-400 transition-colors duration-200 mb-10 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to home
          </a>

          <p className="text-xs font-mono text-rose-400/80 tracking-widest uppercase mb-4">
            All Projects
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 leading-tight">
            Things I&apos;ve built
          </h1>
          <p className="mt-4 text-slate-400 text-base leading-relaxed max-w-xl">
            A collection of personal and academic projects.
          </p>
        </div>

        {/* Error state */}
        {error && (
          <div className="border border-rose-600/30 bg-rose-950/10 rounded-xl px-6 py-4 text-rose-400 font-mono text-sm mb-8">
            Error loading projects: {error}
          </div>
        )}

        {/* Empty state */}
        {projects.length === 0 && !error && (
          <div className="border border-slate-800 rounded-xl px-6 py-12 text-center text-slate-500 font-mono text-sm">
            No projects found. Add the &quot;portfolio&quot; topic to your GitHub repos.
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
