import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const categories = ['Semua', 'Web', 'AI'];

  const filteredProjects = selectedCategory === 'Semua'
    ? projectsData
    : projectsData.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="proyek" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
              Portofolio
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Proyek yang Dikerjakan
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
              Daftar aplikasi web dan eksplorasi teknologi yang sedang atau telah saya bangun.
            </p>
          </div>

          {/* Clean Category Filter Tabs */}
          <div className="inline-flex p-1 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid with Rich Visual Layering */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const hasDemoUrl = Boolean(project.demoUrl && project.demoUrl.trim().length > 0);
            const hasRepoUrl = Boolean(project.repoUrl && project.repoUrl.trim().length > 0);

            return (
              <div
                key={project.id}
                className="bg-slate-50/70 dark:bg-slate-950 rounded-xl border border-slate-200/90 dark:border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-xs hover:shadow-md"
              >
                <div>
                  {/* Project Image */}
                  <div className="relative h-52 bg-slate-200 dark:bg-slate-800 overflow-hidden border-b border-slate-200 dark:border-slate-800">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-102"
                    />
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 right-3">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full backdrop-blur-xs border shadow-xs ${
                          project.status === 'In Development'
                            ? 'bg-white/95 text-amber-700 border-amber-300 dark:bg-slate-900/90 dark:text-amber-300 dark:border-amber-800'
                            : 'bg-white/95 text-slate-700 border-slate-300 dark:bg-slate-900/90 dark:text-slate-300 dark:border-slate-700'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            project.status === 'In Development'
                              ? 'bg-amber-500 animate-pulse'
                              : 'bg-slate-400'
                          }`}
                        />
                        {project.status}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 px-2.5 py-0.5 bg-slate-900/85 text-white text-[11px] font-medium rounded shadow-xs">
                      {project.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5 mb-3">
                      {project.subtitle}
                    </p>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {project.summary}
                    </p>

                    {/* Architecture / Role highlights */}
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 space-y-2 mb-4 shadow-2xs">
                      <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        Fitur & Alur Utama:
                      </div>
                      <div className="space-y-1.5">
                        {project.architecture.map((item, idx) => (
                          <div key={idx} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-1.5">
                            <span className="text-blue-600 font-bold shrink-0">•</span>
                            <span>
                              <strong className="text-slate-800 dark:text-slate-200 font-medium">{item.label}:</strong> {item.desc}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs rounded-md font-medium border border-slate-200 dark:border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="p-6 pt-0 border-t border-slate-200/80 dark:border-slate-800 mt-2 flex flex-wrap items-center gap-3">
                  {/* CRITICAL: Tombol demo TIDAK ditampilkan jika demoUrl kosong */}
                  {hasDemoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
                    >
                      <span>Lihat Demo</span>
                      <ExternalLink size={13} />
                    </a>
                  )}

                  {hasRepoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold rounded-lg transition-colors shadow-xs"
                    >
                      <GithubIcon size={14} />
                      <span>Kode Sumber</span>
                    </a>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
