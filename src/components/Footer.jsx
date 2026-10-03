import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import Logo from './Logo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-slate-950 text-slate-400 border-t border-slate-800/80 transition-colors">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-2.5">
          <Logo size={24} />
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-200 font-semibold">{personalInfo.name}</strong>. Universitas Pamulang — Teknik Informatika.
          </div>
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-blue-400 transition-colors"
        >
          <span>Kembali ke atas</span>
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
