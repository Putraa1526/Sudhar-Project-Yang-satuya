import Link from "next/link";

export default function Portofolio() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
          background: "#fff",
          borderRadius: "15px",
          padding: "35px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          color: "#000",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
          Portofolio
        </h1>

        <h2>Tentang Saya</h2>

        <p>
          Kami merupakan siswa SMK Telkom Makassar yang sedang belajar
          membuat website menggunakan React.js dan Next.js.
        </p>

        <hr />

        <h2>Keahlian</h2>

        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>MySQL</li>
        </ul>

        <hr />

        <h2>Project</h2>

        <ul>
          <li>Website Gallery Batik Lontara</li>
          <li>Website Portofolio</li>
          <li>Aplikasi CRUD React</li>
        </ul>

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <Link href="/">
            <button
              style={{
                padding: "12px 25px",
                background: "#16a34a",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              ← Kembali ke Home
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}