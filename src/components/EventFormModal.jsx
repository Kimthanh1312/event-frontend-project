import React, { useState, useEffect } from "react";

const EventFormModal = ({ event, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
    status: "active",
    maxGuests: "",
    permissions: [],
  });

  useEffect(() => {
    if (event) setFormData(event);
  }, [event]);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    if (id === "permissionPublic" || id === "permissionMultiple" || id === "permissionRestricted") {
      let newPermissions = [...formData.permissions];
      const perm = id === "permissionPublic" ? "public" : id === "permissionMultiple" ? "multiple" : "restricted";
      if (checked) newPermissions.push(perm);
      else newPermissions = newPermissions.filter(p => p !== perm);
      setFormData({ ...formData, permissions: newPermissions });
    } else {
      setFormData({ ...formData, [id]: type === "number" ? Number(value) : value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal show d-block" tabIndex="-1">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{event ? "Chỉnh sửa sự kiện" : "Thêm sự kiện mới"}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Tên sự kiện *</label>
                  <input id="name" type="text" className="form-control" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Địa điểm *</label>
                  <input id="location" type="text" className="form-control" value={formData.location} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Ngày bắt đầu *</label>
                  <input id="startDate" type="datetime-local" className="form-control" value={formData.startDate} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Ngày kết thúc *</label>
                  <input id="endDate" type="datetime-local" className="form-control" value={formData.endDate} onChange={handleChange} required />
                </div>
                <div className="col-12">
                  <label className="form-label">Mô tả</label>
                  <textarea id="description" className="form-control" rows="3" value={formData.description} onChange={handleChange}></textarea>
                </div>
                <div className="col-12">
                  <label className="form-label">Phân quyền sự kiện</label>
                  <div className="border p-3 rounded">
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" id="permissionPublic" checked={formData.permissions.includes("public")} onChange={handleChange} />
                      <label className="form-check-label" htmlFor="permissionPublic">Công khai</label>
                    </div>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" id="permissionMultiple" checked={formData.permissions.includes("multiple")} onChange={handleChange} />
                      <label className="form-check-label" htmlFor="permissionMultiple">Cho phép nhiều sự kiện cùng ngày</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="permissionRestricted" checked={formData.permissions.includes("restricted")} onChange={handleChange} />
                      <label className="form-check-label" htmlFor="permissionRestricted">Giới hạn quyền truy cập</label>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Trạng thái</label>
                  <select id="status" className="form-select" value={formData.status} onChange={handleChange}>
                    <option value="active">Đang hoạt động</option>
                    <option value="inactive">Ngừng hoạt động</option>
                    <option value="pending">Chờ duyệt</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Số lượng khách tối đa</label>
                  <input id="maxGuests" type="number" className="form-control" min="1" value={formData.maxGuests || ""} onChange={handleChange} />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Hủy</button>
              <button type="submit" className="btn btn-primary">Lưu sự kiện</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventFormModal;
