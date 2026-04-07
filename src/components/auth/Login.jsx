import { useState } from "react";
import "../../style/Login.css";

export default function Login({ theme, setTheme, setPage, setUser, C }) {
  // Mode state decide karta hai ki Login form dikhana hai ya Signup
  const [mode, setMode] = useState("login");
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const stats = [
    { value: "20K+", label: "Products" },
    { value: "50K+", label: "Users" },
    { value: "4.9★", label: "Rating" },
  ];

  // Form submit hone par chalne wala main logic
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Fake API delay simulation (Ghar baithe feel lene ke liye)
    setTimeout(() => {
      const displayName =
        mode === "signup" ? data.name : data.email.split("@")[0];

      // User data set karke seedha Home page pe bhej dena
      setUser({
        name: displayName,
        email: data.email,
        id: Date.now(),
      });
      setPage("home");
      setLoading(false);
    }, 900);
  };

  const isLogin = mode === "login";

  return (
    <div
      className="login-split-container"
      style={{ background: C.bg, color: C.text }}
    >
      {/* LEFT PANEL: Logo, Tagline aur Glowing Stats ke liye */}
      <div className="login-left-branding">
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              background: "#fff",
              width: 32,
              height: 32,
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: C.primary,
              fontWeight: 800,
            }}
          >
            S
          </div>
          <span style={{ fontWeight: 800, fontSize: 22, color: "#fff" }}>
            SkyMart
          </span>
        </div>

        <div className="branding-content">
          <h1>
            Shop the future.
            <br />
            Today.
          </h1>
          <p>Thousands of products, lightning-fast delivery.</p>
        </div>

        {/* Stats Grid: Loop chala ke 3 boxes dikhaye gaye hain */}
        <div className="glowing-stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-box">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT PANEL: Theme toggle aur main Login/Signup card */}
      <div className="login-right-form-side">
        {/* Dark/Light mode switch karne wala round button */}
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            border: `1px solid ${C.border}`,
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            cursor: "pointer",
            background: C.surfaceAlt,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        {/* Main Card: Hover effects ke sath form hold karta hai */}
        <div
          className="login-form-card"
          style={{ background: C.surface, border: `1.5px solid ${C.border}` }}
        >
          <div className="login-header" style={{ marginBottom: "32px" }}>
            <h2>{isLogin ? "Sign in" : "Sign up"}</h2>
            <p style={{ color: C.textMuted, marginTop: 4, fontSize: 14 }}>
              {isLogin ? "Enter your credentials" : "Join us today"}
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Full Name field: Sirf Signup mode me hi nazar aayega */}
            {!isLogin && (
              <div className="login-input-group">
                <label style={{ color: C.text }}>Full name</label>
                <input
                  className="login-input"
                  type="text"
                  required
                  placeholder="Ashutosh Aman"
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  style={{
                    background: C.surfaceAlt,
                    border: `1.5px solid ${C.border}`,
                    color: C.text,
                  }}
                />
              </div>
            )}

            <div className="login-input-group">
              <label style={{ color: C.text }}>Email address</label>
              <input
                className="login-input"
                type="email"
                required
                placeholder="name@email.com"
                onChange={(e) => setData({ ...data, email: e.target.value })}
                style={{
                  background: C.surfaceAlt,
                  border: `1.5px solid ${C.border}`,
                  color: C.text,
                }}
              />
            </div>

            <div
              className="login-input-group"
              style={{ marginBottom: isLogin ? "12px" : "24px" }}
            >
              <label style={{ color: C.text }}>Password</label>
              <input
                className="login-input"
                type="password"
                required
                placeholder="••••••••"
                onChange={(e) => setData({ ...data, password: e.target.value })}
                style={{
                  background: C.surfaceAlt,
                  border: `1.5px solid ${C.border}`,
                  color: C.text,
                }}
              />
            </div>

            {/* Main CTA Button: Loading ke waqt text badal jayega */}
            <button
              className="btn-login-main"
              style={{ background: C.primary, color: "white" }}
            >
              {loading
                ? "Processing..."
                : isLogin
                  ? "Sign In →"
                  : "Create Account →"}
            </button>
          </form>

          {/* Mode Switcher: User ko login se signup pe shift karne ke liye */}
          <div style={{ textAlign: "center", marginTop: "24px", fontSize: 14 }}>
            <span style={{ color: C.textMuted }}>
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
            </span>
            <span
              onClick={() => {
                setMode(isLogin ? "signup" : "login");
                setData({ name: "", email: "", password: "" });
              }}
              style={{ color: C.primary, fontWeight: 600, cursor: "pointer" }}
            >
              {isLogin ? "Create one" : "Sign In"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
