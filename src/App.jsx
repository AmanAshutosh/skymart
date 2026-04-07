import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { COLORS, GF } from "./constants/theme";
import { ALL_PRODUCTS } from "./constants/products";

import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Hero from "./components/home/Hero";
import Shop from "./pages/Shop";
import About from "./pages/About";
import CartOverlay from "./components/cart/CartOverlay";
import Footer from "./components/layout/Footer";
import Toast from "./components/ui/Toast";

import "./style/App.css";

export default function App() {
  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem("skymart_user")),
  );
  const [theme, setTheme] = useState("light");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [toast, setToast] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const C = COLORS[theme];

  useEffect(() => {
    if (user) localStorage.setItem("skymart_user", JSON.stringify(user));
    else localStorage.removeItem("skymart_user");
  }, [user]);

  const addToCart = (p) => {
    setCart((prev) => {
      const ex = prev.find((x) => x.id === p.id);
      if (ex)
        return prev.map((x) => (x.id === p.id ? { ...x, qty: x.qty + 1 } : x));
      return [...prev, { ...p, qty: 1 }];
    });
    setToast({ msg: `${p.name} added!` });
    setTimeout(() => setToast(null), 2000);
  };

  if (!user && location.pathname !== "/login") return <Navigate to="/login" />;

  return (
    <div className="app-shell" style={{ background: C.bg, color: C.text }}>
      <style>{GF}</style>

      {user && (
        <Navbar
          user={user}
          theme={theme}
          setTheme={setTheme}
          cartCount={cart.length}
          setCartOpen={setCartOpen}
          C={C}
          onLogout={() => {
            setUser(null);
            navigate("/login");
          }}
        />
      )}

      <Routes>
        <Route
          path="/login"
          element={
            <Login
              theme={theme}
              setTheme={setTheme}
              setUser={setUser}
              C={C}
              onLogin={() => navigate("/home")}
            />
          }
        />

        <Route
          path="/home"
          element={
            <main className="page-fade">
              <Hero user={user} onShopNow={() => navigate("/shop")} C={C} />

              <div className="stats-grid-4">
                <div
                  className="stat-card"
                  style={{
                    border: `2px solid ${C.primary}`,
                    background: C.surface,
                  }}
                >
                  <div className="stat-icon">🛒</div>
                  <div>
                    <h3>{cart.length}</h3>
                    <p>Cart Items</p>
                    <span>In bag</span>
                  </div>
                </div>
                <div
                  className="stat-card"
                  style={{
                    border: `2px solid ${C.success}`,
                    background: C.surface,
                  }}
                >
                  <div className="stat-icon">💰</div>
                  <div>
                    <h3>
                      ₹
                      {cart.reduce((s, p) => s + p.price * p.qty, 0).toFixed(2)}
                    </h3>
                    <p>Value</p>
                    <span>Checkout</span>
                  </div>
                </div>
                <div
                  className="stat-card"
                  style={{
                    border: `2px solid ${C.warning}`,
                    background: C.surface,
                  }}
                >
                  <div className="stat-icon">⭐</div>
                  <div>
                    <h3>5</h3>
                    <p>Top Rated</p>
                    <span>Reviews</span>
                  </div>
                </div>
                <div
                  className="stat-card"
                  style={{
                    border: `2px solid ${C.accent}`,
                    background: C.surface,
                  }}
                >
                  <div className="stat-icon">📁</div>
                  <div>
                    <h3>6</h3>
                    <p>Categories</p>
                    <span>Browse</span>
                  </div>
                </div>
              </div>

              <div className="section-container flex-header">
                <h2>Shop by Category</h2>
                <button
                  className="see-all-link"
                  onClick={() => {
                    setActiveCategory("All");
                    navigate("/shop");
                  }}
                  style={{ color: C.primary }}
                >
                  View All →
                </button>
              </div>
              <div className="cat-grid-6">
                {[
                  "Electronics",
                  "Clothing",
                  "Furniture",
                  "Home",
                  "Sports",
                  "Accessories",
                ].map((cat) => (
                  <div
                    key={cat}
                    className="cat-box-mini"
                    style={{
                      background: C.surface,
                      border: `1px solid ${C.border}`,
                    }}
                    onClick={() => {
                      setActiveCategory(cat);
                      navigate("/shop");
                    }}
                  >
                    <span>{cat}</span>
                    <span>→</span>
                  </div>
                ))}
              </div>

              <div className="dual-list-container">
                {["Top Rated", "New Arrivals"].map((title, idx) => (
                  <div
                    key={title}
                    className="list-box"
                    style={{
                      background: C.surface,
                      border: `1px solid ${C.border}`,
                    }}
                  >
                    <div className="list-box-header">
                      <h3>{title}</h3>
                      <button
                        className="see-all-link"
                        onClick={() => {
                          setActiveCategory("All");
                          navigate("/shop");
                        }}
                        style={{ color: C.primary }}
                      >
                        See all →
                      </button>
                    </div>
                    {ALL_PRODUCTS.slice(idx * 5, (idx + 1) * 5).map((p) => (
                      <div
                        key={p.id}
                        className="product-list-row"
                        style={{ border: `1px solid ${C.border}` }}
                      >
                        <img
                          src={`/assets/products/${p.image}`}
                          className="row-img"
                          alt={p.name}
                        />
                        <div className="row-info">
                          <h4>{p.name}</h4>
                          <p style={{ color: C.primary }}>
                            ₹{p.price.toFixed(2)}
                          </p>
                        </div>
                        <button
                          className="add-bag-btn"
                          onClick={() => addToCart(p)}
                          style={{ color: C.text }}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                            <path d="M3 6h18" />
                            <path d="M16 10a4 4 0 0 1-8 0" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              <div className="features-3-grid">
                <div
                  className="feature-item"
                  style={{
                    border: `2px solid ${C.border}`,
                    background: C.surface,
                  }}
                >
                  <svg
                    className="feature-icon-svg"
                    style={{ color: C.primary }}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M1 3h15v13H1z M16 8h4l3 3v5h-7V8z" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                  <h4>Fast Delivery</h4>
                  <p style={{ color: C.textMuted }}>Same-day delivery</p>
                </div>
                <div
                  className="feature-item"
                  style={{
                    border: `2px solid ${C.border}`,
                    background: C.surface,
                  }}
                >
                  <svg
                    className="feature-icon-svg"
                    style={{ color: C.success }}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <h4>Secure Payments</h4>
                  <p style={{ color: C.textMuted }}>100% Encrypted</p>
                </div>
                <div
                  className="feature-item"
                  style={{
                    border: `2px solid ${C.border}`,
                    background: C.surface,
                  }}
                >
                  <svg
                    className="feature-icon-svg"
                    style={{ color: C.warning }}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <h4>Best Prices</h4>
                  <p style={{ color: C.textMuted }}>Match Guarantee</p>
                </div>
              </div>
            </main>
          }
        />

        <Route
          path="/shop"
          element={
            <Shop
              C={C}
              theme={theme}
              addToCart={addToCart}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          }
        />

        <Route path="/about" element={<About C={C} />} />

        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>

      <Footer C={C} />

      {cartOpen && (
        <CartOverlay
          cart={cart}
          setCart={setCart}
          setCartOpen={setCartOpen}
          C={C}
        />
      )}

      {toast && <Toast toast={toast} C={C} />}
    </div>
  );
}
