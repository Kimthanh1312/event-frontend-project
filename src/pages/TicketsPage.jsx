// TicketsPage.jsx
import React, { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";

const TicketsPage = () => {
  const [guest, setGuest] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    eventType: "Hội nghị",
    eventDate: "",
    seat: "Tự do",
    ticketCode: "",
  });

  // Khi mở form => mặc định ngày mai
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setGuest((prev) => ({
      ...prev,
      eventDate: tomorrow.toISOString().split("T")[0],
    }));
  }, []);

  // Sinh mã vé
  const handleSubmit = (e) => {
    e.preventDefault();
    const ticketCode = "TK" + Math.floor(100000 + Math.random() * 900000);
    setGuest({ ...guest, ticketCode });
  };

  // Dữ liệu QR
  const qrData = `
TÊN: ${guest.name}
EMAIL: ${guest.email}
SỰ KIỆN: ${guest.eventType}
NGÀY: ${guest.eventDate}
SỐ GHẾ: ${guest.seat}
MÃ VÉ: ${guest.ticketCode}
  `;

  return (
    <div className="container py-4">
      <h1 className="page-title">Tạo Vé Khách Mời</h1>
      <div className="row">
        {/* Form nhập thông tin */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h3 className="card-title mb-0">Thông tin khách mời</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Họ và tên *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={guest.name}
                    onChange={(e) =>
                      setGuest({ ...guest, [e.target.name]: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={guest.email}
                    onChange={(e) =>
                      setGuest({ ...guest, [e.target.name]: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Số điện thoại *</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    value={guest.phone}
                    onChange={(e) =>
                      setGuest({ ...guest, [e.target.name]: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Địa chỉ *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={guest.address}
                    onChange={(e) =>
                      setGuest({ ...guest, [e.target.name]: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Loại sự kiện</label>
                  <select
                    className="form-select"
                    name="eventType"
                    value={guest.eventType}
                    onChange={(e) =>
                      setGuest({ ...guest, [e.target.name]: e.target.value })
                    }
                  >
                    <option>Hội nghị</option>
                    <option>Tiệc cưới</option>
                    <option>Sinh nhật</option>
                    <option>Gala dinner</option>
                    <option>Triển lãm</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Ngày sự kiện *</label>
                  <input
                    type="date"
                    className="form-control"
                    name="eventDate"
                    value={guest.eventDate}
                    onChange={(e) =>
                      setGuest({ ...guest, [e.target.name]: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Số ghế</label>
                  <input
                    type="text"
                    className="form-control"
                    name="seat"
                    value={guest.seat}
                    onChange={(e) =>
                      setGuest({ ...guest, [e.target.name]: e.target.value })
                    }
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Tạo mã QR Code
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Preview vé khách mời */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h3 className="card-title mb-0">Vé khách mời</h3>
            </div>
            <div className="card-body">
              <div className="ticket">
                <div className="perforation"></div>
                <div className="perforation perforation-right"></div>

                <div className="text-center mb-4">
                  <h2 className="text-primary">VÉ THAM DỰ SỰ KIỆN</h2>
                  <p className="text-muted">Vui lòng xuất trình vé tại cửa vào</p>
                </div>

                <div className="guest-info mb-4">
                  <p>
                    <span className="info-label">Họ tên:</span>{" "}
                    {guest.name || "Chưa có thông tin"}
                  </p>
                  <p>
                    <span className="info-label">Sự kiện:</span>{" "}
                    {guest.eventType || "Chưa có thông tin"}
                  </p>
                  <p>
                    <span className="info-label">Ngày:</span>{" "}
                    {guest.eventDate || "Chưa có thông tin"}
                  </p>
                  <p>
                    <span className="info-label">Số ghế:</span>{" "}
                    {guest.seat || "Chưa có thông tin"}
                  </p>
                  <p>
                    <span className="info-label">Mã vé:</span>{" "}
                    {guest.ticketCode || "Chưa có thông tin"}
                  </p>
                </div>

                {guest.ticketCode && (
                  <div className="d-flex justify-content-center">
                    <QRCodeCanvas value={qrData} size={200} />
                  </div>
                )}

                <div className="text-center mt-4">
                  <p className="text-muted">Quét mã QR để xác thực vé</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS nội tuyến */}
      <style>{`
        .page-title {
          color: #2c3e50;
          margin-bottom: 30px;
          padding-bottom: 15px;
          border-bottom: 2px solid #ecf0f1;
        }
        .card {
          border-radius: 10px;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
          margin-bottom: 2rem;
          border: none;
        }
        .card-header {
          border-radius: 10px 10px 0 0 !important;
          font-weight: bold;
        }
        .ticket {
          background: white;
          border-radius: 10px;
          padding: 20px;
          position: relative;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        }
        .ticket:before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 10px;
          height: 90%;
          background: #f8f9fa;
          border-radius: 0 10px 10px 0;
        }
        .ticket:after {
          content: "";
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 10px;
          height: 90%;
          background: #f8f9fa;
          border-radius: 10px 0 0 10px;
        }
        .perforation {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 90%;
          width: 15px;
          background: radial-gradient(circle at center, #f8f9fa 30%, transparent 30%);
          background-size: 10px 20px;
        }
        .perforation-right {
          left: auto;
          right: 0;
        }
        .guest-info {
          font-size: 1.1rem;
        }
        .info-label {
          font-weight: bold;
          color: #2c3e50;
        }
      `}</style>
    </div>
  );
};

export default TicketsPage;
