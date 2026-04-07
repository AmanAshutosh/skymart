import { useNavigate } from "react-router-dom";
import "../style/About.css";

export default function About({ C }) {
  const navigate = useNavigate();

  const stats = [
    { label: "Products", val: "20K+", color: C.primary },
    { label: "Happy Customers", val: "50K+", color: C.success },
    { label: "Avg. Rating", val: "4.9", color: C.warning },
    { label: "On-time Delivery", val: "99%", color: C.accent },
  ];

  const team = [
    {
      name: "Ashutosh Aman",
      role: "Founder & Lead Engineer",
      initial: "A",
      color: C.primary,
    },
    {
      name: "Ashutosh Aman",
      role: "Head of Product",
      initial: "A",
      color: C.success,
    },
    {
      name: "Ashutosh Aman",
      role: "Design Director",
      initial: "A",
      color: C.warning,
    },
    {
      name: "Ashutosh Aman",
      role: "Operations Head",
      initial: "A",
      color: C.accent,
    },
  ];

  return (
    <div className="about-page page-fade">
      <section className="about-hero">
        <h1 style={{ color: C.text }}>About SkyMart</h1>
        <p style={{ color: C.textMuted, fontSize: "18px" }}>
          SkyMart is a next-generation e-commerce platform built to make online
          shopping fast, fair, and enjoyable — for everyone.
        </p>
      </section>

     
      <div className="about-stats">
        {stats.map((s) => (
          <div
            key={s.label}
            className="glow-card"
            style={{
              background: C.surface,
              border: `2px solid ${s.color}`,
              "--glow-color": s.color,
            }}
          >
            <h2 style={{ color: s.color }}>{s.val}</h2>
            <p style={{ color: C.text }}>{s.label}</p>
          </div>
        ))}
      </div>

      <div className="about-story">
        <h2 style={{ fontSize: "36px", fontWeight: 900 }}>Our Story</h2>
        <div className="story-content" style={{ color: C.textMuted }}>
          <p>
            SkyMart started in 2022 as a side project by{" "}
            <strong>Ashutosh Aman</strong>—tired of bloated, slow e-commerce
            experiences. We asked: what if shopping online was actually
            enjoyable?
          </p>
          <p>
            Three years later, SkyMart serves over 50,000 customers. We stock
            electronics, fashion, and essentials—all at prices that don't
            require a second mortgage.
          </p>
        </div>
      </div>

      {/* Mera team  */}
      <section>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          Meet the Team
        </h2>
        <div className="team-grid">
          {team.map((m) => (
            <div
              key={m.name}
              className="team-member"
              style={{ background: C.surface, border: `1px solid ${C.border}` }}
            >
              <div className="initial-avatar" style={{ background: m.color }}>
                {m.initial}
              </div>
              <h4 style={{ color: C.text }}>{m.name}</h4>
              <p style={{ color: C.textMuted, fontSize: "13px" }}>{m.role}</p>
            </div>
          ))}
        </div>
      </section>

     
      <div
        className="about-cta"
        style={{ background: C.primary, color: "#fff" }}
      >
        <h2>Ready to shop?</h2>
        <p style={{ margin: "15px 0 30px", opacity: 0.9 }}>
          Explore thousands of products at unbeatable prices.
        </p>
        <button
          onClick={() => navigate("/shop")}
          style={{
            padding: "15px 40px",
            borderRadius: "12px",
            border: "none",
            fontWeight: 800,
            background: "#fff",
            color: C.primary,
            cursor: "pointer",
          }}
        >
          Browse Products
        </button>
      </div>

      <footer
        style={{
          marginTop: "80px",
          textAlign: "center",
          padding: "40px 0",
          borderTop: `1px solid ${C.border}`,
        }}
      >
        
      </footer>
    </div>
  );
}
