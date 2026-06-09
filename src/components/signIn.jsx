
import { useState } from "react";
import { useNavigate } from "react-router";
import {useAuth} from "../context/AuthContext"
import { Spinner } from "./common/loadingScreen";

export default function SignIn() {
  console.log("login page loading")
  const { login } = useAuth();
  const navigate  = useNavigate();

  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [error,    setError]    = useState("");
  const [busy,     setBusy]     = useState(false);
  const [showPass, setShowPass] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) { setError("All fields are required."); return; }
    setBusy(true); setError("");
    console.log("email: "+email,"password: "+password)
    try {
      await login({email, password});
      console.log("dashboRD NAVIGATE")
      navigate("/dashboard");
    } catch (err) {
     console.log("error:"+err.message)
      setError(err.message);
    } finally {
      console.log("finally")
      setBusy(false);
    }
  }

  return (
  
        <div className="loginCard" >
        
          <h1 className="loginTitle" >Sign in</h1>
          <p className="loginSub" >Welcome back. Enter your credentials.</p>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div className="fieldGroup">
              <label className="label">Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com" className="input" autoComplete="email" />
            </div>
            <div className="fieldGroup">
              <label className="label">Password</label>
              <div style={{ position: "relative" }}>
                <input type={showPass ? "text" : "password"} value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••" className="input p-44"
                  autoComplete="current-password" />
                <button type="button" onClick={() => setShowPass(v => !v)} className="eyeBtn"
                  aria-label={showPass ? "Hide password" : "Show password"}>
                  {showPass ? "🙈" : "👁"}
                </button>
              </div>
            </div>
            {error && <div className="errorBox">{error}</div>}
            <button type="submit" className="btn btnPrimary mt-4" disabled={busy}>
              {busy ? <Spinner /> : "Sign in →"}
            </button>
          </form>
          </div>
          

          
  );
}