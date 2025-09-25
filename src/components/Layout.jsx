import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <div className="layout">
        <Sidebar />

        <div className="main-content">
          <Header />

          <div className="content">
            {/* Đây là nơi load nội dung động (giống @yield trong Blade) */}
            <Outlet />
          </div>

          <Footer />
        </div>
      </div>

      {/* CSS nhúng trong component */}
      <style>{`
        .layout {
          display: flex;
        }

        .main-content {
          margin-left: 220px; /* chừa chỗ cho sidebar */
          width: calc(100% - 220px);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .content {
          flex: 1;
          padding: 20px;
          margin-top: 60px;   /* chừa chỗ cho header */
          margin-bottom: 50px; /* chừa chỗ cho footer */
        }
      `}</style>
    </>
  );
};

export default Layout;
