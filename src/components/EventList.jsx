import React from "react";

const EventList = ({ events, onEdit, onDelete, onManagePermissions }) => {
  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN") + " " + date.toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" });
  };

  const getStatusLabel = (status) => ({ active: "Đang hoạt động", inactive: "Ngừng hoạt động", pending: "Chờ duyệt" }[status]);

  const getPermissionLabel = (perm) => ({ public: "Công khai", multiple: "Nhiều sự kiện", restricted: "Giới hạn" }[perm]);

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <span>Danh sách sự kiện</span>
        <span className="badge bg-primary">{events.length} sự kiện</span>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Tên sự kiện</th>
                <th>Ngày diễn ra</th>
                <th>Địa điểm</th>
                <th>Phân quyền</th>
                <th>Trạng thái</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {events.map(event => (
                <tr key={event.id}>
                  <td>
                    <div className="fw-semibold">{event.name}</div>
                    <small className="text-muted">{event.description || 'Không có mô tả'}</small>
                  </td>
                  <td>{formatDateTime(event.startDate)}</td>
                  <td>{event.location}</td>
                  <td>{event.permissions.map(perm => <span className="badge bg-secondary me-1" key={perm}>{getPermissionLabel(perm)}</span>)}</td>
                  <td><span className={`badge bg-${event.status === 'active' ? 'success' : event.status === 'inactive' ? 'danger' : 'warning'}`}>{getStatusLabel(event.status)}</span></td>
                  <td>
                    <div className="btn-group btn-group-sm">
                      <button className="btn btn-outline-primary" onClick={() => onEdit(event)}><i className="fas fa-edit"></i></button>
                      <button className="btn btn-outline-success" onClick={() => onManagePermissions(event)}><i className="fas fa-users"></i></button>
                      <button className="btn btn-outline-danger" onClick={() => onDelete(event.id)}><i className="fas fa-trash"></i></button>
                    </div>
                  </td>
                </tr>
              ))}
              {events.length === 0 && <tr><td colSpan="6" className="text-center">Không có sự kiện</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EventList;
