export default function Toast({ toast, C }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 30,
        left: "50%",
        transform: "translateX(-50%)",
        background: toast.type === "success" ? C.success : C.danger,
        color: "#fff",
        padding: "12px 24px",
        borderRadius: 12,
        zIndex: 10000,
        animation: "toastIn 0.3s ease forwards",
        fontWeight: 600,
        boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
      }}
    >
      {toast.msg}
    </div>
  );
}
