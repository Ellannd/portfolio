
export interface GitHubProject {
  id: number;
  name: string;
  description: string;
  url: string;
  demo: string | null;
  language: string | null;
  topics: string[];
  stars: number;
  updatedAt: string;
  image: string;
  imageFallback: string;
}
