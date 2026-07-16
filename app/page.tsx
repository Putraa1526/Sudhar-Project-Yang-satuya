import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "420px",
          background: "#ffffff",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#000" }}>Website Profile</h1>

        <p style={{ color: "#555", marginBottom: "30px" }}>
          Sri Putra Arkananta & Muhammad Nur Hafizh AMIRULLAH
        </p>

        <Link href="/Profile">
          <button
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Profile
          </button>
        </Link>

        <Link href="/Portofolio">
          <button
            style={{
              width: "100%",
              padding: "12px",
              background: "#16a34a",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Portofolio
          </button>
        </Link>
      </div>
    </main>
  );
}