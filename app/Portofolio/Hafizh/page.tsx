import Link from "next/link";

export default function HafizhPage() {
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
          color: "#16a34a",
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
            background: "linear-gradient(135deg,#16a34a,#22c55e)",
            padding: "40px",
            color: "white",
            textAlign: "center",
          }}
        >
          <img
            src="/Amir.jpg"
            alt="Muhammad Nur Hafizh Amirullah"
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "5px solid white",
              marginBottom: "20px",
            }}
          />

          <h1>Muhammad Nur Hafizh Amirullah</h1>
          <h3>Web Developer</h3>
        </div>

        {/* Isi */}
        <div style={{ padding: "40px", color: "#111" }}>
          {/* Tentang */}
          <h2>👋 Tentang Saya</h2>

          <p style={{ lineHeight: "30px", color: "#555" }}>
            Halo! Saya adalah siswa SMK Telkom Makassar yang memiliki
            minat dalam pengembangan website dan desain antarmuka.
            Saya senang mempelajari teknologi web modern serta
            mengembangkan aplikasi yang responsif dan mudah digunakan.
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
                <td style={tdIsi}>Muhammad Nur Hafizh Amirullah</td>
              </tr>

              <tr>
                <td style={tdTitle}>Tanggal Lahir</td>
                <td style={tdIsi}>Isi sesuai tanggal lahir</td>
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
                <td style={tdIsi}>Web Developer</td>
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
              "PHP",
              "MySQL",
              "Git",
              "GitHub",
              "Bootstrap",
            ].map((skill) => (
              <span
                key={skill}
                style={{
                  background: "#16a34a",
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
              <h3>🏢 Website Company Profile</h3>

              <p>
                Website company profile yang menampilkan informasi
                perusahaan dengan desain yang modern dan responsif.
              </p>
            </div>

            <div style={projectCard}>
              <h3>🎨 Landing Page</h3>

              <p>
                Landing page sederhana yang dibuat menggunakan
                HTML, CSS, dan JavaScript dengan tampilan menarik.
              </p>
            </div>

            <div style={projectCard}>
              <h3>📦 Sistem Inventaris Barang</h3>

              <p>
                Aplikasi sederhana untuk mengelola data inventaris
                barang menggunakan PHP dan MySQL.
              </p>
            </div>
          </div>

          <hr style={{ margin: "30px 0" }} />

          {/* Kontak */}
          <h2>📞 Kontak</h2>

          <p>📧 Email : hafizh@example.com</p>
          <p>📷 Instagram : @hafizh</p>
          <p>💻 GitHub : github.com/hafizh</p>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/Portofolio">
              <button
                style={{
                  padding: "14px 30px",
                  background: "#16a34a",
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