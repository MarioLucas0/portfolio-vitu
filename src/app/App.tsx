import React, { useState, useEffect } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Hero from '../sections/Hero/Hero';
import About from '../sections/About/About';
import Skills from '../sections/Skills/Skills';
import Projects from '../sections/Projects/Projects';
import Contact from '../sections/Contact/Contact';
import { fetchGitHubProfile, fetchGitHubRepos } from '../services/githubService';
import { GitHubUser, GitHubRepo } from '../types';

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
          <Hero user={user} onNavigate={scrollToSection} />
          <About user={user} />
          <Skills />
          <Projects repos={repos} loading={loading} />
          <Contact />
        </div>

        {/* Footer simple on mobile */}
        <footer className="md:hidden py-6 text-center text-slate-500 text-xs">
          <p>© 2024 Victor Loic Lemos</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
