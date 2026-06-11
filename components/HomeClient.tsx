"use client";

// components/HomeClient.tsx
// Todo lo que era page.tsx va aquí. Recibe ProjectsSection como prop (server component)

import { Inter } from "next/font/google";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

function Typewriter({ text, delay = 100 }: { text: string; delay?: number }) {
  const [displayedText, setDisplayedText] = useState("");
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
          className="inline-block w-0.5 h-[1.25em] bg-teal-400 ml-1 align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      )}
    </span>
  );
}

export default function HomeClient({
  projectsSection,
}: {
  projectsSection: React.ReactNode;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.15), transparent 50%)`,
        }}
      />
      <Head>
        <title>Arnaldo Ramos - Full Stack Developer</title>
        <meta
          name="google-site-verification"
          content="y2EV9rD5tJCphxqknEHiynyST6UH-f93P9zrCy5m-n0"
        />
      </Head>
      <main
        className={`${inter.variable} font-sans relative z-10 w-full min-h-screen bg-[#030712] text-slate-400 antialiased overflow-x-hidden`}
      >
        <div className="max-w-7xl mx-auto px-4 py-8 lg:py-16 flex flex-col lg:flex-row gap-8 min-h-screen lg:min-h-0">
          {/* Sidebar */}
          <header className="shrink-0 w-full lg:w-1/4 lg:flex-1 lg:sticky lg:top-8 self-start h-fit lg:pt-20 lg:max-w-md">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="mb-6 flex">
                  <div className="relative w-60 h-60 rounded-full overflow-hidden border-2 border-slate-700 hover:border-rose-600/60 ring-2 ring-transparent hover:ring-rose-600/20 transition-all duration-300">
                    <Image
                      src="/avatar.jpg"
                      alt="Arnaldo Ramos"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 leading-tight mb-3 sm:mb-4">
                  <Typewriter text="Arnaldo Ramos" delay={150} />
                  <span className="text-rose-600">_</span>
                </h1>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-mono">
                  Systems Engineering Student
                </p>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-mono">
                  Open National University, Venezuela.
                </p>
              </div>

              <nav className="hidden lg:block space-y-3">
                <a
                  href="#about"
                  className="group flex items-center space-x-3 text-slate-400 hover:text-rose-600 transition-colors duration-300"
                >
                  <span className="w-2 h-2 bg-slate-400 group-hover:bg-rose-600 rounded-full transition-colors shrink-0" />
                  <span className="text-base font-medium">About</span>
                </a>
                <a
                  href="#experience"
                  className="group flex items-center space-x-3 text-slate-400 hover:text-rose-600 transition-colors duration-300"
                >
                  <span className="w-2 h-2 bg-slate-400 group-hover:bg-rose-600 rounded-full transition-colors shrink-0" />
                  <span className="text-base font-medium">Experience</span>
                </a>
                <a
                  href="#projects"
                  className="group flex items-center space-x-3 text-slate-400 hover:text-rose-600 transition-colors duration-300"
                >
                  <span className="w-2 h-2 bg-slate-400 group-hover:bg-rose-600 rounded-full transition-colors shrink-0" />
                  <span className="text-base font-medium">Projects</span>
                </a>
              </nav>

              <div className="flex space-x-4 pt-4">
                <a
                  href="#"
                  className="w-10 h-10 border border-slate-400/30 rounded-lg flex items-center justify-center hover:border-rose-600 hover:text-rose-600 transition-all duration-300 group hover:scale-105"
                >
                  <svg
                    className="w-5 h-5 group-hover:-rotate-12 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.92 5.01C18.72 4.42 18.16 4 17.5 4h-11c-.66 0-1.21.42-1.42 1.01L3 11v8c0 .55.45 1 1 1h1c.55 0 .99-.45 1-.99v-2c0-.55.45-1 1-1h10c.55 0 .99.45 1 1v2c0 .55.45.99 1 .99h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 12.99h10.29l-0.88-2.47H7.73l-.88 2.47zM13.12 16H7.88a.44.44 0 01-.44-.44c0-.24.2-.44.44-.44h5.24c.24 0 .44.2.44.44 0 .24-.2.44-.44.44zm4.36-5H6.52L5.5 8h13z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/Ellannd"
                  className="w-10 h-10 border border-slate-400/30 rounded-lg flex items-center justify-center hover:border-rose-600 hover:text-rose-600 transition-all duration-300 group hover:scale-105"
                >
                  <svg
                    className="w-5 h-5 group-hover:-rotate-12 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>

              <div className="mt-12 space-y-6">
                <h4 className="text-sm font-mono text-rose-400/80 tracking-widest uppercase">
                  Core Technology Stack
                </h4>
                <div className="flex flex-wrap gap-8">
                  {[
                    {
                      src: "https://cdn.simpleicons.org/nextdotjs/white",
                      alt: "Next.js",
                      label: "NEXT.JS",
                    },
                    {
                      src: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
                      alt: "Tailwind CSS",
                      label: "TAILWIND",
                    },
                    {
                      src: "https://cdn.simpleicons.org/flutter/02569B",
                      alt: "Flutter",
                      label: "FLUTTER",
                    },
                    {
                      src: "https://cdn.simpleicons.org/django/092E20",
                      alt: "Django",
                      label: "DJANGO",
                    },
                    {
                      src: "https://cdn.simpleicons.org/python/3776AB",
                      alt: "Python",
                      label: "PYTHON",
                    },
                    {
                      src: "https://cdn.simpleicons.org/openjdk/EA2D2E",
                      alt: "Java",
                      label: "JAVA",
                    },
                    {
                      src: "https://cdn.simpleicons.org/bootstrap/7952B3",
                      alt: "Bootstrap",
                      label: "BOOTSTRAP",
                    },
                  ].map(({ src, alt, label }) => (
                    <div
                      key={label}
                      className="group flex flex-col items-center gap-3"
                    >
                      <div className="relative w-24 h-24 rounded-full bg-slate-900/50 border border-slate-800 flex items-center justify-center transition-all duration-500 group-hover:border-rose-600/50 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(225,29,72,0.3)] overflow-hidden">
                        <img
                          src={src}
                          alt={alt}
                          className="w-12 h-12 transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110"
                        />
                      </div>
                      <span className="text-xs font-mono text-slate-500 group-hover:text-rose-400 transition-colors tracking-tighter">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </header>

          {/* Main Content */}
          <main className="w-full lg:w-3/4 lg:flex-1 lg:flex lg:flex-col space-y-16 lg:space-y-40 mt-8 lg:mt-0">
            <section id="about" className="scroll-motion">
              <motion.h2
                className="text-2xl sm:text-3xl font-bold text-slate-100 mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                About Me
              </motion.h2>
              <motion.p
                className="text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed max-w-3xl"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Typewriter
                  text="As a Systems Engineering student, I am dedicated to building digital solutions that merge robust technical logic with seamless user experiences. My primary focus lies in Full Stack Development, where I enjoy transforming complex ideas into functional, high-quality applications. I thrive at the intersection of problem-solving and clean design, always aiming to develop software that is as efficient as it is intuitive."
                  delay={40}
                />
              </motion.p>
            </section>

            <section id="experience" className="scroll-motion">
              <motion.h2
                className="text-2xl sm:text-3xl font-bold text-slate-100 mb-8 sm:mb-12"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Experience
              </motion.h2>
              <div className="space-y-8 max-w-2xl">
                {[
                  {
                    title: "Student Developer",
                    company: "University Project | 2023 - Present",
                    description:
                      "Developing web applications while studying in College.",
                    delay: 0.1,
                  },
                  {
                    title: "Web Developer & Graphic Designer",
                    company: "GeneraERNC | 2022 - 2023",
                    description:
                      "Developed the corporate website using WordPress and managed databases for real-time product updates. Responsible for brand identity design and digital marketing campaigns.",
                    delay: 0.1,
                  },
                  {
                    title: "Administrative Developer",
                    company: 'Hotel "La Pichincha" | 2021 - 2022',
                    description:
                      "Engineered custom resource management software to optimize inventory and administrative workflows. Automated data entry processes and guest information management.",
                    delay: 0.2,
                  },
                ].map((exp) => (
                  <motion.article
                    key={exp.title}
                    className="border-l-4 border-rose-600 pl-8 pb-8 hover:-translate-x-2 transition-transform duration-300"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: exp.delay }}
                  >
                    <h3 className="text-2xl font-semibold text-slate-100 mb-2 hover:text-rose-600 transition-colors duration-300 font-mono">
                      {exp.title}
                    </h3>
                    <p className="text-slate-400 text-sm font-medium mb-2">
                      {exp.company}
                    </p>
                    <p className="text-slate-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </motion.article>
                ))}
              </div>
            </section>

            {/* ProjectsSection viene del Server Component — no rompe "use client" */}
            {projectsSection}
          </main>
        </div>
      </main>
    </>
  );
}
