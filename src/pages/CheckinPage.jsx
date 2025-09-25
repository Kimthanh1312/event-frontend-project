import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CheckinPage.css"; // import CSS riêng

function CheckinPage() {
  const videoRef = useRef(null);
  const [result, setResult] = useState("");
  const [manualCode, setManualCode] = useState("");

  useEffect(() => {
    if (window.Instascan) {
      const scanner = new window.Instascan.Scanner({ video: videoRef.current });

      scanner.addListener("scan", (content) => {
        verifyCode(content);
      });

      window.Instascan.Camera.getCameras()
        .then((cameras) => {
          if (cameras.length > 0) {
            scanner.start(cameras[0]);
          } else {
            alert("Không tìm thấy camera!");
          }
        })
        .catch((e) => console.error(e));
    }
  }, []);

  const verifyCode = async (code) => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/checkin/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      const data = await res.json();
      if (data.status === "success") {
        setResult(
          `<p class="text-success fw-bold">${data.message}</p>
           <p><b>Tên khách:</b> ${data.guest.name}</p>
           <p><b>SĐT:</b> ${data.guest.phone}</p>
           <p><b>Email:</b> ${data.guest.email}</p>`
        );
      } else {
        setResult(`<p class="text-danger fw-bold">${data.message}</p>`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const manualCheckin = () => {
    if (manualCode.trim() !== "") verifyCode(manualCode);
  };

  return (
    <div className="container">
      <h2 className="mb-4">Trang Check-in</h2>

      {/* Camera quét QR */}
      <video ref={videoRef}></video>
      <div id="result" dangerouslySetInnerHTML={{ __html: result }}></div>

      {/* Nhập mã thủ công */}
      <div className="input-manual">
        <input
          type="text"
          value={manualCode}
          onChange={(e) => setManualCode(e.target.value)}
          className="form-control"
          placeholder="Nhập mã vé thủ công"
        />
        <button onClick={manualCheckin} className="btn btn-primary mt-2">
          Check-in
        </button>
      </div>

      {/* Danh sách khách đã check-in (demo tĩnh) */}
      <div className="table-container">
        <h4>Danh sách khách đã check-in</h4>
        <table className="table table-hover table-bordered align-middle">
          <thead className="table-primary">
            <tr>
              <th>#</th>
              <th>Tên</th>
              <th>Email</th>
              <th>Điện thoại</th>
              <th>Địa chỉ</th>
              <th>Mã vé</th>
              <th>Trạng thái</th>
              <th>Thời gian check-in</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Nguyễn Văn A</td>
              <td>a@example.com</td>
              <td>0901234567</td>
              <td>123 Đường ABC, Quận 1, TP.HCM</td>
              <td>TK123</td>
              <td>
                <span className="badge bg-success">✅ Đã check-in</span>
              </td>
              <td>09:00 23/09/2025</td>
              <td>
                <button className="btn btn-sm btn-warning">Sửa</button>
                <button className="btn btn-sm btn-danger">Xóa</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Trần Thị B</td>
              <td>b@example.com</td>
              <td>0912345678</td>
              <td>456 Đường DEF, Quận 2, TP.HCM</td>
              <td>TK124</td>
              <td>
                <span className="badge bg-secondary">⏳ Chưa check-in</span>
              </td>
              <td>-</td>
              <td>
                <button className="btn btn-sm btn-warning">Sửa</button>
                <button className="btn btn-sm btn-danger">Xóa</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Lê Văn C</td>
              <td>c@example.com</td>
              <td>0987654321</td>
              <td>789 Đường GHI, Quận 3, TP.HCM</td>
              <td>TK125</td>
              <td>
                <span className="badge bg-success">✅ Đã check-in</span>
              </td>
              <td>10:15 23/09/2025</td>
              <td>
                <button className="btn btn-sm btn-warning">Sửa</button>
                <button className="btn btn-sm btn-danger">Xóa</button>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="text-muted">
          <i>(Demo tĩnh: dữ liệu viết sẵn, chưa kết nối DB)</i>
        </p>
      </div>
    </div>
  );
}

export default CheckinPage;
