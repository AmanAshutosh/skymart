import { NavLink, Link } from "react-router-dom";
import "../../style/Navbar.css";

export default function Navbar({
  user,
  theme,
  setTheme,
  cartCount,
  setCartOpen,
  C,
  onLogout,
}) {
  const navLinks = [
    { name: "HOME", id: "home" },
    { name: "SHOP", id: "shop" },
    { name: "ABOUT", id: "about" },
  ];

  return (
    <nav
      className="navbar"
      style={{
        background: C.surfaceAlt,
        borderBottom: `1px solid ${C.border}`,
      }}
    >
      {/* LEFT: Logo */}
      <Link to="/home" className="nav-left">
        <div className="logo-icon" style={{ background: C.primary }}>
          S
        </div>
        <span className="logo-text" style={{ color: C.text }}>
          SkyMart
        </span>
      </Link>

      {/* CENTER: Menu  Router NavLink ke saath */}
      <div className="nav-center">
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={`/${link.id}`}
            className="nav-link-btn"
            style={({ isActive }) => ({ color: isActive ? C.primary : C.text })}
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      
      <div className="nav-right">
        <button
          className="nav-icon-btn"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          style={{ color: C.text }}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <button
          className="nav-icon-btn"
          onClick={() => setCartOpen(true)}
          style={{ color: C.text }}
        >
          🛒
          {cartCount > 0 && (
            <span className="cart-badge" style={{ background: C.primary }}>
              {cartCount}
            </span>
          )}
        </button>

        <div
          className="nav-user-area"
          style={{ borderLeft: `1px solid ${C.border}` }}
        >
          <span className="user-email" style={{ color: C.textMuted }}>
            {user?.email}
          </span>
          <button
            className="logout-btn"
            onClick={onLogout}
            style={{ color: C.danger }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
