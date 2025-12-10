import React from 'react';
import { Mail, ChevronRight } from 'lucide-react';
import { GitHubUser } from '../../types';

interface HeroProps {
  user: GitHubUser | null;
  onNavigate: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ user, onNavigate }) => {
  return (
    <section id="home" className="min-h-[80vh] flex flex-col justify-center items-start pt-10">
      <div className="inline-block px-4 py-2 bg-surface border border-slate-700 rounded-full mb-6 animate-pulse">
        <span className="text-primary font-medium text-sm">✨ Disponível para novos projetos</span>
      </div>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
        Olá, eu sou <br />
        <span className="gradient-text">{user?.name || "Victor Loic"}</span>
      </h1>
      <p className="text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
        Desenvolvedor Full Stack especializado em construir experiências digitais excepcionais. 
        Atualmente focado em criar aplicações acessíveis e centradas no ser humano.
      </p>
      <div className="flex flex-wrap gap-4">
        <button 
          onClick={() => onNavigate('contact')} 
          className="px-8 py-4 bg-primary hover:bg-indigo-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 flex items-center gap-2"
        >
          Entre em contato <Mail size={20} />
        </button>
        <button 
          onClick={() => onNavigate('projects')} 
          className="px-8 py-4 bg-surface border border-slate-700 hover:border-slate-500 text-white font-bold rounded-xl transition-all flex items-center gap-2 group"
        >
          Ver Projetos <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
