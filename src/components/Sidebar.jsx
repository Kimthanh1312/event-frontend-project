import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Toggle button cho mobile - ẩn khi sidebar mở */}
      <button 
        className={`sidebar-toggle ${isOpen ? 'hidden' : ''}`}
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        <i className="fas fa-bars"></i>
      </button>

      {/* Overlay để đóng sidebar khi click bên ngoài */}
      {isOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}

      <aside className={`sidebar ${isOpen ? 'show' : ''}`}>
        <div className="sidebar-brand">
          <span>Admin Dashboard</span>
        </div>
        <ul className="sidebar-nav">
          <li>
            <Link 
              to="/" 
              className={location.pathname === "/" ? "active" : ""}
              onClick={closeSidebar}
            >
              <i className="fas fa-home"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/customers" 
              className={location.pathname === "/customers" ? "active" : ""}
              onClick={closeSidebar}
            >
              <i className="fas fa-users"></i>
              <span>Danh sách khách mời</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/tickets"
              className={location.pathname === "/tickets" ? "active" : ""}
              onClick={closeSidebar}
            >
              <i className="fa-solid fa-clock"></i>
              <span>Tạo vé</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/events"
              className={location.pathname === "/events" ? "active" : ""}
              onClick={closeSidebar}
            >
              <i className="fas fa-calendar-alt"></i>
              <span>Sự kiện</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/checkin"
              className={location.pathname === "/checkin" ? "active" : ""}
              onClick={closeSidebar}
            >
              <i className="fa-solid fa-qrcode"></i>          
              <span>Check-in</span>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
