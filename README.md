# Portofolio Pribadi — Miqdad Fairruz Haq

Website portofolio profesional dengan gaya desain **Editorial Minimalis Monokrom & Signature Accent** (Signal Vermilion `#FF4A22`). Dibangun menggunakan **React 19**, **Vite**, dan **Tailwind CSS**.

---

## 🧭 Konsep & Arah Desain
- **Bukan Template AI Generik**: Tidak menggunakan gradien neon ungu/biru, tanpa emoji sebagai ikon pengganti, dan tanpa kartu seragam dengan drop-shadow tebal.
- **Tipografi Berkarakter**: Perpaduan sans-serif modern (*Plus Jakarta Sans*) dengan aksen editorial elegan (*Instrument Serif*).
- **Tata Letak Editorial**: Penomoran indeks terstruktur (`00` s/d `05`), hair-thin borders, whitespace proporsional, dan tata letak proyek berbasis bedah arsitektur interaktif.
- **Fitur Otomatis**: Tombol "Live Demo" otomatis disembunyikan apabila URL demo belum diisi / masih kosong (`demoUrl: ""`).

---

## 🛠️ Tech Stack
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v3 (Custom Color Tokens & Dark Mode `class`)
- **Ikonografi**: Lucide React + Custom Brand SVGs (GitHub, LinkedIn, Figma)
- **Animasi & Interaksi**: Micro-interactions & Smooth Scroll
- **Aksesibilitas**: Semantik HTML5, rasio kontras teruji, ramah SEO & Open Graph

---

## 📂 Struktur Folder Proyek

```text
portfolio-miqdad/
├── public/
│   ├── cv-miqdad-fairruz-haq.pdf  # File CV Anda (bisa diganti langsung)
│   └── favicon.svg                # Favicon monogram MF
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # Navigasi sticky, dark/light mode toggle
│   │   ├── Hero.jsx               # Headline berani, pitch, tombol aksi & quick facts
│   │   ├── About.jsx              # Profil semester 5 UNPAM & prinsip kerja
│   │   ├── Skills.jsx             # 5 kelompok keahlian interaktif
│   │   ├── Projects.jsx           # Editorial showcase proyek + bedah arsitektur
│   │   ├── Experience.jsx         # Timeline vertikal pendidikan & rekam jejak
│   │   ├── Contact.jsx            # Form pesan & kanal sosial (copy email)
│   │   ├── Footer.jsx             # Footer minimalis & tombol back-to-top
│   │   └── Icons.jsx              # Komponen SVG GitHub, LinkedIn, Figma
│   ├── data/
│   │   └── portfolioData.js       # PUSAT DATA: Proyek, Keahlian, Info Diri
│   ├── App.jsx                    # Root komponen & sinkronisasi tema gelap/terang
│   ├── index.css                  # Directives Tailwind & custom utilities
│   └── main.jsx                   # Entry point aplikasi React
├── index.html                     # Meta SEO, Open Graph & Google Fonts
├── tailwind.config.js             # Konfigurasi token warna, font, dark mode
├── postcss.config.js              # Konfigurasi PostCSS
└── package.json                   # Dependensi & skrip Vite
```

---

## 🚀 Panduan Menjalankan Proyek

### 1. Masuk ke direktori proyek
```bash
cd C:\Users\ACER\.gemini\antigravity-ide\scratch\portfolio-miqdad
```

### 2. Instal dependensi (jika baru di-clone)
```bash
npm install
```

### 3. Jalankan server pengembangan lokal (Dev Server)
```bash
npm run dev
```
Buka browser pada alamat yang muncul di terminal (biasanya `http://localhost:5173`).

### 4. Build untuk tahap produksi
```bash
npm run build
```
Hasil build siap deploy akan berada di folder `dist/`.

---

## ✏️ Panduan Mengganti Data

Semua data telah dipisahkan di file tunggal `src/data/portfolioData.js` agar Anda tidak perlu mengotak-atik komponen JSX:

### 1. Mengubah Data Proyek (Menambahkan Demo atau Mengganti Status)
Buka [src/data/portfolioData.js](file:///C:/Users/ACER/.gemini/antigravity-ide/scratch/portfolio-miqdad/src/data/portfolioData.js):
```javascript
{
  id: "rentgo",
  title: "RentGo",
  subtitle: "Marketplace Rental Mobil Multi-Role Terpadu",
  category: "Web",
  status: "In Development", // Ganti ke "Live", "In Development", dll.
  // ...
  demoUrl: "https://rentgo-staging.vercel.app", // Jika diisi, tombol Live Demo otomatis muncul!
  repoUrl: "https://github.com/miqdadfairruz/rentgo-marketplace",
  coverImage: "https://images.unsplash.com/..." // Ganti dengan URL gambar proyek Anda
}
```

### 2. Mengganti CV (Resume)
1. Siapkan file CV Anda dalam format PDF.
2. Namai file tersebut menjadi: `cv-miqdad-fairruz-haq.pdf`.
3. Letakkan dan timpa file di dalam folder `public/cv-miqdad-fairruz-haq.pdf`.
4. Tombol "Unduh Resume (CV)" di Hero section akan langsung mengunduh file PDF terbaru Anda.

### 3. Mengganti Kontak & Akun Sosial
Di [src/data/portfolioData.js](file:///C:/Users/ACER/.gemini/antigravity-ide/scratch/portfolio-miqdad/src/data/portfolioData.js):
```javascript
export const personalInfo = {
  socials: {
    email: "emailanda@gmail.com",
    github: "https://github.com/username-anda",
    linkedin: "https://linkedin.com/in/username-anda",
    figma: "https://figma.com/@username-anda"
  }
};
```

---

## 🌐 Panduan Deploy ke Vercel atau Netlify

### Cara 1: Deploy ke Vercel (Rekomendasi Tercepat)
1. Unggah (push) kode proyek ini ke repositori baru di GitHub Anda.
2. Buka [vercel.com](https://vercel.com) dan masuk menggunakan akun GitHub.
3. Klik tombol **"Add New..."** → **"Project"**.
4. Pilih repositori portofolio Anda.
5. Vercel secara otomatis mendeteksi konfigurasi **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Klik **"Deploy"**. Website akan tayang dalam hitungan detik dengan domain gratis `.vercel.app` serta SSL otomatis.

### Cara 2: Deploy ke Netlify
1. Masuk ke [netlify.com](https://netlify.com).
2. Pilih **"Add new site"** → **"Import an existing project"** dari GitHub.
3. Atur build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Klik **"Deploy site"**.
