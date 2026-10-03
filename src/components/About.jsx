import React from 'react';
import { GraduationCap, MapPin, CheckCircle, Code, Palette, BookOpen } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="tentang" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="mb-10">
          <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
            Profil
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Tentang Saya
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
            Latar belakang akademis dan pendekatan saya dalam pembuatan website.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story */}
          <div className="lg:col-span-7 space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            <p>
              Saya adalah mahasiswa S1 Teknik Informatika di <strong>Universitas Pamulang</strong> yang saat ini sedang menempuh <strong>Semester 5</strong>. Sejak awal kuliah, saya memiliki antusiasme tinggi di bidang web development dan desain antarmuka (UI/UX).
            </p>
            <p>
              Saya terbiasa menggabungkan kemampuan frontend menggunakan <strong>React</strong> dan <strong>Tailwind CSS</strong>, dengan logika backend menggunakan <strong>Node.js, Express, dan Laravel</strong>, serta basis data seperti <strong>MySQL dan Firebase</strong>.
            </p>
            <p>
              Sebelum menulis kode, saya sering merancang alur pengguna dan prototipe di <strong>Figma</strong> agar struktur aplikasi terencana dengan baik. Tujuan saya adalah berkontribusi sebagai Junior Web Developer atau UI/UX Designer di startup teknologi yang menghargai kode bersih dan pengalaman pengguna yang nyaman.
            </p>

            <div className="pt-4 grid sm:grid-cols-2 gap-3.5">
              <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200/80 dark:border-slate-700/80 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
                <div className="flex items-center gap-2.5 text-slate-900 dark:text-white font-semibold text-sm mb-1.5">
                  <div className="p-1.5 bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-md">
                    <Code size={15} />
                  </div>
                  <span>Web Development</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Membangun web responsif, semantic HTML, dan arsitektur komponen modular.
                </p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200/80 dark:border-slate-700/80 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
                <div className="flex items-center gap-2.5 text-slate-900 dark:text-white font-semibold text-sm mb-1.5">
                  <div className="p-1.5 bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-md">
                    <Palette size={15} />
                  </div>
                  <span>UI/UX Design</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Wireframing, prototyping di Figma, dan penerapan sistem desain yang konsisten.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Info Card */}
          <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-800/90 p-6 rounded-xl border border-slate-200/80 dark:border-slate-700 space-y-6 shadow-xs">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                <BookOpen size={13} className="text-blue-600" />
                <span>Informasi Pendidikan</span>
              </h3>
              <div className="flex items-start gap-3 p-3.5 bg-white dark:bg-slate-900 rounded-lg border border-slate-200/80 dark:border-slate-700/80">
                <div className="p-2.5 bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 rounded-lg mt-0.5">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-base text-slate-900 dark:text-white">
                    Universitas Pamulang
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    S1 Teknik Informatika (Semester 5)
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                    <MapPin size={12} />
                    <span>Tangerang Selatan, Banten</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 dark:border-slate-700/80 pt-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                Prinsip Belajar & Bekerja
              </h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-blue-600 shrink-0" />
                  <span>Kode yang rapi dan mudah dibaca (clean code)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-blue-600 shrink-0" />
                  <span>Pendekatan mobile-first untuk tampilan responsive</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-blue-600 shrink-0" />
                  <span>Cepat beradaptasi dengan stack dan teknologi baru</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
