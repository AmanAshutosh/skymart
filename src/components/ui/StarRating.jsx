import "../../style/StarRating.css";


export default function StarRating({ rating, small }) {
  return (
    <span
      className="star-rating"
      style={{ display: "inline-flex", gap: 1, alignItems: "center" }}
    >
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          width={small ? 11 : 13}
          height={small ? 11 : 13}
          viewBox="0 0 12 12"
        >
          <path
            d="M6 1l1.3 3h3.2l-2.6 1.9.9 3L6 7.3 4.2 8.9l.9-3L2.5 4h3.2z"
            fill={s <= Math.round(rating) ? "#f59e0b" : "#e2e8f0"}
          />
        </svg>
      ))}
    </span>
  );
}
