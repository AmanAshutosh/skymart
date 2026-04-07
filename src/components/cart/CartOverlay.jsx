import "../../style/CartOverlay.css";

export default function CartOverlay({
  cart,
  setCart,
  setCartOpen,
  C,
  showToast,
}) {
  const total = cart.reduce((s, p) => s + p.price * p.qty, 0);

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item,
      ),
    );
  };

  return (
    <div className="cart-backdrop" onClick={() => setCartOpen(false)}>
      <div
        className="cart-panel"
        style={{ background: C.surface }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            padding: "24px",
            borderBottom: `1px solid ${C.border}`,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h3 style={{ fontFamily: "Syne" }}>Your Cart</h3>
          <button
            onClick={() => setCartOpen(false)}
            style={{
              border: "none",
              background: "none",
              fontSize: 20,
              cursor: "pointer",
              color: C.text,
            }}
          >
            ✕
          </button>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "0 24px" }}>
          {cart.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "40px 0",
                color: C.textMuted,
              }}
            >
              Cart is empty
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="cart-item-row"
                style={{ borderBottom: `1px solid ${C.border}` }}
              >
                <img
                  src={item.image}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 8,
                    objectFit: "cover",
                  }}
                  alt=""
                />
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 14, fontWeight: 600 }}>{item.name}</p>
                  <p style={{ color: C.primary, fontWeight: 700 }}>
                    ${item.price}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginTop: 8,
                    }}
                  >
                    <button
                      onClick={() => updateQty(item.id, -1)}
                      style={{
                        border: `1px solid ${C.border}`,
                        background: C.surfaceAlt,
                        width: 24,
                        height: 24,
                      }}
                    >
                      -
                    </button>
                    <span>{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.id, 1)}
                      style={{
                        border: `1px solid ${C.border}`,
                        background: C.surfaceAlt,
                        width: 24,
                        height: 24,
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div style={{ padding: "24px", borderTop: `1px solid ${C.border}` }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <span style={{ fontWeight: 600 }}>Total</span>
              <span style={{ fontWeight: 800, fontSize: 20 }}>
                ${total.toFixed(2)}
              </span>
            </div>
            <button
              onClick={() => {
                showToast("Order Placed!");
                setCart([]);
                setCartOpen(false);
              }}
              style={{
                width: "100%",
                padding: "16px",
                background: C.primary,
                color: "#fff",
                border: "none",
                borderRadius: 12,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
