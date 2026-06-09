import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
export default function Header({user}) {
      const [isDropdownOpen, setIsDropdownOpen] = useState(false);
      const {logout}=useAuth()

  return (
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
              <button className="dropdown-item" style={{ color: '#ef4444' }} onClick={logout}>Log Out</button>
            </div>
          </div>
        </header>
  )
}

