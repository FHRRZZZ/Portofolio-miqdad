import React from 'react';
import { ArrowDown, FileDown, MapPin, GraduationCap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-20 md:pt-28 md:pb-28 bg-gradient-to-b from-blue-50/70 via-slate-50 to-white dark:from-slate-900/80 dark:via-slate-950 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800 bg-grid-pattern transition-colors">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-xs border border-blue-200 dark:border-blue-900/60 text-blue-700 dark:text-blue-300 text-xs font-medium mb-6 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span>Terbuka untuk Magang & Junior Web Developer</span>
        </div>

        {/* Natural Headline */}
        <div className="max-w-3xl space-y-5">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Halo, saya <span className="text-blue-600 dark:text-blue-400">{personalInfo.name}</span>.
          </h1>
          
          <p className="text-xl sm:text-2xl font-medium text-slate-700 dark:text-slate-300">
            {personalInfo.tagline}
          </p>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal pt-1">
            Mahasiswa Teknik Informatika di <strong className="text-slate-800 dark:text-slate-200 font-semibold">Universitas Pamulang (Semester 5)</strong>. Berfokus pada pengembangan aplikasi web modern dengan React, Laravel, dan Node.js, serta merancang antarmuka pengguna yang fungsional dan nyaman digunakan dengan Figma.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#proyek"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg transition-colors shadow-sm"
          >
            <span>Lihat Proyek</span>
            <ArrowDown size={16} />
          </a>

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium text-sm rounded-lg transition-colors shadow-xs"
          >
            <FileDown size={16} className="text-slate-500 dark:text-slate-400" />
            <span>Lihat / Unduh CV</span>
          </a>
        </div>

        {/* Fact Cards with depth */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xs p-4 rounded-xl border border-slate-200/70 dark:border-slate-800 shadow-xs">
            <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Status</div>
            <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              Smt. 5 Teknik Informatika
            </div>
          </div>

          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xs p-4 rounded-xl border border-slate-200/70 dark:border-slate-800 shadow-xs">
            <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Kampus</div>
            <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              Universitas Pamulang
            </div>
          </div>

          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xs p-4 rounded-xl border border-slate-200/70 dark:border-slate-800 shadow-xs">
            <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Lokasi</div>
            <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              Tangerang Selatan
            </div>
          </div>

          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xs p-4 rounded-xl border border-slate-200/70 dark:border-slate-800 shadow-xs">
            <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Target Peran</div>
            <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              Junior Web Dev / UI/UX
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
