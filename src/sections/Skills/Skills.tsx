import React from 'react';
import { Layout, Database, Smartphone, Code2 } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    {
      icon: <Layout size={32} className="text-primary" />,
      title: "Front-end",
      description: "Criação de interfaces modernas e responsivas utilizando React, Next.js e Tailwind."
    },
    {
      icon: <Database size={32} className="text-secondary" />,
      title: "Back-end",
      description: "Desenvolvimento de APIs robustas e escaláveis com Node.js, Express e bancos de dados SQL/NoSQL."
    },
    {
      icon: <Smartphone size={32} className="text-accent" />,
      title: "Mobile",
      description: "Desenvolvimento de aplicações móveis multiplataforma com React Native."
    },
    {
      icon: <Code2 size={32} className="text-green-400" />,
      title: "DevOps",
      description: "Configuração de pipelines CI/CD, Docker e deploy em nuvem (AWS/Vercel)."
    }
  ];

  return (
    <section id="skills" className="scroll-mt-20">
      <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
        <span className="text-secondary">02.</span> O que eu faço
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={index} icon={skill.icon} title={skill.title} description={skill.description} />
        ))}
      </div>
    </section>
  );
};

const SkillCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="p-6 bg-surface rounded-xl border border-slate-700 hover:border-primary/50 transition-colors group">
    <div className="mb-4 p-3 bg-slate-900 rounded-lg w-fit group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-slate-400 text-sm">{description}</p>
  </div>
);

export default Skills;
