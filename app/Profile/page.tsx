import Link from "next/link";

export default function Profile() {
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
          Profile Anggota
        </h1>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <h2>Sri Putra Arkananta</h2>
          <p><b>Nama</b> : Sri Putra Arkananta</p>
          <p><b>Tanggal Lahir</b> : 15 Januari 2009</p>
          <p><b>Sekolah</b> : SMK Telkom Makassar</p>
          <p><b>Kelas</b> : XII</p>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <h2>Muhammad Nur Hafizh Amirullah</h2>
          <p><b>Nama</b> : Muhammad Nur Hafizh Amirullah</p>
          <p><b>Tanggal Lahir</b> : (14 November 2009)</p>
          <p><b>Sekolah</b> : SMK Telkom Makassar</p>
          <p><b>Kelas</b> : XII</p>
        </div>

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <Link href="/">
            <button
              style={{
                padding: "12px 25px",
                background: "#2563eb",
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