/* EDIT KONTEN DI SINI.
   Foto profil dan Frieren Showcase adalah milik Sabian.
   Pengalaman, angka, prestasi, proyek lainnya, dan foto galeri masih contoh.
   Isi demoUrl, sourceUrl, dan certificateUrl dengan tautan asli Anda.
   Tautan kosong akan membuka penjelasan placeholder, bukan halaman palsu. */
const portfolioData = {
  profile: {
    name: 'Sabian Abhista',
    email: 'sabian2211@gmail.com', // Ganti dengan alamat email Anda.
    location: 'Jakarta, Indonesia',
    portrait: 'assets/sabian-portrait.png', // Cutout foto asli; sumber: sabian-original.jpg.
    heroBio: 'Selalu penasaran dengan cara kerja teknologi di balik layar. Saya menikmati proses belajar hal-hal baru, menguji konsep, dan terus mengasah kemampuan untuk membangun aplikasi web yang makin efisien dan bermanfaat.',
    aboutLead: 'Halo! Saya Sabian, seorang pengembang web yang percaya bahwa teknologi terbaik adalah yang terasa sederhana saat digunakan.',
    aboutBody: 'Berawal dari rasa penasaran tentang cara sebuah website bekerja, kini saya menikmati setiap proses merangkai kode dan desain. Fokus saya ada pada pengembangan frontend, antarmuka yang intuitif, dan pengalaman web yang bisa diakses semua orang.',
    // URL berikut adalah placeholder halaman utama platform. Ganti dengan profil Anda.
    socials: [
      { name: 'GitHub', icon: 'github', url: 'https://github.com/Biannnn78' },
      { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/' },
      { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/_bianns' },
    ],
  },
  navigation: [ ['home','Home'], ['tentang','Tentang'], ['layanan','Layanan'], ['keahlian','Keahlian'], ['pengalaman','Pengalaman'], ['prestasi','Prestasi'], ['portofolio','Portofolio'], ['galeri','Galeri'], ['kontak','Kontak'] ],
  stats: [ { value:'2+', label:'Proyek diselesaikan' }, { value:'1', label:'Tahun mengeksplorasi' }, { value:'8+', label:'Teknologi dipelajari' }, { value:'100%', label:'Semangat berkarya' } ],
  services: [
    { icon:'code', title:'Coming Soon', description:'Coming Soon' },
    { icon:'layout', title:'Coming Soon', description:'Coming Soon' },
    { icon:'pen', title:'Coming Soon', description:'Coming Soon' },
  ],
  skills: [
    { category:'Frontend development', items:[ ['⚛','React'], ['TS','TypeScript'], ['≈','Tailwind CSS'], ['5','HTML5'], ['#','CSS3'], ['JS','JavaScript'] ] },
    { category:'Backend & data', items:[ ['Py','Python'], ['◈','Node.js'], ['◫','MySQL'] ] },
    { category:'Tools & workflow', items:[ ['◇','Git'], ['⌘','GitHub'], ['◉','Figma'], ['⌁','VS Code'] ] },
  ],
  experience: [
    {
      period: '2025',
      type: 'Kepanitiaan',
      title: 'Kepanitiaan Acara Mahasiswa',
      organization: 'Moderator',
      description: 'Memandu jalannya sesi diskusi interaktif dan pemaparan materi, memfasilitasi sesi tanya-jawab antara pembicara dan audiens, serta merangkum poin-poin utama materi agar alur diskusi berjalan terarah.',
    },
  ],
  achievements: [
    { title:'Coming Soon', issuer:'Coming Soon', year:'Coming Soon', icon:'award', description:'Coming Soon.', certificateUrl:'' },
    { title:'Coming Soon', issuer:'Coming Soon', year:'Coming soon', icon:'trophy', description:'Coming Soon', certificateUrl:'' },
  ],
  projects: [
    { id:'frieren', name:'Frieren — A Journey Beyond Time', category:'web', categoryLabel:'FEATURED PROJECT · LIVE', isPlaceholder:false, image:'assets/project-frieren.webp', alt:'Screenshot website Frieren Showcase dengan lanskap pegunungan dan judul Akhir sebuah kisah, Awal sebuah perjalanan', description:'Showcase interaktif dunia Frieren, menggabungkan cerita, koleksi mantra, dan kenangan dalam pengalaman web yang tenang dan imersif.', tags:['React','JavaScript','CSS3'], detail:'Website bertema Frieren: Beyond Journey’s End yang saya buat untuk menghadirkan perjalanan cerita secara interaktif. Pengunjung dapat menjelajahi kisah Frieren melalui timeline, memfilter koleksi mantra dan kelompok sahabat, serta menikmati galeri kenangan. Tipografi serif, nuansa hijau alami, dan lanskap pegunungan membangun suasana yang selaras dengan ceritanya.', demoUrl:'http://biann2.me/frieren-showcase/', sourceUrl:'' },
  ],
  gallery: [
    {
      title: 'Anak Mama',
      category: 'TEMAN & CERITA',
      image: 'assets/galeri-anak-mama.jpg',
      alt: 'Foto berempat ',
      caption: 'Anak Mama !.',
    },
    {
      title: 'Satu angkatan, banyak cerita.',
      category: 'TEKNIK INFORMATIKA · 2025',
      image: 'assets/galeri-ti25-bersama.jpg',
      alt: 'Foto bersama mahasiswa Teknik Informatika angkatan 2025 di luar gedung kampus',
      caption: 'Satu visi, satu angkatan, ribuan cerita. Terus solid dan saling dukung dalam meraih mimpi!',
    },
    {
      title: 'Di sela kesibukan kuliah.',
      category: 'TEKNIK INFORMATIKA · 2025',
      image: 'assets/galeri-ti25-santai.jpg',
      alt: 'Teman-teman Teknik Informatika angkatan 2025 berkumpul santai di sekitar meja',
      caption: 'Ga semuanya harus codingkan? ,Karena cerita masa kuliah bukan cuma soal coding, tapi juga kebersamaan.',
    },
  ],
};
