import React from 'react';
import { Mail, ExternalLink, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
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
  );
};

export default Contact;
