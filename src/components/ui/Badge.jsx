export default function Badge({ text, c }) {
  const colors = {
    "Best Seller": ["#fef3c7", "#92400e"],
    Sale: ["#fee2e2", "#991b1b"],
    New: ["#d1fae5", "#065f46"],
    Hot: ["#fce7f3", "#831843"],
  };
  const dark = {
    "Best Seller": ["#78350f", "#fcd34d"],
    Sale: ["#7f1d1d", "#fca5a5"],
    New: ["#064e3b", "#6ee7b7"],
    Hot: ["#500724", "#fbcfe8"],
  };
  const [bg, fg] =
    c === "dark"
      ? dark[text] || ["#1e3a5f", "#93c5fd"]
      : colors[text] || ["#dbeafe", "#1e40af"];

  return (
    <span
      style={{
        position: "absolute",
        top: 12,
        left: 12,
        zIndex: 3,
        background: bg,
        color: fg,
        fontSize: 10,
        fontWeight: 800,
        padding: "4px 8px",
        borderRadius: 20,
        textTransform: "uppercase",
      }}
    >
      {text}
    </span>
  );
}
