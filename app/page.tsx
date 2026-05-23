import HomeClient from "@/components/HomeClient";
import ProjectsSection from "@/components/ProjectsSection";

export default function Page() {
  return <HomeClient projectsSection={<ProjectsSection />} />;
}
