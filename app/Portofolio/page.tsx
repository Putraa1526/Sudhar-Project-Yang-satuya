import Link from "next/link";

export default function PortofolioPage() {
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
        Portofolio Anggota
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginTop: "10px",
          marginBottom: "50px",
        }}
      >
        Pilih salah satu anggota untuk melihat portofolionya.
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

            <p style={desc}>
              Menyukai pengembangan website menggunakan
              HTML, CSS, JavaScript, React.js dan Next.js.
            </p>

            <Link href="/Portofolio/Putra">
              <button style={btnBlue}>
                Lihat Portofolio
              </button>
            </Link>
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

            <p style={desc}>
              Menyukai pengembangan website serta UI yang
              modern dan responsif.
            </p>

            <Link href="/Portofolio/Hafizh">
              <button style={btnGreen}>
                Lihat Portofolio
              </button>
            </Link>
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
  width: "350px",
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
};

const roleGreen = {
  color: "#16a34a",
  fontWeight: "bold" as const,
};

const desc = {
  color: "#555",
  lineHeight: "28px",
};

const btnBlue = {
  width: "100%",
  padding: "12px",
  marginTop: "20px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "16px",
};

const btnGreen = {
  width: "100%",
  padding: "12px",
  marginTop: "20px",
  background: "#16a34a",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "16px",
};

const btnHome = {
  padding: "14px 30px",
  background: "#111827",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};