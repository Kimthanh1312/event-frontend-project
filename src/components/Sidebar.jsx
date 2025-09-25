import React from "react";

const Sidebar = () => {
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-brand">
          <span>Admin Dashboard</span>
        </div>
        <ul className="sidebar-nav">
          <li>
            <a href="/" className="active">
              <i className="fas fa-home"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="/customers">
              <i className="fas fa-users"></i>
              <span>Danh sách khách mời</span>
            </a>
          </li>
          <li>
            <a href="/tickets">
              <i className="fa-solid fa-clock"></i>
              <span>Tạo vé</span>
            </a>
          </li>
          <li>
            <a href="/events">
              <i className="fas fa-calendar-alt"></i>
              <span>Sự kiện</span>
            </a>
          </li>
            <li>
            <a href="/checkin">
                <i className="fa-solid fa-qrcode"></i>          
                <span>Check-in</span>
            </a>
            </li>
        </ul>
      </aside>

      {/* CSS nhúng vào component */}
      <style>{`
        .sidebar {
          width: 220px;
          background: #2c3e50;
          color: #fff;
          height: 100vh;
          position: fixed;
          left: 0;
          top: 0;
          padding: 15px 0;
        }

        .sidebar-brand {
          font-size: 18px;
          font-weight: bold;
          text-align: center;
          margin-bottom: 20px;
        }

        .sidebar-nav {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .sidebar-nav li {
          margin: 10px 0;
        }

        .sidebar-nav a {
          color: #fff;
          text-decoration: none;
          display: flex;
          align-items: center;
          padding: 8px 15px;
        }

        .sidebar-nav a.active,
        .sidebar-nav a:hover {
          background: #34495e;
          border-radius: 4px;
        }

        .sidebar-nav i {
          margin-right: 10px;
        }
      `}</style>
    </>
  );
};

export default Sidebar;
