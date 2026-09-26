# biann.me — Personal Portfolio

Portfolio responsif bertema navy (`#0d1b3e` / `#0f2152`) dengan aksen beige (`#f4e2d8`). Dibuat menggunakan **HTML, Tailwind CSS CDN, CSS khusus, dan JavaScript vanilla**. Tidak memerlukan proses build.

## Menjalankan

Buka **`index.html`** di browser. Internet diperlukan untuk Tailwind CDN, Google Fonts, dan foto galeri Unsplash. Layout utama juga tersedia melalui CSS lokal.

Opsional, gunakan server lokal dengan Node.js:

```sh
node server.cjs
```

Lalu buka **http://localhost:3000**. Hentikan server dengan `Ctrl+C`.

## Struktur

```text
index.html                 Struktur dan teks judul halaman
styles.css                 Tema, layout, breakpoint, dan komponen
data.js                    Data profil dan seluruh konten contoh
app.js                     Navigasi, filter, dialog, dan form kontak
server.cjs                 Server statis lokal tanpa dependency
assets/sabian-portrait.png Foto Sabian dengan latar transparan
assets/sabian-original.jpg Foto asli Sabian sebelum pengolahan
assets/project-frieren.webp Screenshot website Frieren Showcase
assets/project-*.svg       Mockup proyek konsep, dapat diedit
assets/favicon.svg         Ikon browser
```

## Mengganti konten

1. **Profil:** edit `profile` di `data.js`: email, lokasi, bio, cerita, foto, dan tautan media sosial. Untuk nama besar, brand, sapaan, judul browser, dan metadata, edit juga `index.html`.
2. **Foto:** `assets/sabian-portrait.png` merupakan cutout foto Sabian yang diberikan. Foto aslinya tersimpan di `assets/sabian-original.jpg`. Atur framing lewat `.portrait` di `styles.css` jika rasio foto berbeda.
3. **Statistik, layanan, keahlian, pengalaman, prestasi:** edit array terkait di `data.js`. Angka dan riwayat yang ada adalah contoh, bukan klaim riwayat sebenarnya.
4. **Proyek:** Frieren Showcase menjadi proyek utama dengan screenshot asli dan tautan `http://biann2.me/frieren-showcase/`. Repository belum diberikan, sehingga tombol Source Code menampilkan informasi tersebut. Edit array `projects` untuk mengisi `sourceUrl` atau menambahkan proyek. Gunakan `isPlaceholder: false` untuk karya nyata dan `true` untuk contoh konsep, serta kategori `web` atau `design` untuk filter. Jumlah proyek dihitung otomatis.
5. **Sertifikat:** isi `certificateUrl` dengan tautan sertifikat yang dapat diverifikasi. Saat kosong, dialog menampilkan penjelasan data contoh.
6. **Galeri:** ganti `image`, `alt`, `title`, dan `caption`. Anda dapat memakai gambar lokal seperti `assets/kegiatan-1.jpg`.
7. **Warna dan font:** ubah variabel `:root` di `styles.css`. Layout beradaptasi pada layar desktop, tablet, dan ponsel.

### Form kontak

Form memakai validasi bawaan browser, menolak nama/pesan yang hanya berisi spasi, dan menyusun draft melalui `mailto:`. Pesan **belum dikirim** sampai pengguna menekan kirim di aplikasi email. Ubah `profile.email` dari `hello@example.com` ke email Anda sebelum dipublikasikan. Untuk pengiriman langsung dari website, hubungkan handler form di `app.js` ke backend atau layanan form pilihan Anda.

### Fitur

- Navbar sticky dengan penanda section aktif.
- Drawer mobile dengan dukungan keyboard, Escape, backdrop, dan focus trap native.
- Hero tiga kolom di desktop, layout bertumpuk di ponsel, PNG cutout dan glow.
- Layanan, tech stack, timeline, serta detail sertifikasi.
- Filter proyek dan modal preview.
- Galeri dengan lightbox.
- Form kontak dengan draft email dan status yang jujur.
- Reduced-motion, skip link, focus indicator, label form, dan teks alternatif gambar.
- Copyright tahun otomatis.

## Aset contoh

- Foto potret aktif: foto Sabian yang diberikan pengguna; diolah secara lokal menjadi PNG transparan. Aset placeholder lama `portrait.png` dari [PNGimg](https://pngimg.com/image/6531) tetap disimpan tetapi tidak digunakan.
- Foto kegiatan: [Unsplash](https://unsplash.com), bersifat ilustratif dan dimuat lewat URL dalam `data.js`.
- Frieren Showcase: screenshot website asli milik pengguna, disimpan lokal sebagai WebP. Label React, JavaScript, dan CSS3 sesuai teknologi yang dapat diamati dari website.
- Proyek konsep lainnya: SVG lokal yang dibuat untuk template ini; bukan screenshot aplikasi live.
- Font: DM Sans dan Manrope dari Google Fonts.
- Ikon antarmuka: inline SVG; tidak memerlukan library ikon eksternal.

Untuk publikasi, unggah `index.html`, `styles.css`, `data.js`, `app.js`, dan folder `assets` ke hosting statis. Tailwind CDN digunakan sesuai versi prototipe yang diminta; kode custom lokal menjaga layout tetap tersedia ketika CDN tidak dimuat.
