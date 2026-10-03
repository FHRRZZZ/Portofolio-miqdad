import React, { useState } from 'react';
import { Mail, Copy, Check, Send, ArrowUpRight, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({ type: 'error', message: 'Harap lengkapi semua kolom wajib.' });
      return;
    }

    const subjectEncoded = encodeURIComponent(formData.subject || `Pesan dari ${formData.name}`);
    const bodyEncoded = encodeURIComponent(
      `Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${personalInfo.socials.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    setSubmitStatus({
      type: 'success',
      message: 'Membuka aplikasi email Anda... Anda juga bisa mengirim email langsung ke alamat di samping.'
    });

    window.location.href = mailtoUrl;
  };

  return (
    <section id="kontak" className="py-20 bg-slate-900 text-white dark:bg-slate-950 border-t border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
            Terhubung
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Mari Mulai Percakapan
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-xl">
            Silakan kirim pesan jika Anda memiliki peluang magang, tawaran proyek web, atau ingin berdiskusi seputar teknologi.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Social */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="bg-slate-800/90 p-6 rounded-xl border border-slate-700/80 space-y-3 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Alamat Email
              </div>
              <div className="flex items-center justify-between gap-2 p-3 bg-slate-900/90 rounded-lg border border-slate-700">
                <div className="flex items-center gap-2 overflow-hidden">
                  <Mail size={16} className="text-blue-400 shrink-0" />
                  <span className="text-sm font-medium text-slate-200 truncate">
                    {personalInfo.socials.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 text-xs font-medium bg-slate-800 text-slate-200 rounded border border-slate-600 hover:border-blue-400 hover:text-blue-400 flex items-center gap-1 shrink-0 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check size={12} className="text-emerald-400" />
                      <span>Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Salin</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs text-slate-400">
                Respon biasanya dibalas dalam waktu kurang dari 24 jam.
              </p>
            </div>

            {/* Social Links */}
            <div className="bg-slate-800/90 p-6 rounded-xl border border-slate-700/80 space-y-3 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Media Sosial & Tautan
              </div>

              <div className="space-y-2">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-900/80 rounded-lg border border-slate-700/80 hover:border-blue-400 flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon size={18} className="text-slate-300 group-hover:text-blue-400" />
                    <div>
                      <div className="text-sm font-semibold text-white">GitHub</div>
                      <div className="text-xs text-slate-400">@FHRRZZZ</div>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-slate-400 group-hover:text-blue-400" />
                </a>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-900/80 rounded-lg border border-slate-700/80 hover:border-blue-400 flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon size={18} className="text-slate-300 group-hover:text-blue-400" />
                    <div>
                      <div className="text-sm font-semibold text-white">LinkedIn</div>
                      <div className="text-xs text-slate-400">Miqdad Fairruz Haq</div>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-slate-400 group-hover:text-blue-400" />
                </a>

                <a
                  href={personalInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-900/80 rounded-lg border border-slate-700/80 hover:border-pink-400 flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <InstagramIcon size={18} className="text-slate-300 group-hover:text-pink-400" />
                    <div>
                      <div className="text-sm font-semibold text-white">Instagram</div>
                      <div className="text-xs text-slate-400">@miqdadfh</div>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-slate-400 group-hover:text-pink-400" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7 bg-slate-800/90 p-6 md:p-8 rounded-xl border border-slate-700/80 shadow-md">
            <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
              <MessageSquare size={17} className="text-blue-400" />
              <span>Kirim Pesan Langsung</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1">
                    Nama Anda *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nama lengkap"
                    className="w-full px-3.5 py-2.5 bg-slate-900/90 border border-slate-700 rounded-lg text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1">
                    Email Anda *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@contoh.com"
                    className="w-full px-3.5 py-2.5 bg-slate-900/90 border border-slate-700 rounded-lg text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1">
                  Subjek
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Misal: Peluang Magang / Kerja Sama"
                  className="w-full px-3.5 py-2.5 bg-slate-900/90 border border-slate-700 rounded-lg text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1">
                  Pesan Anda *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tuliskan pesan atau kebutuhan Anda..."
                  className="w-full px-3.5 py-2.5 bg-slate-900/90 border border-slate-700 rounded-lg text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors resize-y"
                />
              </div>

              {submitStatus && (
                <div
                  className={`p-3 text-xs rounded-lg ${
                    submitStatus.type === 'success'
                      ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800'
                      : 'bg-rose-950/80 text-rose-300 border border-rose-800'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg transition-colors shadow-sm"
              >
                <span>Kirim Pesan</span>
                <Send size={14} />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
