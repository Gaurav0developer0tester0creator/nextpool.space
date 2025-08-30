import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nextpool Space</title>
        {/* Favicon (tab icon) */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "#0f172a",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Nextpool Logo"
          style={{ width: "150px", marginBottom: "20px" }}
        />

        <h1 style={{ fontSize: "3em" }}>🚀 Coming Soon</h1>
        <p style={{ fontSize: "1.5em", textAlign: "center", maxWidth: "600px" }}>
          Privacy-Preserving Decentralized Storage Protocol
        </p>
        <p style={{ marginTop: "20px" }}>Stay tuned for updates...</p>
      </div>
    </>
  );
}
