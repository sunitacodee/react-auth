import '../css/dashboard.css';
import { Outlet } from "react-router-dom";
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import Sidebar from '../components/common/sidebar';
import {useAuth} from "../context/AuthContext"
import { useNavigate } from "react-router";

export default function AuthLayout({ children }) {

  const auth = useAuth();
  const navigate = useNavigate()



const { user } = auth;

if (!auth || !user) {
  navigate('/login')
}
console.log("user get:", user);

console.log("user get: "+user)
  

  return (
    <div className="app-container">

      {/* --- SIDEBAR --- */}
      <Sidebar/>

      {/* --- MAIN RIGHT WRAPPER --- */}
      <div className="main-wrapper">
        <Header 
        user={user}
        />
        {/* --- DYNAMIC MAIN CONTENT --- */}
        <main className="main-content">
          <Outlet />
          {children}
        </main>

        <Footer />

      </div>
    </div>
  );
}