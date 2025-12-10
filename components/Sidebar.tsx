import React, { useState } from 'react';
import { Home, User, Code, FolderOpen, Mail, Github, Linkedin, Menu, X } from 'lucide-react';
import { GitHubUser } from '../types';

interface SidebarProps {
  user: GitHubUser | null;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ user, activeSection, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  const menuItems = [
    { id: 'home', label: 'Início', icon: <Home size={20} /> },
    { id: 'about', label: 'Sobre', icon: <User size={20} /> },
    { id: 'skills', label: 'Habilidades', icon: <Code size={20} /> },
    { id: 'projects', label: 'Projetos', icon: <FolderOpen size={20} /> },
    { id: 'contact', label: 'Contato', icon: <Mail size={20} /> },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 w-full h-16 bg-surface/95 backdrop-blur-md border-b border-slate-700 z-40 flex items-center justify-between px-6 shadow-md">
          <span className="font-bold text-lg text-slate-100 truncate max-w-[200px]">
            {user?.name || 'Victor Loic'}
          </span>
          <button 
            onClick={() => setIsOpen(true)}
            className="p-2 text-slate-100 hover:bg-slate-700/50 rounded-lg transition-colors"
            aria-label="Abrir Menu"
          >
            <Menu size={24} />
          </button>
      </div>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed md:sticky top-0 left-0 z-50
        w-full md:w-72 h-screen
        bg-surface border-r border-slate-700
        flex flex-col
        transform transition-transform duration-300 cubic-bezier(0.4, 0, 0.2, 1)
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        shadow-2xl md:shadow-none
      `}>
        {/* Close Button (Mobile Only) */}
        <button 
            onClick={() => setIsOpen(false)}
            className="md:hidden absolute top-4 right-4 z-50 p-2 text-slate-400 hover:text-white bg-slate-800/80 rounded-full transition-colors"
            aria-label="Fechar Menu"
        >
            <X size={24} />
        </button>

        {/* Profile Header */}
        <div className="p-8 flex flex-col items-center text-center border-b border-slate-700 bg-slate-800/50">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary shadow-lg mb-4 ring-2 ring-secondary/50">
            <img 
              src={user?.avatar_url || 'https://picsum.photos/200'} 
              alt={user?.name || 'Victor'} 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-xl font-bold text-white mb-1">{user?.name || 'Victor Loic Lemos'}</h1>
          <p className="text-sm text-slate-400 bg-slate-900/50 px-3 py-1 rounded-full">{user?.login ? `@${user.login}` : 'Desenvolvedor'}</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-4 overflow-y-auto">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavigate(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group
                    ${activeSection === item.id 
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md shadow-primary/20' 
                      : 'text-slate-400 hover:bg-slate-700/50 hover:text-white'
                    }`}
                >
                  <span className={`${activeSection === item.id ? 'scale-110' : 'group-hover:scale-110'} transition-transform`}>
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Footer */}
        <div className="p-6 border-t border-slate-700 bg-slate-800/30 mt-auto">
          <div className="flex justify-center gap-4">
            <a 
              href={user?.html_url || "https://github.com/Vitu26"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600 text-slate-300 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/victor-loic-lemos/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-slate-700 rounded-lg hover:bg-blue-600/20 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
          <p className="text-xs text-slate-500 text-center mt-4">
            © {new Date().getFullYear()} Victor Lemos
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;