import { GitHubUser, GitHubRepo } from '../types';

const BASE_URL = 'https://api.github.com/users/Vitu26';

export const fetchGitHubProfile = async (): Promise<GitHubUser> => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch profile');
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching GitHub profile:", error);
    // Return a fallback mock if API fails (rate limits, etc)
    return {
      login: 'Vitu26',
      avatar_url: 'https://github.com/Vitu26.png',
      html_url: 'https://github.com/Vitu26',
      name: 'Victor Loic Lemos',
      bio: 'Desenvolvedor Full Stack apaixonado por tecnologia e inovação.',
      location: 'Brasil',
      public_repos: 0,
      followers: 0,
      following: 0
    };
  }
};

export const fetchGitHubRepos = async (): Promise<GitHubRepo[]> => {
  try {
    const response = await fetch(`${BASE_URL}/repos?sort=updated&per_page=12`);
    if (!response.ok) {
      throw new Error('Failed to fetch repos');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
};