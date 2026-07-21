import Link from "next/link";

export default function PutraPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
      }}
    >
      {/* Tombol Kembali */}
      <Link
        href="/Portofolio"
        style={{
          textDecoration: "none",
          color: "#2563eb",
          fontWeight: "bold",
        }}
      >
        ← Kembali ke Portofolio
      </Link>

      {/* Card Utama */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "30px auto",
          background: "#fff",
          borderRadius: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,.1)",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "linear-gradient(135deg,#2563eb,#3b82f6)",
            padding: "40px",
            color: "white",
            textAlign: "center",
          }}
        >
          <img
            src="/Pute.jpg"
            alt="Sri Putra Arkananta"
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "5px solid white",
              marginBottom: "20px",
            }}
          />

          <h1>Sri Putra Arkananta</h1>
          <h3>Front-End Developer</h3>
        </div>

        {/* Isi */}
        <div style={{ padding: "40px", color: "#111" }}>
          {/* Tentang */}
          <h2>👋 Tentang Saya</h2>

          <p style={{ lineHeight: "30px", color: "#555" }}>
            Halo! Saya adalah siswa SMK Telkom Makassar yang memiliki
            ketertarikan di bidang Web Development, khususnya Front-End.
            Saya senang membuat tampilan website yang modern, responsif,
            dan mudah digunakan menggunakan React.js dan Next.js.
          </p>

          <hr style={{ margin: "30px 0" }} />

          {/* Biodata */}
          <h2>📋 Biodata</h2>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "20px",
            }}
          >
            <tbody>
              <tr>
                <td style={tdTitle}>Nama</td>
                <td style={tdIsi}>Sri Putra Arkananta</td>
              </tr>

              <tr>
                <td style={tdTitle}>Tanggal Lahir</td>
                <td style={tdIsi}>15 Januari 2009</td>
              </tr>

              <tr>
                <td style={tdTitle}>Sekolah</td>
                <td style={tdIsi}>SMK Telkom Makassar</td>
              </tr>

              <tr>
                <td style={tdTitle}>Kelas</td>
                <td style={tdIsi}>XII</td>
              </tr>

              <tr>
                <td style={tdTitle}>Role</td>
                <td style={tdIsi}>Front-End Developer</td>
              </tr>
            </tbody>
          </table>

          <hr style={{ margin: "30px 0" }} />

          {/* Skill */}
          <h2>💻 Skill</h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React.js",
              "Next.js",
              "MySQL",
              "Git",
              "GitHub",
            ].map((skill) => (
              <span
                key={skill}
                style={{
                  background: "#2563eb",
                  color: "white",
                  padding: "10px 18px",
                  borderRadius: "30px",
                  fontWeight: "bold",
                }}
              >
                {skill}
              </span>
            ))}
          </div>

          <hr style={{ margin: "30px 0" }} />

          {/* Project */}
          <h2>📁 Project Saya</h2>

          <div
            style={{
              display: "grid",
              gap: "20px",
              marginTop: "25px",
            }}
          >
            <div style={projectCard}>
              <h3>🛍 Website Gallery Batik Lontara</h3>

              <p>
                Website e-commerce batik khas Makassar menggunakan
                Next.js, React.js, Node.js, Express.js, Prisma ORM,
                dan MySQL.
              </p>
            </div>

            <div style={projectCard}>
              <h3>🌐 Website Portofolio</h3>

              <p>
                Website portofolio pribadi dengan tampilan modern
                menggunakan React.js dan Next.js.
              </p>
            </div>

            <div style={projectCard}>
              <h3>⚛ CRUD React</h3>

              <p>
                Aplikasi CRUD sederhana untuk mengelola data
                menggunakan React.js.
              </p>
            </div>
          </div>

          <hr style={{ margin: "30px 0" }} />

          {/* Kontak */}
          <h2>📞 Kontak</h2>

          <p>📧 Email : putra@example.com</p>
          <p>📷 Instagram : @putra</p>
          <p>💻 GitHub : github.com/putra</p>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/Portofolio">
              <button
                style={{
                  padding: "14px 30px",
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                ← Kembali ke Portofolio
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

const tdTitle = {
  padding: "12px",
  fontWeight: "bold",
  width: "180px",
  borderBottom: "1px solid #ddd",
};

const tdIsi = {
  padding: "12px",
  borderBottom: "1px solid #ddd",
};

const projectCard = {
  background: "#f8fafc",
  border: "1px solid #e5e7eb",
  borderRadius: "12px",
  padding: "20px",
  boxShadow: "0 5px 10px rgba(0,0,0,.05)",
};