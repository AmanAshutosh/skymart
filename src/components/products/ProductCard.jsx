import "../../style/ProductCard.css";

export default function ProductCard({ p, C, addToCart, idx }) {
  
  const imagePath = `/assets/products/${p.image}`;

  return (
    <div
      className="product-card"
      style={{
        background: C.surface,
        border: `1px solid ${C.border}`,
        animationDelay: `${idx * 0.05}s`,
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
        overflow: "hidden",
        transition: "transform 0.3s ease",
      }}
    >
      <div
        className="img-wrapper"
        style={{ position: "relative", height: "200px", overflow: "hidden" }}
      >
        <img
          src={imagePath}
          alt={p.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div
        style={{
          padding: "16px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span
          style={{
            fontSize: 11,
            color: C.primary,
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          {p.category}
        </span>

        <h3
          style={{
            fontSize: 15,
            margin: "6px 0",
            color: C.text,
            height: "40px",
            lineHeight: "1.4",
            overflow: "hidden",
          }}
        >
          {p.name}
        </h3>

        <div
          style={{
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
          }}
        >
          
          <span style={{ color: "#ffc107" }}>⭐</span>
          <span style={{ fontSize: 12, color: C.textMuted, marginLeft: 6 }}>
            ({p.rating})
          </span>
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: 18, fontWeight: 700, color: C.text }}>
            ₹{p.price.toFixed(2)}
          </span>

          <button
            onClick={() => addToCart(p)}
            style={{
              padding: "8px 16px",
              borderRadius: 10,
              border: "none",
              fontWeight: 700,
              background: C.primary,
              color: "#fff",
              cursor: "pointer",
              transition: "opacity 0.2s",
            }}
            className="add-to-cart-btn"
          >
            Add +
          </button>
        </div>
      </div>
    </div>
  );
}
