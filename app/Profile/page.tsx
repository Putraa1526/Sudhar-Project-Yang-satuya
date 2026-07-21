import Link from "next/link";

export default function ProfilePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        fontFamily: "Arial, sans-serif",
        padding: "50px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#111",
          fontSize: "40px",
        }}
      >
        Profile Anggota
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginTop: "10px",
          marginBottom: "50px",
        }}
      >
        Informasi singkat mengenai anggota kelompok.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* ================= PUTRA ================= */}

        <div style={card}>
          <img
            src="/Pute.jpg"
            alt="Sri Putra"
            style={image}
          />

          <div style={{ padding: "25px" }}>
            <h2 style={{ color: "#111" }}>
              Sri Putra Arkananta
            </h2>

            <p style={roleBlue}>
              Front-End Developer
            </p>

            <table style={table}>
              <tbody>
                <tr>
                  <td><b>Nama</b></td>
                  <td>: Sri Putra Arkananta</td>
                </tr>

                <tr>
                  <td><b>Tanggal Lahir</b></td>
                  <td>: 15 Januari 2009</td>
                </tr>

                <tr>
                  <td><b>Sekolah</b></td>
                  <td>: SMK Telkom Makassar</td>
                </tr>

                <tr>
                  <td><b>Kelas</b></td>
                  <td>: XII</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ================= HAFIZH ================= */}

        <div style={card}>
          <img
            src="/Amir.jpg"
            alt="Muhammad Nur Hafizh"
            style={image}
          />

          <div style={{ padding: "25px" }}>
            <h2 style={{ color: "#111" }}>
              Muhammad Nur Hafizh Amirullah
            </h2>

            <p style={roleGreen}>
              Web Developer
            </p>

            <table style={table}>
              <tbody>
                <tr>
                  <td><b>Nama</b></td>
                  <td>: Muhammad Nur Hafizh Amirullah</td>
                </tr>

                <tr>
                  <td><b>Tanggal Lahir</b></td>
                  <td>: (Isi tanggal lahir)</td>
                </tr>

                <tr>
                  <td><b>Sekolah</b></td>
                  <td>: SMK Telkom Makassar</td>
                </tr>

                <tr>
                  <td><b>Kelas</b></td>
                  <td>: XII</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "60px",
        }}
      >
        <Link href="/">
          <button style={btnHome}>
            ← Kembali ke Home
          </button>
        </Link>
      </div>
    </main>
  );
}

/* ================= STYLE ================= */

const card = {
  width: "380px",
  background: "#fff",
  borderRadius: "20px",
  overflow: "hidden",
  boxShadow: "0 8px 20px rgba(0,0,0,.12)",
};

const image = {
  width: "100%",
  height: "320px",
  objectFit: "cover" as const,
};

const roleBlue = {
  color: "#2563eb",
  fontWeight: "bold" as const,
  marginBottom: "20px",
};

const roleGreen = {
  color: "#16a34a",
  fontWeight: "bold" as const,
  marginBottom: "20px",
};

const table = {
  width: "100%",
  color: "#111",
  lineHeight: "35px",
};

const btnHome = {
  padding: "14px 30px",
  background: "#111827",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};