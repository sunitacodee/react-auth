
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext"
import { Spinner } from "./common/loadingScreen";

export default function SignUp() {
    const { register } = useAuth(); // add register to your AuthContext
    const navigate = useNavigate();

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirm: "",
        userType: "",
    });

    const [error, setError] = useState("");
    const [busy, setBusy] = useState(false);
    const [showPass, setShowPass] = useState(false);

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");

        const { firstName, lastName, username, email, password, confirm, userType } = form;

        if (!firstName || !lastName || !username || !email || !password || !confirm || !userType) {
            return setError("All fields are required.");
        }

        if (password !== confirm) {
            return setError("Passwords do not match.");
        }

        try {
            setBusy(true);

            await register({
                firstName,
                lastName,
                username,
                email,
                password,
                userType,
            });

            navigate("/dashboard");
        } catch (err) {
            setError(err.message || "Something went wrong");
        } finally {
            setBusy(false);
        }
    }

    return (
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6">
                Create Account
            </h2>

            <p>Fill in your details to get started.</p>

            <form onSubmit={handleSubmit} className="signup-form" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div className="flex gap-6">
                    {["employer", "jobSeeker"].map((type) => (
                        <label key={type} className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="userType"
                                value={type}
                                checked={form.userType === type}
                                onChange={handleChange}
                                className="accent-blue-600"
                                required
                            />
                            {type === "employer" ? "Employer" : "Job Seeker"}
                        </label>
                    ))}
                </div>
                <div className="mb-4">
                    <label className="label">First Name</label>
                    <input
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="First name"
                        className="input"
                        required
                        minLength={2}
                        maxLength={30}
                    />
                </div>
                <div className="mb-4">
                    <label className="label">Last Name</label>
                    <input name="lastName" type="text" value={form.lastName} onChange={handleChange}
                        placeholder="Enter your last name" className="input"
                        autoComplete="lastName" />
                </div>

                <div className="mb-4">
                    <label className="label">Username</label>
                    <input name="username" type="text" value={form.username} onChange={handleChange}
                        placeholder="Enter your username" className="input"
                        autoComplete="username" />
                </div>
                <div className="mb-4">
                    <label className="label">Email</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange}
                        placeholder="Enter your email" className="input"
                        autoComplete="email" />
                </div>
                <div className="mb-4">
                    <label className="label">Password</label>
                    <div style={{ position: "relative" }}>
                        <input 
                            name="password" type={showPass ? "text" : "password"} 
                            value={form.password}
                            onChange={handleChange}
                            placeholder="••••••••" 
                            className="input"
                            autoComplete="password"
                            required
                            />
                        <button type="button" onClick={() => setShowPass(v => !v)}
                            className="eyeBtn" aria-label={showPass ? "Hide password" : "Show password"}>
                            {showPass ? "🙈" : "👁"}
                        </button>

                    </div>
                </div>
                <div className="mb-4">
                    <label className="label">Confirm Password</label>
                    <input 
                    name="confirm" 
                    type="password" 
                    value={form.confirm} 
                    onChange={handleChange}
                    placeholder="••••••••" 
                    className="input"
                    autoComplete="new-password"
                    required />
                </div>
                {error && <div className="errorBox" >{error}</div>}
                <button type="submit" className="btn btnPrimary" onClick="handleSubmit" disabled={busy}>
                    {busy ? <Spinner /> : "Create account →"}
                </button>
            </form>
        </div>
    );
}