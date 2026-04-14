"use client";

import { Inter } from 'next/font/google'
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { useEffect, useState } from 'react';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"]
});

// Typewriter Component
function Typewriter({ text, delay = 100 }: { text: string; delay?: number }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setIsDone(false);
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setIsDone(true);
      }
    }, delay);

    return () => clearInterval(timer);
  }, [text, delay]);

  return (
    <span className="font-mono">
      <span className="text-slate-100">{displayedText}</span>
      {!isDone && (
        <motion.span
          className="inline-block w-[2px] h-[1.25em] bg-teal-400 ml-1 align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        />
      )}
    </span>
  );
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "ChronosQuest",
    description: "A time management app that helps users track and optimize their daily schedules with AI insights.",
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
    image: "/next.svg",
    link: "#",
  },
  {
    title: "Masterpiece Pixel",
    description: "Pixel art editor with real-time collaboration features for digital artists.",
    technologies: ["React", "Socket.io", "Canvas API"],
    image: "/vercel.svg",
    link: "#",
  },
  {
    title: "FocusFlow",
    description: "Productivity tool with pomodoro timer, task tracking, and focus analytics.",
    technologies: ["TypeScript", "Tailwind", "Zustand"],
    image: "/next.svg",
    link: "#",
  },
];

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [mouseX, mouseY]);

  // Spotlight follows cursor without smoothing for instant tracking

  return (
    <>
      {/* Spotlight Background - Follows cursor */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{ background: useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.15), transparent 50%)` }}
      />

      <main className={`${inter.variable} font-sans relative z-10 w-full min-h-screen bg-[#0f172a] text-slate-400 antialiased overflow-x-hidden`}>
        <div className="max-w-7xl mx-auto px-6 py-8 lg:py-16 flex lg:flex-row gap-0 lg:gap-8 min-h-screen lg:min-h-0">
          {/* Hero / Sidebar */}
          <header className="shrink-0 w-full lg:w-1/4 lg:flex-1 lg:sticky lg:top-8 self-start h-fit lg:pt-20 lg:max-w-md">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-teal-400 to-teal-500 bg-clip-text text-transparent leading-tight mb-4">
                  <Typewriter text="Arnaldo Ramos" delay={150} />
                </h1>
                <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                  Systems Engineering Student
                </p>
              </div>

              {/* Navigation */}
              <nav className="hidden lg:block space-y-3">
                <a href="#about" className="group flex items-center space-x-3 text-slate-400 hover:text-teal-400 transition-colors duration-300">
                  <span className="w-2 h-2 bg-slate-400 group-hover:bg-teal-400 rounded-full transition-colors flex-shrink-0" />
                  <span className="text-base font-medium">About</span>
                </a>
                <a href="#experience" className="group flex items-center space-x-3 text-slate-400 hover:text-teal-400 transition-colors duration-300">
                  <span className="w-2 h-2 bg-slate-400 group-hover:bg-teal-400 rounded-full transition-colors flex-shrink-0" />
                  <span className="text-base font-medium">Experience</span>
                </a>
                <a href="#projects" className="group flex items-center space-x-3 text-slate-400 hover:text-teal-400 transition-colors duration-300">
                  <span className="w-2 h-2 bg-slate-400 group-hover:bg-teal-400 rounded-full transition-colors flex-shrink-0" />
                  <span className="text-base font-medium">Projects</span>
                </a>
              </nav>

              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                <a href="#" className="w-10 h-10 border border-slate-400/30 rounded-lg flex items-center justify-center hover:border-teal-400 hover:text-teal-400 transition-all duration-300 group hover:scale-105">
                  <svg className="w-5 h-5 group-hover:-rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.92 5.01C18.72 4.42 18.16 4 17.5 4h-11c-.66 0-1.21.42-1.42 1.01L3 11v8c0 .55.45 1 1 1h1c.55 0 .99-.45 1-.99v-2c0-.55.45-1 1-1h10c.55 0 .99.45 1 1v2c0 .55.45.99 1 .99h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 12.99h10.29l-0.88-2.47H7.73l-.88 2.47zM13.12 16H7.88a.44.44 0 01-.44-.44c0-.24.2-.44.44-.44h5.24c.24 0 .44.2.44.44 0 .24-.2.44-.44.44zm4.36-5H6.52L5.5 8h13z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 border border-slate-400/30 rounded-lg flex items-center justify-center hover:border-teal-400 hover:text-teal-400 transition-all duration-300 group hover:scale-105">
                  <svg className="w-5 h-5 group-hover:-rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372 .823 1.102 .823 2.222v3.293c0 .319 .192 .694 .801 .576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </header>

          {/* Main Content */}
          <main className="w-full lg:w-3/4 lg:flex-1 lg:flex lg:flex-col space-y-24 lg:space-y-40 lg:ml-8">
            {/* About */}
            <section
              id="about"
              className="scroll-motion"
            >
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 mb-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                About Me
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl lg:text-2xl text-slate-400 leading-relaxed max-w-3xl"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              ><Typewriter text="As a Systems Engineering student, I am dedicated to building digital solutions that merge robust technical logic with seamless user experiences.
                My primary focus lies in web development, where I enjoy transforming complex ideas into functional, high-quality applications.
                I thrive at the intersection of problem-solving and clean design, always aiming to develop software that is as efficient as it is intuitive." delay={50} />
                
              </motion.p>
            </section>

            {/* Experience */}
            <section
              id="experience"
              className="scroll-motion"
            >
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 mb-16"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Experience
              </motion.h2>
              <div className="space-y-8 max-w-2xl">
                <motion.article
                  className="border-l-4 border-teal-400 pl-8 pb-8 hover:-translate-x-2 transition-transform duration-300"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h3 className="text-2xl font-semibold text-slate-100 mb-2 hover:text-teal-400 transition-colors duration-300">Student Developer</h3>
                  <p className="text-slate-400 text-sm font-medium mb-2">University Project | 2023 - Present</p>
                  <p className="text-slate-400 leading-relaxed">
                    Developing web applications and contributing to open source projects.
                  </p>
                </motion.article>
              </div>

              {/*second field*/}
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 mb-16"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
              </motion.h2>
              <div className="space-y-8 max-w-2xl">
                <motion.article
                  className="border-l-4 border-teal-400 pl-8 pb-8 hover:-translate-x-2 transition-transform duration-300"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h3 className="text-2xl font-semibold text-slate-100 mb-2 hover:text-teal-400 transition-colors duration-300">Student Developer</h3>
                  <p className="text-slate-400 text-sm font-medium mb-2">University Project | 2023 - Present</p>
                  <p className="text-slate-400 leading-relaxed">
                    Developing web applications and contributing to open source projects.
                  </p>
                </motion.article>
              </div>
            </section>

            {/* Projects */}
            <section
              id="projects"
              className="scroll-motion"
            >
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
                {projects.map((project, index) => (
                  <motion.a
                    key={project.title}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:bg-slate-900/90 hover:border-teal-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-400/10 block"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <div className="relative h-48 md:h-52 lg:h-56 rounded-xl overflow-hidden bg-slate-900/80 mb-6 group-hover:scale-105 transition-transform duration-500 border border-slate-700">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:brightness-125 transition-all duration-500"
                      />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-100 group-hover:text-teal-400 transition-colors duration-300 mb-4">
                      <Typewriter text={project.title} delay={80} />
                    </h3>
                    <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-4 py-2 bg-slate-900/80 border border-slate-700 text-slate-400 text-sm rounded-full font-medium hover:bg-teal-400/10 hover:text-teal-400 hover:border-teal-400/50 transition-all duration-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.a>
                ))}
              </div>
            </section>
          </main>
        </div>
      </main>
    </>
  );
}

