import Counter from "../../components/Counter";

// ==============================================================================
// LATIHAN 4: CLIENT-SIDE RENDERING (CSR / Client Component)
// ==============================================================================

export default function InteractivePage() {
  return (
    <div className="card">
      <span className="badge badge-purple">Client Component (CSR)</span>
      <h1 style={{ margin: "0 0 10px 0" }}>Halaman Interaktif</h1>

      <p>
        Halaman ini menggunakan Client Component untuk menangani state dan event klik langsung di browser tanpa memuat ulang (reload) halaman.
      </p>

      {/* Komponen Tombol Counter */}
      <Counter />

      <div className="note">
        <strong>Petunjuk Pengerjaan:</strong>
        <br />
        1. Buka file <code>components/Counter.jsx</code>.
        <br />
        2. Lengkapi fungsi <code>handleKurang</code> dan <code>handleReset</code> sesuai instruksi TODO di dalam file tersebut.
        <br />
        3. Uji coba klik ketiga tombol di atas. Pastikan nilai angka bertambah, berkurang, dan kembali ke 0.
      </div>
    </div>
  );
}
