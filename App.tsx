import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ProjectCard from './components/ProjectCard';
import { fetchGitHubProfile, fetchGitHubRepos } from './services/githubService';
import { GitHubUser, GitHubRepo } from './types';
import { Mail, MapPin, ExternalLink, Download, ChevronRight, Code2, Database, Layout, Smartphone } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const [userData, reposData] = await Promise.all([
        fetchGitHubProfile(),
        fetchGitHubRepos()
      ]);
      setUser(userData);
      setRepos(reposData);
      setLoading(false);
    };
    loadData();
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Intersection Observer to update active link on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Navigation */}
      <Sidebar user={user} activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Content */}
      <main className="flex-1 bg-background relative">
          
        {/* Background decorative elements */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-[10%] left-[20%] w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[80px]" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 px-6 md:px-12 lg:px-20 py-20 md:py-12 max-w-6xl mx-auto space-y-24">
            
            {/* HERO SECTION */}
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
                    <button onClick={() => scrollToSection('contact')} className="px-8 py-4 bg-primary hover:bg-indigo-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 flex items-center gap-2">
                        Entre em contato <Mail size={20} />
                    </button>
                    <button onClick={() => scrollToSection('projects')} className="px-8 py-4 bg-surface border border-slate-700 hover:border-slate-500 text-white font-bold rounded-xl transition-all flex items-center gap-2 group">
                        Ver Projetos <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </section>

            {/* ABOUT SECTION */}
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
                            {['JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'Tailwind CSS', 'Git'].map(tech => (
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

             {/* SKILLS SECTION */}
             <section id="skills" className="scroll-mt-20">
                <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
                    <span className="text-secondary">02.</span> O que eu faço
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <SkillCard 
                        icon={<Layout size={32} className="text-primary" />}
                        title="Front-end"
                        description="Criação de interfaces modernas e responsivas utilizando React, Next.js e Tailwind."
                    />
                    <SkillCard 
                        icon={<Database size={32} className="text-secondary" />}
                        title="Back-end"
                        description="Desenvolvimento de APIs robustas e escaláveis com Node.js, Express e bancos de dados SQL/NoSQL."
                    />
                    <SkillCard 
                        icon={<Smartphone size={32} className="text-accent" />}
                        title="Mobile"
                        description="Desenvolvimento de aplicações móveis multiplataforma com React Native."
                    />
                    <SkillCard 
                        icon={<Code2 size={32} className="text-green-400" />}
                        title="DevOps"
                        description="Configuração de pipelines CI/CD, Docker e deploy em nuvem (AWS/Vercel)."
                    />
                </div>
            </section>

            {/* PROJECTS SECTION */}
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

            {/* CONTACT SECTION */}
            <section id="contact" className="scroll-mt-20 pb-20">
                <div className="bg-surface rounded-3xl p-8 md:p-12 border border-slate-700 text-center max-w-3xl mx-auto shadow-2xl">
                     <h2 className="text-secondary font-mono mb-4">04. O que vem agora?</h2>
                     <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Vamos conversar</h3>
                     <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                        Estou sempre aberto a novas oportunidades, parcerias ou apenas para dar um oi. 
                        Minha caixa de entrada está sempre aberta!
                     </p>
                     <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
                        <a 
                            href="mailto:victorloiclemos@gmail.com"
                            className="px-8 py-4 bg-primary hover:bg-indigo-600 text-white font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                        >
                            <Mail size={20} /> Enviar E-mail
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/victor-loic-lemos/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all border border-slate-600 flex items-center justify-center gap-2"
                        >
                           <ExternalLink size={20} /> LinkedIn
                        </a>
                     </div>
                     
                     <div className="flex flex-col items-center gap-2 text-slate-500 text-sm">
                        <div className="flex items-center gap-2">
                             <MapPin size={16} />
                             <span>Brasil</span>
                        </div>
                     </div>
                </div>
            </section>
        </div>

        {/* Footer simple on mobile */}
        <footer className="md:hidden py-6 text-center text-slate-500 text-xs">
            <p>© 2024 Victor Loic Lemos</p>
        </footer>
      </main>
    </div>
  );
};

// Helper Component for Skills
const SkillCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="p-6 bg-surface rounded-xl border border-slate-700 hover:border-primary/50 transition-colors group">
        <div className="mb-4 p-3 bg-slate-900 rounded-lg w-fit group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm">{description}</p>
    </div>
);

export default App;