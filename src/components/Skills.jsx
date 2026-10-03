import React from 'react';
import { Code2, Server, Database, Palette, Wrench } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Frontend Development':
        return <Code2 size={20} className="text-blue-600 dark:text-blue-400" />;
      case 'Backend & Logic':
        return <Server size={20} className="text-blue-600 dark:text-blue-400" />;
      case 'Database & Storage':
        return <Database size={20} className="text-blue-600 dark:text-blue-400" />;
      case 'Desain UI/UX':
        return <Palette size={20} className="text-blue-600 dark:text-blue-400" />;
      case 'Tools & Ekosistem':
        return <Wrench size={20} className="text-blue-600 dark:text-blue-400" />;
      default:
        return <Code2 size={20} className="text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section id="keahlian" className="py-20 bg-slate-50/70 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
            Kemampuan
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Keahlian & Teknologi
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
            Teknologi dan perangkat yang saya gunakan dalam pengembangan web dan desain.
          </p>
        </div>

        {/* 5 Grouped Cards Grid with contrast */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group) => (
            <div
              key={group.category}
              className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/90 dark:border-slate-800 hover:border-blue-500/60 dark:hover:border-blue-500/60 transition-all shadow-xs hover:shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-blue-50 dark:bg-blue-950/60 rounded-lg text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/60">
                  {getCategoryIcon(group.category)}
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  {group.category}
                </h3>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                {group.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-medium rounded-md border border-slate-200 dark:border-slate-700"
                  >
                    <span>{skill.name}</span>
                    <span className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold">
                      • {skill.level}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
