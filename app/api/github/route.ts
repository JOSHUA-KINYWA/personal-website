import { NextResponse } from 'next/server';

export async function GET() {
  const GITHUB_USERNAME = process.env.GITHUB_USERNAME || 'JOSHUA-KINYWA';
  
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub repos');
    }

    const repos = await response.json();
    
    // Map common GitHub languages to display names
    const languageMap: { [key: string]: string } = {
      'TypeScript': 'TypeScript',
      'JavaScript': 'JavaScript',
      'Python': 'Python',
      'HTML': 'HTML',
      'Jupyter Notebook': 'Jupyter Notebook',
      'CSS': 'CSS',
      'Java': 'Java',
      'C++': 'C++',
      'C#': 'C#',
      'Go': 'Go',
      'Rust': 'Rust',
      'PHP': 'PHP',
      'Ruby': 'Ruby',
      'Swift': 'Swift',
      'Kotlin': 'Kotlin',
    };
    
    const projects = repos
      .filter((repo: any) => !repo.fork && !repo.archived) // Filter out forks and archived repos
      .map((repo: any) => {
        const tech: string[] = [];
        if (repo.language) {
          tech.push(languageMap[repo.language] || repo.language);
        }
        // Add topics as tech if available
        if (repo.topics && repo.topics.length > 0) {
          repo.topics.slice(0, 3).forEach((topic: string) => {
            if (!tech.includes(topic) && tech.length < 4) {
              tech.push(topic);
            }
          });
        }
        
        // Format repository name: replace hyphens/underscores with spaces and capitalize
        const formatName = (name: string): string => {
          return name
            .replace(/-/g, ' ')
            .replace(/_/g, ' ')
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
        };
        
        return {
          name: formatName(repo.name),
          description: repo.description || 'No description available',
          tech: tech.length > 0 ? tech : ['Project'],
          github: repo.html_url,
          demo: repo.homepage || null,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          updated: repo.updated_at,
        };
      });

    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub repositories' },
      { status: 500 }
    );
  }
}

