import React from 'react';

/**
 * Monogram Minimalis MFH - Miqdad Fairruz Haq
 * Desain tipografi tegas, monokrom hitam/putih murni, tanpa efek 3D / gradien / border kaku.
 * Otomatis beradaptasi dengan mode terang & gelap:
 * - Light Mode: Badge hitam pekat dengan teks putih
 * - Dark Mode: Badge putih bersih dengan teks hitam pekat
 */
export default function Logo({ size = 36, className = '' }) {
  const fontSize = Math.round(size * 0.34);

  return (
    <div
      className={`relative flex items-center justify-center shrink-0 rounded-lg select-none transition-transform duration-200 group-hover:scale-105 bg-slate-950 text-white dark:bg-white dark:text-slate-950 shadow-xs ${className}`}
      style={{
        width: size,
        height: size,
      }}
      aria-label="Logo MFH"
    >
      <span
        style={{ fontSize: `${fontSize}px` }}
        className="font-bold tracking-tight font-sans"
      >
        MFH
      </span>
    </div>
  );
}
