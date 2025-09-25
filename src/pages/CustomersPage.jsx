import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./CustomersPage.css"; // import CSS riêng

function CustomersPage() {
  return (
    <div className="container py-4">
      <h1 className="page-title">
        <i className="bi bi-people-fill"></i>Trang danh sách khách hàng
      </h1>

      <div className="card shadow-sm">
        <div className="card-header bg-light d-flex justify-content-between align-items-center">
          <h5 className="mb-0">
            <i className="bi bi-list-ul me-2"></i>Danh sách khách mời
          </h5>

          <div className="d-flex justify-content-end mb-3">
            <button className="btn btn-sm btn-success me-2">
              <i className="bi bi-person-plus-fill me-1"></i> Thêm khách mời
            </button>
            <button className="btn btn-sm btn-primary">
              <i className="bi bi-qr-code me-1"></i> Tạo QR Code
            </button>
          </div>
        </div>

        <div className="card-body p-0 table-responsive">
          <table className="table table-hover table-striped mb-0 align-middle">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Mã vé</th>
                <th>Tên</th>
                <th>Email</th>
                <th>Điện thoại</th>
                <th>Địa chỉ</th>
                <th>Trạng thái</th>
                <th className="text-center">Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>VE001</td>
                <td>Nguyễn Văn A</td>
                <td>a@example.com</td>
                <td>0901234567</td>
                <td>123 Đường ABC, Quận 1, TP.HCM</td>
                <td>
                  <span className="badge bg-success">✅ Đã xác nhận</span>
                </td>
                <td className="text-center">
                  <button className="btn btn-sm btn-warning me-1">
                    <i className="bi bi-pencil-square"></i> Sửa
                  </button>
                  <button className="btn btn-sm btn-danger">
                    <i className="bi bi-trash"></i> Xóa
                  </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>VE002</td>
                <td>Trần Thị B</td>
                <td>b@example.com</td>
                <td>0912345678</td>
                <td>456 Đường DEF, Quận 2, TP.HCM</td>
                <td>
                  <span className="badge bg-warning text-dark">
                    ⌛ Chưa xác nhận
                  </span>
                </td>
                <td className="text-center">
                  <button className="btn btn-sm btn-warning me-1">
                    <i className="bi bi-pencil-square"></i> Sửa
                  </button>
                  <button className="btn btn-sm btn-danger">
                    <i className="bi bi-trash"></i> Xóa
                  </button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>VE003</td>
                <td>Lê Văn C</td>
                <td>c@example.com</td>
                <td>0987654321</td>
                <td>789 Đường GHI, Quận 3, TP.HCM</td>
                <td>
                  <span className="badge bg-success">✅ Đã xác nhận</span>
                </td>
                <td className="text-center">
                  <button className="btn btn-sm btn-warning me-1">
                    <i className="bi bi-pencil-square"></i> Sửa
                  </button>
                  <button className="btn btn-sm btn-danger">
                    <i className="bi bi-trash"></i> Xóa
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-muted mt-3 small fst-italic">
        (Demo tĩnh: dữ liệu viết sẵn, chưa kết nối DB hay JS)
      </p>
    </div>
  );
}

export default CustomersPage;
