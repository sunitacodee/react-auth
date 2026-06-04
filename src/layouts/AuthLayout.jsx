import React, { useState } from 'react';
import '../css/dashboard.css'; // Importing our plain HTML custom styles
import { Outlet } from "react-router-dom";
import { NavLink } from 'react-router-dom';
export default function AuthLayout({children}) {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Mock Data
  const user = {
    name: 'Alex Morgan',
    email: 'alex.morgan@example.com',
    role: 'Administrator'
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard' ,path: '/dashboard'},
    { id: 'profile', label: 'Profile' ,path: '/profile', },
    { id: 'settings', label: 'Settings' ,path: '/settings',},
    { id: 'analytics', label: 'Analytics' ,path: '/analytics'}
  ];

  return (
    <div className="app-container">
      
      {/* --- SIDEBAR --- */}
      <aside className="sidebar">
        <div className="logo-section">
          <div className="logo-icon">A</div>
          <span className="logo-text">AcmeCorp</span>
        </div>

        {/* <nav>
          <ul className="menu-list">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveMenu(item.id)}
                  className={`menu-button ${activeMenu === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav> */}

        <nav>
  <ul className="menu-list">
    {menuItems.map((item) => (
      <li key={item.id}  className={({ isActive }) => `menu-item ${isActive ? ' active' : ' no-class'}`}>
        <NavLink
          to={item.path}
          className='menu-button'
        >
          {item.label}
        </NavLink>
      </li>
    ))}
  </ul>
</nav>
      </aside>

      {/* --- MAIN RIGHT WRAPPER --- */}
      <div className="main-wrapper">
        
        {/* --- HEADER --- */}
        <header className="header">
          <div 
            className="user-profile-container"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            {/* Click/Hover Trigger */}
            <button 
              className="user-trigger" 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div className="avatar">{user.name.charAt(0)}</div>
              <div className="user-info">
                <p className="user-name">{user.name}</p>
                <p className="user-role">{user.role}</p>
              </div>
            </button>

            {/* Dropdown Menu */}
            <div className={`profile-dropdown ${isDropdownOpen ? 'is-open' : ''}`}>
              <div className="dropdown-header">
                <p className="user-name">{user.name}</p>
                <p className="dropdown-email">{user.email}</p>
              </div>
              <button className="dropdown-item">Account Settings</button>
              <button className="dropdown-item">Help & Support</button>
              <button className="dropdown-item" style={{ color: '#ef4444' }}>Log Out</button>
            </div>
          </div>
        </header>

        {/* --- DYNAMIC MAIN CONTENT --- */}
        <main className="main-content">
             <Outlet/>
        {children}
          {/* <div className="content-card">
            <h1 style={{ textTransform: 'capitalize', marginBottom: '0.5rem' }}>{activeMenu}</h1>
            <p style={{ color: '#64748b' }}>
              Showing display configurations for your {activeMenu} interface.
            </p>
          </div> */}

        </main>

        {/* --- FOOTER --- */}
        <footer className="footer">
          &copy; {new Date().getFullYear()} AcmeCorp. All rights reserved.
        </footer>

      </div>
    </div>
  );
}