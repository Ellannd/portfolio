// app/page.tsx — cambios necesarios para integrar ProjectsPreview
// Solo muestra las partes relevantes, no reemplaces todo el archivo

// 1. Convierte el componente a async y elimina el array projects hardcodeado
// Cambia: "use client"  →  queda al inicio (mantén el client por el mouse tracking)
// PERO getPortfolioProjects necesita correr en el servidor.
// Solución: extrae ProjectsPreview a su propio Server Component wrapper.

// Crea este archivo: components/ProjectsSection.tsx
// ---------------------------------------------------
// (Este es el archivo que importas en page.tsx en lugar del bloque de projects)

import { getPortfolioProjects } from "@/lib/github";
import ProjectsPreview from "@/components/ProjectsPreview";

export default async function ProjectsSection() {
  let projects: Awaited<ReturnType<typeof getPortfolioProjects>> = [];

  try {
    projects = await getPortfolioProjects();
  } catch {
    projects = [];
  }

  return <ProjectsPreview projects={projects} />;
}

// ---------------------------------------------------
// Luego en app/page.tsx, dentro del <main>, reemplaza
// la sección <section id="projects"> entera por:
//
//   import ProjectsSection from "@/components/ProjectsSection";
//   ...
//   <ProjectsSection />
//
// Así page.tsx sigue siendo "use client" (necesario para
// el mouse tracking y Framer Motion), y el fetch de GitHub
// ocurre en el Server Component ProjectsSection.
