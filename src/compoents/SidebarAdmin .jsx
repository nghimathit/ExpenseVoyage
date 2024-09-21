import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './scss/SidebarAdmin.scss';

const SidebarAdmin = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(null); // Sử dụng null để không có menu nào mở ban đầu

  const toggleMenu = (menu) => {
    setIsMenuOpen(isMenuOpen === menu ? null : menu); // Đổi trạng thái khi chọn menu
  };

  return (
    <div className="sidebar-admin">
      <div className="sidebar-admin__logo">
        <h2>Admin Panel</h2>
      </div>
      <ul className="sidebar-admin__menu">
        <li>
          <Link to="/admin" className={isMenuOpen === 'dashboard' ? 'active' : ''}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin/users" className={isMenuOpen === 'users' ? 'active' : ''}>
            Users
          </Link>
        </li>
        <li>
          <Link to="/admin/Trip" className={isMenuOpen === 'trip' ? 'active' : ''}>
            Trips
          </Link>
        </li>
        <li>
          <button onClick={() => toggleMenu('managerTour')} className={isMenuOpen === 'managerTour' ? 'active' : ''}>
            Manager Tour {isMenuOpen === 'managerTour' ? '-' : '+'}
          </button>
          {isMenuOpen === 'managerTour' && (
            <ul className="sidebar-admin__submenu">
              <li>
                <Link to="/admin/tours/all">All Tour</Link>
              </li>
              <li>
                <Link to="/admin/tours/add">Add New Tour</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default SidebarAdmin;
