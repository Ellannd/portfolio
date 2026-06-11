import HomeClient from "@/components/HomeClient";
import ProjectsSection from "@/components/ProjectsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arnaldo Ramos - Full Stack Developer",
  verification: {
    google: "y2EV9rD5tJCphxqknEHiynyST6UH-f93P9zrCy5m-n0",
  },
};

export default function Page() {
  return <HomeClient projectsSection={<ProjectsSection />} />;
}
