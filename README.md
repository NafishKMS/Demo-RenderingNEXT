# Demo-RenderingNEXT — Praktik Rendering Strategy Next.js

Repository ini berisi jobsheet dan project latihan mandiri mengenai **Rendering Strategy pada Next.js** untuk siswa/pemula, disusun oleh **Kelompok 7**.

Proyek latihan menggunakan **JavaScript dan JSX** (tanpa TypeScript).

---

## 🚀 Cara Menjalankan Project

### 1. Clone Repository
```bash
git clone https://github.com/NafishKMS/Demo-RenderingNEXT.git
cd Demo-RenderingNEXT
```

### 2. Masuk ke Folder `practice` dan Jalankan
```bash
cd practice
npm install
npm run dev
```

Buka browser di: **[http://localhost:3000](http://localhost:3000)**.

---

## 🧭 Daftar Halaman Latihan

| Route | Strategi | Keterangan |
|:---|:---|:---|
| `/` | **Home** | Menu utama dan navigasi latihan |
| `/static` | **Static Rendering (SSG)** | Halaman statis, dibuat saat build |
| `/dynamic` | **Dynamic Rendering (SSR)** | Halaman dinamis, dibuat ulang setiap refresh (`force-dynamic`) |
| `/products` | **ISR** | Cache diperbarui berkala (`revalidate = 10`) |
| `/interactive` | **Client Component (CSR)** | Tombol interaktif dengan state browser (`"use client"`) |

---

## 📖 Panduan Praktikum

Panduan langkah demi langkah dan tugas siswa tersedia lengkap di:
👉 **[`jobsheet.md`](./jobsheet.md)**
