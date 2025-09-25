import React, { useState } from "react";

const PermissionModal = ({ event, onClose, onSave }) => {
  const [permissions, setPermissions] = useState(event.permissions);

  const handleChange = (perm) => {
    if (permissions.includes(perm)) setPermissions(permissions.filter(p => p !== perm));
    else setPermissions([...permissions, perm]);
  };

  return (
    <div className="modal show d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Phân quyền sự kiện</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <h6>{event.name}</h6>
            <p className="text-muted">Quản lý phân quyền cho sự kiện này</p>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" checked={permissions.includes("public")} onChange={() => handleChange("public")} />
              <label className="form-check-label">Công khai</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" checked={permissions.includes("multiple")} onChange={() => handleChange("multiple")} />
              <label className="form-check-label">Cho phép nhiều sự kiện cùng ngày</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" checked={permissions.includes("restricted")} onChange={() => handleChange("restricted")} />
              <label className="form-check-label">Giới hạn quyền truy cập</label>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>Hủy</button>
            <button className="btn btn-primary" onClick={() => onSave(permissions)}>Lưu quyền</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PermissionModal;
