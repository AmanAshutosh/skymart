import "../../style/CategoryGrid.css";

export default function CategoryGrid({
  categories,
  setPage,
  setActiveCategory,
  C,
}) {
  const icons = {
    Electronics: "⚡",
    Fashion: "👗",
    "Home & Garden": "🏡",
    Sports: "🏃",
    Books: "📚",
    Beauty: "✨",
  };

  return (
    <div style={{ padding: "60px 8% 20px" }}>
      <h2
        style={{
          fontFamily: "Syne",
          fontSize: 28,
          marginBottom: 30,
          color: C.text,
        }}
      >
        Shop by Category
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
          gap: 20,
        }}
      >
        {categories
          .filter((c) => c !== "All")
          .map((cat) => (
            <div
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setPage("products");
              }}
              style={{
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderRadius: 20,
                padding: "24px",
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = C.shadow)}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <div style={{ fontSize: 32, marginBottom: 12 }}>{icons[cat]}</div>
              <span style={{ fontWeight: 600, fontSize: 14, color: C.text }}>
                {cat}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}
