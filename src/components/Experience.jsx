import React, { useState } from 'react';
import { Calendar, CheckCircle, Award, Briefcase, GraduationCap, Users } from 'lucide-react';
import { timelineData } from '../data/portfolioData';

export default function Experience() {
  const [selectedFilter, setSelectedFilter] = useState('Semua');

  const filterOptions = ['Semua', 'Pendidikan', 'Kompetisi', 'Organisasi'];

  const filteredItems = selectedFilter === 'Semua'
    ? timelineData
    : timelineData.filter((item) => item.category === selectedFilter);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Pendidikan':
        return <GraduationCap size={14} className="text-blue-600 dark:text-blue-400" />;
      case 'Kompetisi':
        return <Award size={14} className="text-amber-600 dark:text-amber-400" />;
      case 'Organisasi':
      case 'Kepemimpinan':
        return <Users size={14} className="text-indigo-600 dark:text-indigo-400" />;
      default:
        return <Briefcase size={14} className="text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section id="pendidikan" className="py-20 bg-slate-50/70 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
              Rekam Jejak
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Pendidikan, Organisasi & Kompetisi
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
              Riwayat studi formal, keaktifan organisasi mahasiswa, dan partisipasi ajang kompetisi web.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="inline-flex p-1 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-2xs">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  selectedFilter === filter
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 md:ml-6 pl-6 md:pl-8 space-y-8">
          {filteredItems.map((item, index) => (
            <div key={index} className="relative">
              {/* Bullet Node with Dynamic Icon Tint */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-blue-600 border-4 border-slate-50 dark:border-slate-950 shadow-xs" />

              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                
                {/* Meta details & Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                      <Calendar size={13} />
                      <span>{item.period}</span>
                    </span>

                    <span className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-medium">
                      {getTypeIcon(item.type)}
                      <span>{item.type}</span>
                    </span>
                  </div>

                  {/* Certificate Badge — jadi link jika ada file */}
                  {item.hasCertificate && (
                    item.certificateUrl ? (
                      <a
                        href={item.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 px-2.5 py-0.5 rounded-full hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-colors"
                      >
                        <Award size={13} />
                        <span>{item.certificateLabel || 'Lihat Sertifikat'}</span>
                        <span className="text-[10px] opacity-70">↗</span>
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 px-2.5 py-0.5 rounded-full">
                        <Award size={13} />
                        <span>{item.certificateLabel || 'Bersertifikat'}</span>
                      </span>
                    )
                  )}
                </div>

                {/* Role / Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                  {item.role}
                </h3>
                <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                  {item.institution}
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Highlights / Achievements */}
                <div className="space-y-1.5 border-t border-slate-100 dark:border-slate-800 pt-3">
                  {item.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <CheckCircle size={14} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
