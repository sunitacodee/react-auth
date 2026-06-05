import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {

    const menuItems = [
    { id: 'dashboard', label: 'Dashboard', path: '/dashboard' },
    { id: 'profile', label: 'Profile', path: '/profile', },
    { id: 'settings', label: 'Settings', path: '/settings', },
    { id: 'analytics', label: 'Analytics', path: '/analytics' }
  ];
    const [activeMenu, setActiveMenu] = useState('dashboard');
  
  return (
    <aside className="sidebar">
        <div className="logo-section">
          <div className="logo-icon">A</div>
          <span className="logo-text">Subhshree</span>
        </div>
        <nav>
          <ul className="menu-list">
            {menuItems.map((item) => (
              <li key={item.id}>
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
  )
}

