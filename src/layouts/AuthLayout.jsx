import React, { useState } from 'react';
import '../css/dashboard.css';
import { Outlet } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import Sidebar from '../components/common/sidebar';
export default function AuthLayout({ children }) {

  // Mock Data
  const user = {
    name: 'Alex Morgan',
    email: 'alex.morgan@example.com',
    role: 'Administrator'
  };

  

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