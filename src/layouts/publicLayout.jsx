// layouts/AuthLayout.jsx
import { Outlet } from "react-router-dom";
import '../css/dashboard.css'
export default function PublicLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">
        <Outlet />
      </div>
    </div>
  );
}