import React from "react";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="search-bar">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Tìm kiếm..." />
        </div>
        <div className="user-menu">
          <div className="user-info">
            <img
              src="https://ui-avatars.com/api/?name=Admin+User&background=random"
              alt="User"
            />
            <span className="user-name">Admin</span>
          </div>
        </div>
      </header>

      {/* CSS nhúng trong component */}
      <style>{`
        .header {
          height: 60px;
          background: #f8f9fa;
          border-bottom: 1px solid #ddd;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          position: fixed;
          top: 0;
          left: 220px; /* chừa chỗ cho sidebar */
          right: 0;
          z-index: 1000;
        }

        .search-bar {
          display: flex;
          align-items: center;
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 20px;
          padding: 5px 10px;
        }

        .search-bar i {
          color: #666;
          margin-right: 8px;
        }

        .search-bar input {
          border: none;
          outline: none;
          font-size: 14px;
        }

        .user-menu {
          display: flex;
          align-items: center;
        }

        .user-info {
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .user-info img {
          border-radius: 50%;
          width: 35px;
          height: 35px;
          margin-right: 8px;
        }

        .user-name {
          font-weight: 500;
          color: #333;
        }
      `}</style>
    </>
  );
};

export default Header;
