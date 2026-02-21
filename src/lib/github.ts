export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }

    const repos: GitHubRepo[] = await response.json();
    return repos;
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}

export function getLanguageColor(language: string | null): string {
  const colors: Record<string, string> = {
    TypeScript: '#3178c6',
    JavaScript: '#f7df1e',
    Python: '#3776ab',
    'C#': '#239120',
    Java: '#b07219',
    HTML: '#e34c26',
    CSS: '#1572b6',
    Dart: '#0175c2',
    Kotlin: '#a97bff',
    Swift: '#f05138',
    Go: '#00add8',
    Rust: '#dea584',
    PHP: '#4f5d95',
    Ruby: '#701516',
    null: '#64748b',
  };

  return colors[language ?? 'null'] || '#64748b';
}
