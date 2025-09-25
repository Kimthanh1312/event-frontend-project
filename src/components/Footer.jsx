import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="copyright">
          &copy; 2025 Admin Dashboard. All rights reserved.
        </div>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Help</a>
        </div>
      </footer>

      {/* CSS nhúng ngay trong component */}
      <style>{`
        .footer {
          height: 50px;
          background: #f8f9fa;
          border-top: 1px solid #ddd;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
          position: fixed;
          bottom: 0;
          left: 220px; /* chừa chỗ cho sidebar */
          right: 0;
          z-index: 1000;
          font-size: 14px;
          color: #555;
        }

        .footer-links a {
          margin-left: 15px;
          text-decoration: none;
          color: #007bff;
        }

        .footer-links a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default Footer;
