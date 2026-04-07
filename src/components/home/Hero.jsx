import "../../style/Hero.css";

export default function Hero({ user, onShopNow, C }) {
  const hours = new Date().getHours();
  const greeting =
    hours < 12
      ? "Good morning"
      : hours < 18
        ? "Good afternoon"
        : "Good evening";

  
  const formatName = (email) => {
    if (!email) return "User";
    const prefix = email.split("@")[0]; 
    return prefix
      .split(/[._\d]+/) 
      .filter(Boolean) 
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize
      .join(" "); 
  };

  const displayName = user?.name || formatName(user?.email);

  return (
    <section
      className="dashboard-hero"
      style={{ background: C.surfaceAlt, border: `1px solid ${C.border}` }}
    >
      <div className="hero-main-card">
        <div className="hero-text">
          <div
            className="greeting-pill"
            style={{ background: C.primaryLight, color: C.primary }}
          >
            {greeting}
          </div>
          <h1 style={{ color: C.text }}>
            Welcome back,
            <br />
            <span className="user-name-display">{displayName}</span>
          </h1>
          <p className="hero-desc" style={{ color: C.textMuted }}>
            Discover today's picks — hand-curated products across electronics,
            fashion, and more.
          </p>

          <div className="hero-btns">
            <button
              className="btn-primary"
              style={{ background: C.primary }}
              onClick={onShopNow}
            >
              Shop Now
            </button>
            <button
              className="btn-secondary"
              style={{ border: `1px solid ${C.border}`, color: C.text }}
              onClick={onShopNow}
            >
              View All
            </button>
          </div>
        </div>

        <div className="hero-stats-mini">
          <div
            className="mini-stat-box"
            style={{ background: C.surface, border: `1px solid ${C.border}` }}
          >
            <span className="stat-val" style={{ color: C.primary }}>
              20+
            </span>
            <span className="stat-lab" style={{ color: C.text }}>
              Products
            </span>
          </div>
          <div
            className="mini-stat-box"
            style={{ background: C.surface, border: `1px solid ${C.border}` }}
          >
            <span className="stat-val" style={{ color: C.success }}>
              Free
            </span>
            <span className="stat-lab" style={{ color: C.text }}>
              Delivery
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
