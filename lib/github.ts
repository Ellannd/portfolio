import type { GitHubProject } from "@/types/github";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  updated_at: string;
}

export async function getPortfolioProjects(): Promise<GitHubProject[]> {
  const username = process.env.GITHUB_USERNAME || "Ellannd";

  const headers = {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  };

  const res = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
    {
      headers,
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`);
  }

  const repos: GitHubRepo[] = await res.json();

  return repos
    .filter((repo) => repo.topics && repo.topics.includes("portfolio"))
    .map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || "Sin descripción",
      url: repo.html_url,
      demo: repo.homepage || null,
      language: repo.language,
      topics: repo.topics.filter((t) => t !== "portfolio"),
      stars: repo.stargazers_count,
      updatedAt: repo.updated_at,
      // Intenta preview.png personalizada, fallback a Open Graph de GitHub
      image: `https://raw.githubusercontent.com/${username}/${repo.name}/main/preview.png`,
      imageFallback: `https://opengraph.githubassets.com/1/${username}/${repo.name}`,
    }));
}
