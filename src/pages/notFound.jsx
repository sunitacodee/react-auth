
import { useNavigate } from "react-router-dom";

export function NotFoundPage() {
  const navigate  = useNavigate();
  return (
      <div className="page">
        <div style={{ fontSize: 72, opacity: 0.12, fontWeight: 700 }}>404</div>
        <h2 style={{ margin: 0, fontSize: 20 }}>Page not found</h2>
        <p style={{ color: "var(--color-text-secondary)", margin: 0, fontSize: 14 }}>
          The route you're looking for doesn't exist.
        </p>
        <button onClick={() => navigate("/")}>
          Go home
        </button>
      </div>
  );
}
