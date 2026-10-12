import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Praktik Rendering Next.js - Kelompok 7",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <header className="navbar">
          <Link href="/" style={{ fontWeight: "bold", color: "#38bdf8", textDecoration: "none" }}>
            Latihan Rendering - Kelompok 7
          </Link>
          <nav className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/static">1. Statis</Link>
            <Link href="/dynamic">2. Dinamis</Link>
            <Link href="/products">3. ISR</Link>
            <Link href="/interactive">4. Interaktif</Link>
          </nav>
        </header>

        <main className="container">
          {children}
        </main>
      </body>
    </html>
  );
}
