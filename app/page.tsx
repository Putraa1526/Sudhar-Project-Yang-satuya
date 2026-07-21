import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#2563eb,#60a5fa)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 70px",
          background: "#fff",
          boxShadow: "0 2px 10px rgba(0,0,0,.1)",
        }}
      >
        <h2 style={{ color: "#2563eb" }}>Sudharmiko Web</h2>

        <div>
          <Link href="/" style={navLink}>
            Home
          </Link>

          <Link href="/Profile" style={navLink}>
            Profile
          </Link>

          <Link href="/Portofolio" style={navLink}>
            Portofolio
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "85vh",
          color: "white",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <div>
          <h1 style={{ fontSize: "55px", marginBottom: "20px" }}>
            Selamat Datang 👋
          </h1>

          <p
            style={{
              fontSize: "20px",
              maxWidth: "700px",
              margin: "auto",
            }}
          >
            Website sederhana menggunakan <b>Next.js</b> yang berisi
            halaman Profile dan Portofolio.
          </p>

          <div style={{ marginTop: "40px" }}>
            <Link href="/Profile">
              <button style={buttonBlue}>
                Lihat Profile
              </button>
            </Link>

            <Link href="/Portofolio">
              <button style={buttonWhite}>
                Lihat Portofolio
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const navLink = {
  marginLeft: "25px",
  textDecoration: "none",
  color: "#111",
  fontWeight: "bold",
};

const buttonBlue = {
  padding: "14px 28px",
  marginRight: "20px",
  border: "none",
  borderRadius: "10px",
  background: "#1d4ed8",
  color: "white",
  cursor: "pointer",
  fontSize: "16px",
};

const buttonWhite = {
  padding: "14px 28px",
  border: "none",
  borderRadius: "10px",
  background: "white",
  color: "#2563eb",
  cursor: "pointer",
  fontSize: "16px",
};