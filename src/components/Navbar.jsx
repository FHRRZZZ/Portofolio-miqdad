import React, { useState } from 'react';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import Logo from './Logo';

export default function Navbar({ darkMode, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Tentang', href: '#tentang' },
    { label: 'Keahlian', href: '#keahlian' },
    { label: 'Proyek', href: '#proyek' },
    { label: 'Pendidikan', href: '#pendidikan' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Name / Brand with Custom Logo */}
        <a
          href="#"
          className="group flex items-center gap-3 outline-none focus:outline-none focus-visible:outline-none ring-0 select-none py-1"
        >
          <Logo size={36} />
          <div>
            <div className="text-base font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
              {personalInfo.name}<span className="text-blue-600">.</span>
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-normal">
              Web Developer & UI/UX
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-4 w-px bg-slate-200 dark:bg-slate-700" />

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Ganti mode tampilan"
            className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Hubungi CTA */}
          <a
            href="#kontak"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-xs"
          >
            <span>Hubungi Saya</span>
            <ArrowRight size={14} />
          </a>
        </nav>

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4">
          <ul className="flex flex-col gap-3 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 text-slate-700 dark:text-slate-200 hover:text-blue-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#kontak"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700"
              >
                <span>Hubungi Saya</span>
                <ArrowRight size={14} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
