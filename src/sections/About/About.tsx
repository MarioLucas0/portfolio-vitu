import React from 'react';
import { GitHubUser } from '../../types';

interface AboutProps {
  user: GitHubUser | null;
}

const About: React.FC<AboutProps> = ({ user }) => {
  const technologies = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'Tailwind CSS', 'Git'];

  return (
    <section id="about" className="scroll-mt-20">
      <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
        <span className="text-secondary">01.</span> Sobre Mim
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
          <p>
            Olá! Meu nome é Victor e gosto de criar coisas que vivem na internet. 
            Meu interesse em desenvolvimento web começou quando decidi tentar editar temas personalizados no Tumblr — acontece que hackear HTML e CSS ensina muito!
          </p>
          <p>
            Hoje, tive o privilégio de trabalhar em diversos projetos.
            Meu foco principal atualmente é construir produtos acessíveis e inclusivos e experiências digitais.
          </p>
          <p>
            Aqui estão algumas tecnologias com as quais tenho trabalhado recentemente:
          </p>
          <ul className="grid grid-cols-2 gap-2 text-sm font-mono mt-4">
            {technologies.map(tech => (
              <li key={tech} className="flex items-center gap-2 text-slate-400">
                <span className="text-accent">▹</span> {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-secondary rounded-2xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
          <div className="relative rounded-2xl overflow-hidden bg-surface border border-slate-700 grayscale hover:grayscale-0 transition-all duration-300">
            <img 
              src={user?.avatar_url || 'https://picsum.photos/600/600'} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
