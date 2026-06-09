
import { S } from "../../css/styles";

export function LoadingScreen() {
  return (
    <div style={{ ...S.page, flexDirection: "column", gap: 12 }}>
      <Spinner size={28} />
      <span style={{ color: "var(--color-text-secondary)", fontSize: 14 }}>
        Loading session…
      </span>
    </div>
  );
}

/**
 * Inline spinner. Uses currentColor so it inherits from its parent.
 * Usage: <Spinner />  or  <Spinner size={24} />
 */
export function Spinner({ size = 18 }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: size,
        height: size,
        border: "2px solid currentColor",
        borderTopColor: "transparent",
        borderRadius: "50%",
        animation: "spin 0.7s linear infinite",
      }}
    />
  );
}