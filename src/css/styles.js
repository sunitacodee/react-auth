// src/styles/styles.js
// ─── Shared style tokens ─────────────────────────────────────────────────────

const spinStyle = document.createElement("style");
spinStyle.textContent = "@keyframes spin { to { transform: rotate(360deg); } }";
document.head.appendChild(spinStyle);

export const S = {
  // ── Layout ──────────────────────────────────────────────────────────────
  page: {
    flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
    padding: "2rem", minHeight: "100vh",
  },
  // Auth shell: header(52) + body[sidebar(220) + main] + footer(48)
  authShell: {
    display: "flex", flexDirection: "column",
    minHeight: "100vh", background: "var(--color-background-tertiary)",
  },
  authBody: {
    display: "flex", flex: 1, overflow: "hidden",
  },
  authMain: {
    flex: 1, overflowY: "auto", padding: "2rem 1.75rem",
  },
  // Public shell: header(60) + main + footer(auto)
  publicShell: {
    display: "flex", flexDirection: "column", minHeight: "100vh",
    background: "var(--color-background-tertiary)",
  },
  publicMain: {
    flex: 1,
  },

  pageContent: { maxWidth: "100%", margin: "0 auto" },
  pageHeader: {
    display: "flex", justifyContent: "space-between",
    alignItems: "flex-start", marginBottom: 24,
  },
  pageTitle: { margin: "0 0 4px", fontSize: 22, fontWeight: 600, letterSpacing: "-0.5px" },
  pageDesc: { margin: 0, color: "var(--color-text-secondary)", fontSize: 14 },

  // ── Login card ──────────────────────────────────────────────────────────
  loginCard: {
    background: "var(--color-background-primary)",
    border: "0.5px solid var(--color-border-tertiary)",
    borderRadius: "var(--border-radius-lg)",
    padding: "2rem 2.25rem",
    width: "100%", maxWidth: "700px",
  },
  brand: { display: "flex", alignItems: "center", gap: 8, marginBottom: 28 },
  brandIcon: {
    width: 34, height: 34, background: "#1a1a2e",
    borderRadius: 8, display: "flex", alignItems: "center",
    justifyContent: "center", color: "#a78bfa", fontSize: 18,
  },
  brandName: { fontWeight: 700, fontSize: 17, letterSpacing: "-0.3px" },
  loginTitle: { margin: "0 0 4px", fontSize: 22, fontWeight: 600, letterSpacing: "-0.5px" },
  loginSub: { margin: "0 0 24px", color: "var(--color-text-secondary)", fontSize: 14 },
  demoHint: {
    marginTop: 20, background: "var(--color-background-info)",
    color: "var(--color-text-info)", borderRadius: "var(--border-radius-md)",
    padding: "10px 14px", fontSize: 12.5, lineHeight: 1.7,
  },

  // ── Form ────────────────────────────────────────────────────────────────
  fieldGroup: { display: "flex", flexDirection: "column", gap: 6 },
  label: { fontSize: 13, fontWeight: 500, color: "var(--color-text-secondary)" },
  input: {
    width: "100%", padding: "9px 12px", fontSize: 14, boxSizing: "border-box",
    border: "0.5px solid var(--color-border-secondary)",
    borderRadius: "var(--border-radius-md)",
    background: "var(--color-background-primary)",
    color: "var(--color-text-primary)", outline: "none",
  },
  eyeBtn: {
    position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)",
    background: "none", border: "none", cursor: "pointer", fontSize: 15, padding: 0,
  },
  errorBox: {
    background: "var(--color-background-danger)", color: "var(--color-text-danger)",
    border: "0.5px solid var(--color-border-danger)",
    borderRadius: "var(--border-radius-md)", padding: "8px 12px", fontSize: 13,
  },

  // ── Buttons ─────────────────────────────────────────────────────────────
  btn: {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    gap: 6, padding: "9px 18px", fontSize: 14, fontWeight: 500,
    borderRadius: "var(--border-radius-md)", cursor: "pointer",
    border: "0.5px solid transparent", transition: "opacity 0.15s",
  },
  btnPrimary: { background: "#1a1a2e", color: "#fff", border: "none" },
  btnOutline: {
    background: "transparent", border: "0.5px solid var(--color-border-secondary)",
    color: "var(--color-text-primary)",
  },
  btnDanger: {
    background: "var(--color-background-danger)", color: "var(--color-text-danger)",
    border: "0.5px solid var(--color-border-danger)",
  },
  btnGhost: {
    background: "none", border: "none", cursor: "pointer",
    color: "var(--color-text-secondary)", padding: "6px 10px",
    borderRadius: "var(--border-radius-md)", fontSize: 14,
  },

  // ── Cards & data ────────────────────────────────────────────────────────
  card: {
    background: "var(--color-background-primary)",
    border: "0.5px solid var(--color-border-tertiary)",
    borderRadius: "var(--border-radius-lg)",
    padding: "1rem 1.25rem", marginBottom: 12,
  },
  statsGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 16 },
  statCard: {
    background: "var(--color-background-secondary)",
    borderRadius: "var(--border-radius-md)",
    padding: "14px 16px", display: "flex", flexDirection: "column", gap: 4,
  },

  // ── User / profile ──────────────────────────────────────────────────────
  avatar: {
    width: 32, height: 32, borderRadius: "50%",
    background: "#1a1a2e", color: "#a78bfa",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: 12, fontWeight: 700, flexShrink: 0,
  },
  avatarBadge: { display: "flex", alignItems: "center", gap: 10 },
  roleBadge: {
    display: "inline-block", marginTop: 6,
    background: "var(--color-background-info)", color: "var(--color-text-info)",
    fontSize: 11, padding: "2px 10px", borderRadius: 20, fontWeight: 500,
  },
  profileRow: {
    display: "flex", justifyContent: "space-between",
    padding: "8px 0", borderBottom: "0.5px solid var(--color-border-tertiary)",
  },
};