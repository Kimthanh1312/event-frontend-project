import React from "react";
import QRCode from "qrcode.react";

const TicketPreview = ({ guest }) => {
  const qrData = `
TÊN: ${guest.name}
EMAIL: ${guest.email}
SỰ KIỆN: ${guest.eventType}
NGÀY: ${guest.eventDate}
SỐ GHẾ: ${guest.seat}
MÃ VÉ: ${guest.ticketCode}
  `;

  return (
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
              <QRCode value={qrData} size={200} />
            </div>
          )}

          <div className="text-center mt-4">
            <p className="text-muted">Quét mã QR để xác thực vé</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketPreview;
