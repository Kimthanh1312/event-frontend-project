import React from "react";

const TicketForm = ({ guest, setGuest }) => {
  const handleChange = (e) => {
    setGuest({ ...guest, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sinh mã vé ngẫu nhiên
    const ticketCode = "TK" + Math.floor(100000 + Math.random() * 900000);
    setGuest({ ...guest, ticketCode });
  };

  return (
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Loại sự kiện</label>
            <select
              className="form-select"
              name="eventType"
              value={guest.eventType}
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
  );
};

export default TicketForm;
