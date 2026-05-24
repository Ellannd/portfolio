# Portfolio — Arnaldo Ramos

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

A modern, high-performance personal portfolio built with **Next.js 16** and **React 19**. It showcases engineering projects, professional experience, and technical skills — inspired by [Brittany Chiang's portfolio](https://brittanychiang.com/).

---

## Table of Contents

1. [About](#about)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Getting Started](#getting-started)
6. [Environment Variables](#environment-variables)
7. [Scripts](#scripts)
8. [Deployment](#deployment)

---

## About

This is my personal portfolio website as a **Systems Engineering student** at the Universidad Nacional Abierta, Venezuela.

The site features a clean, dark-themed UI with scroll-driven animations and dynamic cursor-reactive effects. Featured projects are fetched dynamically from GitHub using the **GitHub REST API**, filtering repositories tagged with `portfolio`. The architecture cleanly separates Server Components (data fetching) from Client Components (interactive UI).

---

## Features

### Dynamic Spotlight
A radial gradient that follows the mouse cursor in real-time, powered by Framer Motion's `useMotionValue` — gives the page a subtle, polished depth.

### Typewriter Effect
Text sections render with a console-style typing animation and a blinking cursor that auto-hides once the sequence completes — used for the hero name and the about-me paragraph.

### Server-Side Project Rendering
GitHub repositories are fetched server-side with a **1-hour revalidation cache**, keeping the page statically rendered at the edge while staying fresh.

### Responsive Design
A **two-column layout** on desktop (sticky sidebar + content area) that gracefully collapses into a single stacked column on mobile — tested across viewport sizes.

### Project Cards
Each project renders a card with:
- Auto-fetched screenshot image (with Open Graph fallback)
- Description, language badge (with color), and topic tags
- Animated hover effects (lift + scale + border glow)

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) — App Router |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Font** | [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts) |
| **Package Manager** | [pnpm](https://pnpm.io/) |
| **Linting** | ESLint 9 (Next.js config) |

---

## Project Structure

```
portafolio/
├── app/
│   ├── layout.tsx          # Root layout & metadata
│   ├── page.tsx            # Home page (Client Component shell)
│   └── globals.css         # Global styles & Tailwind imports
├── components/
│   ├── HomeClient.tsx      # Client shell — spotlight, typewriter, sidebar, experience
│   ├── ProjectsSection.tsx # Server Component — fetches GitHub projects
│   └── ProjectsPreview.tsx # Client Component — renders project cards
├── lib/
│   └── github.ts           # GitHub API integration & project filtering
├── types/
│   └── github.ts           # TypeScript interfaces for GitHub data
├── public/                 # Static assets (avatar, images)
├── .env                    # Environment variables (not committed)
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- **Node.js** 20+
- **pnpm** (recommended) or npm / yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Ellannd/portafolio.git
cd portafolio

# 2. Install dependencies
pnpm install

# 3. Set up environment variables (see section below)

# 4. Start the development server
pnpm dev
```

The app will be available at **[http://localhost:3000](http://localhost:3000)**.

---

## Environment Variables

Create a `.env` file at the root of the project. A GitHub personal access token is required to authenticate with the GitHub API.

```bash
GITHUB_USERNAME=your-github-username
GITHUB_TOKEN=ghp_your_personal_access_token
```

> **Note:** The `GITHUB_TOKEN` must have at least `public_repo` read scope so the API can fetch repository data.

---

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the Next.js development server with hot reload |
| `pnpm build` | Build a production-optimised bundle |
| `pnpm start` | Start a production server (after `build`) |
| `pnpm lint` | Run the ESLint linter across the codebase |

---

## Deployment

The project is optimized for **Vercel** — zero-config deployment is supported.

1. Push the repository to **GitHub**
2. Import the project into **[Vercel](https://vercel.com)**
3. Add the `GITHUB_USERNAME` and `GITHUB_TOKEN` environment variables in the Vercel dashboard
4. Deploy

---

> Built by **Arnaldo Ramos** · [github.com/Ellannd](https://github.com/Ellannd)
