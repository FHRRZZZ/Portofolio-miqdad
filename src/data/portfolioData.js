/**
 * PORTFOLIO DATA - MIQDAD FAIRRUZ HAQ
 * Edit file ini untuk memperbarui informasi personal, proyek, keahlian, dan riwayat pendidikan/pengalaman.
 */

export const personalInfo = {
  name: "Miqdad Fairruz Haq",
  alias: "Miqdad",
  tagline: "Junior Web Developer & UI/UX Designer",
  statusBadge: "TERBUKA UNTUK MAGANG & FULL-TIME JUNIOR ROLE",
  pitch: {
    highlight: "Merancang antarmuka dengan rasa, membangun sistem dengan nalar.",
    body: "Mahasiswa Teknik Informatika Universitas Pamulang semester 5 dengan spesialisasi pengembangan web modern dan desain UI/UX terukur. Terbiasa membedah masalah nyata menjadi arsitektur aplikasi modular yang mudah dirawat dan nyaman digunakan."
  },
  educationBrief: "Semester 5 — Teknik Informatika, Universitas Pamulang (UNPAM)",
  careerGoal: "Fokus berkontribusi sebagai Junior Web Developer atau UI/UX Designer di startup teknologi yang bergerak cepat dan mengutamakan kualitas produk.",
  location: "Tangerang Selatan, Indonesia",
  resumeUrl: "/cv-tech-specialist.html",
  socials: {
    email: "miqdadfairruzhaq@gmail.com",
    github: "https://github.com/FHRRZZZ",
    linkedin: "https://www.linkedin.com/in/miqdad-fh-63ba3b372/?isSelfProfile=true",
    instagram: "https://www.instagram.com/miqdadfh?stkn=MXV1dXQ5Zjh0ZGtkZw==",
    figma: "https://www.instagram.com/miqdadfh?stkn=MXV1dXQ5Zjh0ZGtkZw=="
  },
  quickFacts: [
    { label: "Pendidikan", value: "S1 Teknik Informatika (Smt. 5)" },
    { label: "Institusi", value: "Universitas Pamulang" },
    { label: "Domisili", value: "Tangerang Selatan & Jabodetabek" },
    { label: "Minat Utama", value: "Web App & Design Systems" }
  ]
};

export const skillsData = [
  {
    category: "Frontend Development",
    number: "01",
    description: "Membangun antarmuka web interaktif yang responsif, modular, dan berperforma tinggi.",
    items: [
      { name: "React", level: "Mahir", badge: "Utama" },
      { name: "Tailwind CSS", level: "Mahir", badge: "Utama" },
      { name: "JavaScript (ES6+)", level: "Mahir", badge: "Core" },
      { name: "HTML5 / Semantic", level: "Kuat", badge: "Aksesibilitas" },
      { name: "CSS3 / Modern Layout", level: "Kuat", badge: "Flex/Grid" }
    ]
  },
  {
    category: "Backend & Logic",
    number: "02",
    description: "Merancang alur API RESTful, logika autentikasi, serta arsitektur server terstruktur.",
    items: [
      { name: "Node.js", level: "Menengah", badge: "Runtime" },
      { name: "Express.js", level: "Menengah", badge: "API" },
      { name: "Laravel", level: "Menengah", badge: "MVC" },
      { name: "RESTful API Design", level: "Menengah", badge: "Arsitektur" }
    ]
  },
  {
    category: "Database & Storage",
    number: "03",
    description: "Pemodelan data relasional dan integrasi solusi database berbasis cloud.",
    items: [
      { name: "MySQL", level: "Kuat", badge: "Relasional" },
      { name: "Firebase (Firestore/Auth)", level: "Menengah", badge: "BaaS" },
      { name: "Database Schema Design", level: "Kuat", badge: "Normalisasi" }
    ]
  },
  {
    category: "Desain UI/UX",
    number: "04",
    description: "Penyusunan alur pengguna (user flow), wireframing, prototipe interaktif, dan design token.",
    items: [
      { name: "Figma", level: "Mahir", badge: "Prototyping" },
      { name: "Wireframing & Flow", level: "Kuat", badge: "UX Logic" },
      { name: "Design System & Tokens", level: "Kuat", badge: "Komponen" },
      { name: "Heuristic Evaluation", level: "Menengah", badge: "Audit UX" }
    ]
  },
  {
    category: "Tools & Ekosistem",
    number: "05",
    description: "Perangkat kerja esensial untuk kontrol versi, kolaborasi tim, dan produktivitas kode.",
    items: [
      { name: "Git & GitHub", level: "Kuat", badge: "Version Control" },
      { name: "Vite", level: "Mahir", badge: "Bundler" },
      { name: "Postman", level: "Kuat", badge: "API Testing" },
      { name: "VS Code", level: "Mahir", badge: "Editor" }
    ]
  }
];

export const projectsData = [
  {
    id: "rentgo",
    number: "01",
    title: "RentGo",
    subtitle: "Marketplace Rental Mobil Multi-Role Terpadu",
    category: "Web",
    status: "In Development",
    statusColor: "amber",
    year: "2024",
    role: "Fullstack & UI/UX",
    featured: true,
    summary: "Platform marketplace rental mobil berbasis web yang memisahkan otoritas dalam 3 peran terisolasi: Management untuk pemantauan armada dan finansial, Agent untuk jadwal operasional sewa, dan Customer untuk kemudahan booking mandiri.",
    architecture: [
      { label: "Management", desc: "Dashboard monitoring utilisasi unit, status servis kendaraan, dan rekap profit harian." },
      { label: "Agent", desc: "Manajemen ketersediaan mobil, validasi identitas penyewa, dan verifikasi serah terima." },
      { label: "Customer", desc: "Pencarian filter spesifikasi transmisi/kapasitas, booking instan, dan faktur digital." }
    ],
    techStack: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    demoUrl: "",
    repoUrl: "https://github.com/FHRRZZZ/RentGo.git",
    coverImage: "/proyek/rentgo.png"
  },
  {
    id: "nexus-ai",
    number: "02",
    title: "Nexus AI",
    subtitle: "Conversational Agent Cepat Berbasis Groq API & Llama",
    category: "AI",
    status: "In Development",
    statusColor: "amber",
    year: "2024",
    role: "Frontend & AI Integration",
    featured: true,
    summary: "Eksplorasi antarmuka percakapan AI dengan waktu inferensi super cepat menggunakan Groq Cloud LPU. Mengintegrasikan model Llama open-weights dengan streaming response dan token rendering yang halus.",
    architecture: [
      { label: "Inference Engine", desc: "Groq Cloud API untuk latensi inferensi ultra-rendah dan throughput tinggi." },
      { label: "State Management", desc: "Pengelolaan konteks histori percakapan lokal tanpa membebani payload." },
      { label: "Interface", desc: "Desain markdown response dengan copy kode sekali klik dan streaming visual." }
    ],
    techStack: ["React", "Groq API", "Llama 3", "Node.js", "Tailwind CSS"],
    demoUrl: "",
    repoUrl: "https://github.com/FHRRZZZ/Nexus-AI.git",
    coverImage: "/proyek/NexusAi app mobile flutter.jpeg"
  },
  {
    id: "toko-madura",
    number: "03",
    title: "Toko Madura",
    subtitle: "Katalog & Kasir Digital Toko Kelontong Sembako 24 Jam",
    category: "Web",
    status: "In Development",
    statusColor: "amber",
    year: "2024",
    role: "Frontend & Database",
    featured: false,
    summary: "Digitalisasi katalog barang dan pemesanan praktis untuk warung/toko sembako Madura. Mengutamakan antarmuka yang sangat cepat dan mudah dipahami, dilengkapi integrasi direct order ke WhatsApp pemilik toko.",
    architecture: [
      { label: "Katalog Kilat", desc: "Pencarian instan produk kebutuhan pokok dan harga satuan/grosir." },
      { label: "Order Generator", desc: "Format otomatis pesanan ke teks WhatsApp siap kirim tanpa registrasi rumit." },
      { label: "Penyimpanan", desc: "Sinkronisasi Firebase untuk update harga berkala langsung oleh penjaga toko." }
    ],
    techStack: ["React", "Firebase", "Tailwind CSS", "Node.js"],
    demoUrl: "",
    repoUrl: "",
    coverImage: "/proyek/tokomadura.png"
  },
  {
    id: "elearning-sekolah",
    number: "04",
    title: "E-Learning Sekolah",
    subtitle: "Platform Manajemen Belajar & Evaluasi Daring Terstruktur",
    category: "Web",
    status: "In Development",
    statusColor: "amber",
    year: "2024",
    role: "Fullstack Architecture & UI",
    featured: false,
    summary: "Website pembelajaran daring terpusat untuk institusi pendidikan tingkat menengah. Memfasilitasi distribusi modul belajar, pengumpulan tugas siswa dengan batasan tenggat waktu otomatis, dan rekapitulasi nilai evaluasi pengajar.",
    architecture: [
      { label: "Portal Pengajar", desc: "Unggah materi silabus, pembuatan kuis tugas, dan penilaian terintegrasi." },
      { label: "Portal Pelajar", desc: "Akses materi harian, forum tanya jawab bab pelajaran, dan tracking progres." },
      { label: "Database Relasional", desc: "Struktur MySQL yang dinormalisasi untuk menjaga konsistensi data nilai." }
    ],
    techStack: ["Laravel", "MySQL", "Tailwind CSS", "Figma"],
    demoUrl: "",
    repoUrl: "https://github.com/Fhrrzz114/BelajarOnline.git",
    coverImage: "/proyek/elearning.png"
  },
  {
    id: "web-kelas",
    number: "05",
    title: "Website Kelas",
    subtitle: "Portal Informasi & Administrasi Kelas Berbasis Web",
    category: "Web",
    status: "In Development",
    statusColor: "amber",
    year: "2024",
    role: "Frontend & Firebase",
    featured: false,
    summary: "Website resmi kelas yang berfungsi sebagai pusat informasi, pengumuman, jadwal, dan administrasi anggota kelas secara digital. Dihosting menggunakan Firebase Hosting untuk aksesibilitas online yang cepat.",
    architecture: [
      { label: "Portal Informasi", desc: "Pengumuman, jadwal, dan informasi kelas yang mudah diakses oleh seluruh anggota." },
      { label: "Firebase Hosting", desc: "Deploy menggunakan Firebase Hosting dengan domain web.app yang cepat dan aman." },
      { label: "Manajemen Konten", desc: "Pengelolaan data anggota dan konten halaman melalui antarmuka yang sederhana." }
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Firebase"],
    demoUrl: "https://tentech-addc4.web.app/",
    repoUrl: "",
    coverImage: "/proyek/websitekelas.png"
  }
];

export const timelineData = [
  {
    period: "2022 — Sekarang (Semester 5)",
    role: "Mahasiswa S1 Teknik Informatika",
    institution: "Universitas Pamulang (UNPAM)",
    type: "Pendidikan",
    category: "Pendidikan",
    hasCertificate: false,
    description: "Mempelajari rekayasa perangkat lunak, struktur data dan algoritma, pemrograman web berorientasi objek, basis data relasional, dan jaringan komputer. Aktif membangun proyek web mandiri setiap semester.",
    achievements: [
      "Fokus studi: Web Engineering & Rekayasa Perangkat Lunak",
      "Konsisten membangun proyek coding terapan dan portofolio mandiri",
      "Mendalami framework React, Laravel, Node.js, dan basis data MySQL"
    ]
  },
  {
    period: "2023 / 2024",
    role: "Peserta Creative Web Competition",
    institution: "Bytesfest (Kompetisi Desain & Web Kreatif)",
    type: "Kompetisi",
    category: "Kompetisi",
    hasCertificate: true,
    certificateLabel: "Sertifikat Peserta Resmi",
    certificateUrl: "/Peserta_Miqdad Fairruz Haq.pdf",
    description: "Mengikuti ajang kompetisi perancangan website kreatif tingkat mahasiswa. Ditantang untuk menyusun ide antarmuka pengguna (UI/UX) inovatif dan mengimplementasikannya dalam prototipe web fungsional dengan batasan waktu yang ketat.",
    achievements: [
      "Mengantongi Sertifikat Partisipasi Resmi Creative Web Competition Bytesfest",
      "Mengasah kecepatan eksekusi ide, wireframing, dan coding dalam format kompetitif",
      "Mendapatkan evaluasi berharga mengenai estetika antarmuka dan user experience"
    ]
  },
  {
    period: "Semester 2 (2023)",
    role: "Anggota Aktif (1 Semester)",
    institution: "Informatics Study Club (ISC) — Universitas Pamulang",
    type: "Organisasi",
    category: "Organisasi",
    hasCertificate: true,
    certificateLabel: "Sertifikat Anggota Resmi",
    certificateUrl: "/Miqdad Fairruz Haq  (2).pdf",
    description: "Bergabung dalam komunitas belajar mahasiswa Teknik Informatika UNPAM untuk mendalami materi pemrograman tambahan di luar kurikulum kelas, berdiskusi mengenai tren teknologi, dan berbagi pengalaman coding.",
    achievements: [
      "Menyelesaikan masa keanggotaan aktif 1 semester dengan sertifikat resmi",
      "Mengikuti sesi diskusi teknis, sharing session, dan eksplorasi problem solving",
      "Memperluas jejaring dan kerja sama belajar sesama mahasiswa peminat software development"
    ]
  },
  {
    period: "Masa SMA",
    role: "Ketua Ekskul Broadcasting & Tim Dokumentasi",
    institution: "Ekstrakurikuler Broadcasting & Multimedia Sekolah",
    type: "Kepemimpinan",
    category: "Organisasi",
    hasCertificate: false,
    description: "Memimpin organisasi ekstrakurikuler penyiaran dan tim dokumentasi multimedia sekolah. Mengoordinasikan peliputan acara-acara resmi, manajemen alur kerja produksi visual, dan pembagian tugas anggota.",
    achievements: [
      "Bertanggung jawab atas koordinasi dan dokumentasi visual berbagai agenda besar sekolah",
      "Memimpin dan melatih anggota dalam penggunaan alat produksi dan manajemen waktu liputan",
      "Membangun fondasi awal kemampuan kepemimpinan, komunikasi, dan kepekaan komposisi visual"
    ]
  }
];
