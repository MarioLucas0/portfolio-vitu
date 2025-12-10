import React from 'react';
import ProjectCard from '../../components/ui/ProjectCard';
import { GitHubRepo } from '../../types';

interface ProjectsProps {
  repos: GitHubRepo[];
  loading: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ repos, loading }) => {
  return (
    <section id="projects" className="scroll-mt-20">
      <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
        <span className="text-secondary">03.</span> Projetos
      </h2>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="h-64 bg-surface rounded-xl animate-pulse border border-slate-800"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <ProjectCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
      <div className="mt-12 text-center">
        <a 
          href="https://github.com/Vitu26" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border border-primary text-primary hover:bg-primary/10 transition-colors font-semibold"
        >
          Ver todos no GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
