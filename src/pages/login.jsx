import { useState } from "react";
import {S} from '../css/styles'
import SignIn from "../components/signIn";
import SignUp from "../components/signup";

const tabBar = {
  display: "flex",
  borderBottom: "2px solid #e5e7eb",
  marginBottom: 24,
};

const tabBtn = (active) => ({
  flex: 1,
  padding: "10px 0",
  background: "none",
  border: "none",
  borderBottom: active ? "2px solid #6366f1" : "2px solid transparent",
  marginBottom: -2,
  fontWeight: active ? 700 : 400,
  color: active ? "#6366f1" : "#6b7280",
  cursor: "pointer",
  fontSize: 15,
  transition: "all 0.2s",
});


export default function Login() {
  const [tab, setTab] = useState("signin"); // "signin" | "signup"

  return (
    <div style={{ ...S.page, minHeight: "calc(100vh - 60px)" }}>
      <div style={S.loginCard}>

        {/* Brand */}
        <div style={S.brand}>
          <div style={S.brandIcon}>⬡</div>
          <span style={S.brandName}>Talent Capture</span>
        </div>

        {/* Tabs */}
        <div style={tabBar}>
          <button style={tabBtn(tab === "signin")} onClick={() => setTab("signin")}>
            Sign In
          </button>
          <button style={tabBtn(tab === "signup")} onClick={() => setTab("signup")}>
            Sign Up
          </button>
        </div>

       
        {/* Form */}
        {tab === "signin" ? <SignIn /> : <SignUp />}

      </div>
    </div>
  );
}