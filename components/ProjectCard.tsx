import React from 'react';
import { Star, GitFork, ExternalLink, Github } from 'lucide-react';
import { GitHubRepo } from '../types';

interface ProjectCardProps {
  repo: GitHubRepo;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ repo }) => {
  return (
    <div className="bg-surface rounded-xl p-6 border border-slate-700 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 flex flex-col h-full group">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-slate-900 rounded-lg group-hover:bg-primary/20 group-hover:text-primary transition-colors">
            <FolderOpenIcon />
        </div>
        <div className="flex gap-2">
            <a 
                href={repo.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                title="View Code"
            >
                <Github size={18} />
            </a>
            {repo.homepage && (
                <a 
                    href={repo.homepage} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                    title="Live Demo"
                >
                    <ExternalLink size={18} />
                </a>
            )}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-primary transition-colors line-clamp-1">
        {repo.name.replace(/-/g, ' ')}
      </h3>
      
      <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">
        {repo.description || "Nenhuma descrição fornecida para este projeto incrível."}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {repo.language && (
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-slate-700 text-secondary">
                {repo.language}
            </span>
        )}
        {repo.topics.slice(0, 2).map(topic => (
            <span key={topic} className="px-2 py-1 text-xs font-medium rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                {topic}
            </span>
        ))}
      </div>

      <div className="flex items-center gap-4 text-xs text-slate-500 mt-auto pt-4 border-t border-slate-700">
        <span className="flex items-center gap-1">
          <Star size={14} className="text-yellow-500" />
          {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <GitFork size={14} />
          {0} {/* API doesn't always give forks easily in this summary view without extra fetch, defaulting 0 or hidden */}
        </span>
        <span className="ml-auto">
            {new Date(repo.updated_at).toLocaleDateString('pt-BR')}
        </span>
      </div>
    </div>
  );
};

const FolderOpenIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-3.25 7a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2" />
    </svg>
)

export default ProjectCard;