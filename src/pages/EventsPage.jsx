import React, { useState, useEffect } from "react";
import EventList from '../components/EventList';
import EventFormModal from '../components/EventFormModal';
import PermissionModal from '../components/PermissionModal';
import Alert from '../components/Alert';
import '../styles.css';

function App() {
  const [events, setEvents] = useState(() => {
    return JSON.parse(localStorage.getItem("events")) || [
      {
        id: 1,
        name: "Hội nghị công nghệ 2024",
        location: "Trung tâm Hội nghị Quốc gia",
        startDate: "2024-03-15T09:00",
        endDate: "2024-03-15T17:00",
        description: "Hội nghị công nghệ hàng đầu Việt Nam",
        permissions: ["public", "multiple"],
        status: "active",
        maxGuests: 500,
        createdAt: new Date().toISOString(),
      },
    ];
  });

  const [filters, setFilters] = useState({
    search: "",
    status: "",
    date: "",
  });

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showFormModal, setShowFormModal] = useState(false);
  const [showPermissionModal, setShowPermissionModal] = useState(false);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.name.toLowerCase().includes(filters.search.toLowerCase());
    const matchesStatus = !filters.status || event.status === filters.status;
    const matchesDate = !filters.date || event.startDate.startsWith(filters.date);
    return matchesSearch && matchesStatus && matchesDate;
  });

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sự kiện này?")) {
      setEvents(events.filter((e) => e.id !== id));
      showAlert("Sự kiện đã được xóa!", "success");
    }
  };

  const handleSave = (eventData) => {
    if (eventData.id) {
      setEvents(events.map((e) => (e.id === eventData.id ? eventData : e)));
    } else {
      eventData.id = events.length > 0 ? Math.max(...events.map((e) => e.id)) + 1 : 1;
      eventData.createdAt = new Date().toISOString();
      setEvents([...events, eventData]);
    }
    setShowFormModal(false);
    showAlert("Sự kiện đã được lưu thành công!", "success");
  };

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 3000);
  };

  const resetFilters = () => {
    setFilters({ search: "", status: "", date: "" });
  };

  return (
    <div className="container-fluid py-4">
      {alert && <Alert message={alert.message} type={alert.type} />}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="page-title mb-1">Quản lý Sự kiện</h2>
        <button className="btn btn-primary" onClick={() => { setSelectedEvent(null); setShowFormModal(true); }}>
          <i className="fas fa-plus me-2"></i>Thêm sự kiện
        </button>
      </div>

      {/* Filters */}
      <div className="card mb-3">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-3">
              <label className="form-label">Tìm kiếm</label>
              <input
                type="text"
                className="form-control"
                placeholder="Tên sự kiện..."
                value={filters.search}
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">Trạng thái</label>
              <select
                className="form-select"
                value={filters.status}
                onChange={(e) => setFilters({ ...filters, status: e.target.value })}
              >
                <option value="">Tất cả</option>
                <option value="active">Đang hoạt động</option>
                <option value="inactive">Ngừng hoạt động</option>
                <option value="pending">Chờ duyệt</option>
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label">Ngày bắt đầu</label>
              <input
                type="date"
                className="form-control"
                value={filters.date}
                onChange={(e) => setFilters({ ...filters, date: e.target.value })}
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">&nbsp;</label>
              <button className="btn btn-outline-secondary w-100" onClick={resetFilters}>
                <i className="fas fa-refresh me-2"></i>Reset
              </button>
            </div>
          </div>
        </div>
      </div>

      <EventList
        events={filteredEvents}
        onEdit={(event) => { setSelectedEvent(event); setShowFormModal(true); }}
        onDelete={handleDelete}
        onManagePermissions={(event) => { setSelectedEvent(event); setShowPermissionModal(true); }}
      />

      {showFormModal && (
        <EventFormModal
          event={selectedEvent}
          onClose={() => setShowFormModal(false)}
          onSave={handleSave}
        />
      )}

      {showPermissionModal && (
        <PermissionModal
          event={selectedEvent}
          onClose={() => setShowPermissionModal(false)}
          onSave={(updatedPermissions) => {
            setEvents(events.map(e => e.id === selectedEvent.id ? { ...e, permissions: updatedPermissions } : e));
            setShowPermissionModal(false);
            showAlert("Phân quyền đã được cập nhật!", "success");
          }}
        />
      )}
    </div>
  );
}

export default App;
