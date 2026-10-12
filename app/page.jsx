import Link from "next/link";

export default function HomePage() {
  const menus = [
    {
      title: "1. Static Rendering (SSG)",
      route: "/static",
      badge: "badge-blue",
      desc: "Halaman dibuat sekali saat build. Sangat cepat dan cocok untuk halaman yang jarang berubah.",
    },
    {
      title: "2. Dynamic Rendering (SSR)",
      route: "/dynamic",
      badge: "badge-emerald",
      desc: "Halaman dibuat ulang di server setiap kali dibuka/direfresh. Cocok untuk data realtime.",
    },
    {
      title: "3. Incremental Static Regeneration (ISR)",
      route: "/products",
      badge: "badge-amber",
      desc: "Halaman disimpan di cache dan diperbarui di latar belakang setiap durasi tertentu (misal 10 detik).",
    },
    {
      title: "4. Client Component (CSR)",
      route: "/interactive",
      badge: "badge-purple",
      desc: "Komponen berjalan di browser menggunakan 'use client'. Tombol dan angka bisa diklik secara instan.",
    },
  ];

  return (
    <div>
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <h1 style={{ fontSize: "24px", margin: "0 0 10px 0" }}>Praktik Rendering Strategy Next.js</h1>
        <p style={{ color: "var(--text-muted)", margin: 0 }}>
          Modul latihan praktikum untuk pemula (Kelompok 7). Ikuti instruksi pada <code>jobsheet.md</code>.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "15px" }}>
        {menus.map((item, index) => (
          <div key={index} className="card" style={{ marginTop: 0 }}>
            <span className={`badge ${item.badge}`}>Route: {item.route}</span>
            <h2 style={{ fontSize: "18px", margin: "5px 0 10px 0" }}>{item.title}</h2>
            <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.5 }}>
              {item.desc}
            </p>
            <div style={{ marginTop: "15px" }}>
              <Link
                href={item.route}
                style={{
                  display: "inline-block",
                  backgroundColor: "#2563eb",
                  color: "white",
                  padding: "8px 14px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Buka Halaman &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
