import { useState, useEffect } from "react";
import ProductCard from "../components/products/ProductCard";
import { ALL_PRODUCTS } from "../constants/products";
import "../style/Shop.css";

export default function Shop({
  C,
  theme,
  addToCart,
  activeCategory,
  setActiveCategory,
}) {
  const [sortBy, setSortBy] = useState("Featured");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    "All",
    "Electronics",
    "Clothing",
    "Furniture",
    "Home",
    "Sports",
    "Accessories",
  ];

  const filteredProducts = ALL_PRODUCTS.filter(
    (p) => activeCategory === "All" || p.category === activeCategory,
  ).sort((a, b) => {
    if (sortBy === "LowToHigh") return a.price - b.price;
    if (sortBy === "HighToLow") return b.price - a.price;
    if (sortBy === "TopRated") return b.rating - a.rating;
    return 0;
  });

  return (
    <section className="shop-page page-fade">
      <div className="section-container" style={{ paddingBottom: "20px" }}>
        <h1 style={{ fontSize: "32px", fontWeight: 900, color: C.text }}>
          All Products
        </h1>
        <p style={{ color: C.textMuted, fontWeight: 500 }}>
          {filteredProducts.length} products found
        </p>
      </div>

      <div className="section-container shop-controls">
        <div className="filter-group">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
              style={{
                background: activeCategory === cat ? C.primary : C.surface,
                color: activeCategory === cat ? "#fff" : C.text,
                border: `1.5px solid ${activeCategory === cat ? C.primary : C.border}`,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <select
          className="sort-dropdown"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{
            background: C.surface,
            color: C.text,
            border: `1.5px solid ${C.border}`,
          }}
        >
          <option value="Featured">Featured</option>
          <option value="LowToHigh">Price: Low → High</option>
          <option value="HighToLow">Price: High → Low</option>
          <option value="TopRated">Top Rated</option>
        </select>
      </div>

      <div className="section-container grid-container">
        {filteredProducts.map((p) => (
          <ProductCard
            key={p.id}
            p={p}
            C={C}
            theme={theme}
            addToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
}
