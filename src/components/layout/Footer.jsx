import "../../style/Footer.css";

export default function Footer({ C }) {
  return (
    <>
      <div className="footer-divider" style={{ background: C.border }} />
      <footer className="footer-container">
        <span className="footer-logo-text" style={{ color: C.text }}>
          SkyMart
        </span>
        <p className="footer-credits" style={{ color: C.textMuted }}>
          © 2026 SkyMart • Built with React & Vite by{" "}
          <strong style={{ color: C.text }}>Ashutosh</strong>
        </p>
      </footer>
    </>
  );
}
