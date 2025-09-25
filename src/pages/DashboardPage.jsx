import React, { useEffect, useRef } from 'react';
import './DashboardPage.css';
import { Chart, registerables } from 'chart.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
Chart.register(...registerables);

const Dashboard = () => {
  const revenueChartRef = useRef(null);
  const checkinChartRef = useRef(null);

  // Lưu instance chart để destroy trước khi tạo mới
  const revenueChartInstance = useRef(null);
  const checkinChartInstance = useRef(null);

  useEffect(() => {
    // Destroy chart cũ nếu có
    if (revenueChartInstance.current) revenueChartInstance.current.destroy();
    if (checkinChartInstance.current) checkinChartInstance.current.destroy();

    // Tạo Revenue Chart
    if (revenueChartRef.current) {
      revenueChartInstance.current = new Chart(revenueChartRef.current.getContext('2d'), {
        type: 'line',
        data: {
          labels: ['Tháng 1','Tháng 2','Tháng 3','Tháng 4','Tháng 5','Tháng 6','Tháng 7','Tháng 8','Tháng 9','Tháng 10','Tháng 11','Tháng 12'],
          datasets: [{
            label: 'Doanh thu (triệu ₫)',
            data: [20,22,25,28,27,30,33,35,32,36,38,42],
            borderColor: '#4e73df',
            backgroundColor: 'rgba(78, 115, 223, 0.05)',
            pointBackgroundColor: '#4e73df',
            fill: true,
            tension: 0.3
          }]
        },
        options: {
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              ticks: { callback: (value) => `${value} tr` }
            }
          }
        }
      });
    }

    // Tạo Check-in Chart
    if (checkinChartRef.current) {
      checkinChartInstance.current = new Chart(checkinChartRef.current.getContext('2d'), {
        type: 'bar',
        data: {
          labels: ['Tháng 1','Tháng 2','Tháng 3','Tháng 4','Tháng 5','Tháng 6','Tháng 7','Tháng 8','Tháng 9','Tháng 10','Tháng 11','Tháng 12'],
          datasets: [{
            label: 'Khách check-in',
            data: [60,65,70,80,85,90,100,110,115,120,140,165],
            backgroundColor: '#1cc88a',
            borderColor: '#1cc88a',
            borderWidth: 1
          }]
        },
        options: {
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              ticks: { callback: (value) => `${value} người` }
            }
          },
          plugins: { legend: { position: 'top' } }
        }
      });
    }

    // Cleanup khi component unmount
    return () => {
      if (revenueChartInstance.current) revenueChartInstance.current.destroy();
      if (checkinChartInstance.current) checkinChartInstance.current.destroy();
    };
  }, []);

  return (
    <div className="dashboard">
      <h1 className="page-title">Tổng quan</h1>

      {/* Cards */}
      <div className="cards">
        <div className="card">
          <div className="card-header">
            <div className="card-title">Doanh thu</div>
            <div className="card-icon"><i className="fas fa-dollar-sign"></i></div>
          </div>
          <div className="card-value">32.5 triệu ₫</div>
          <div className="card-desc">+20% so với tháng trước</div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="card-title">Sự kiện</div>
            <div className="card-icon"><i className="fas fa-calendar-alt"></i></div>
          </div>
          <div className="card-value">42</div>
          <div className="card-desc">+10% so với tháng trước</div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="card-title">Khách tham gia</div>
            <div className="card-icon"><i className="fas fa-users"></i></div>
          </div>
          <div className="card-value">1,520</div>
          <div className="card-desc">+15% so với tháng trước</div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="card-title">Khách đã check-in</div>
            <div className="card-icon"><i className="fas fa-check-circle"></i></div>
          </div>
          <div className="card-value">1,200</div>
          <div className="card-desc">~79% tổng khách tham gia</div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="card-title">Vé bán ra</div>
            <div className="card-icon"><i className="fas fa-ticket-alt"></i></div>
          </div>
          <div className="card-value">2,130</div>
          <div className="card-desc">+12% so với tháng trước</div>
        </div>
      </div>

      {/* Charts */}
      <div className="charts">
        <div className="chart-container">
          <h3 className="chart-title">Doanh thu theo tháng</h3>
          <canvas ref={revenueChartRef}></canvas>
        </div>
        <div className="chart-container">
          <h3 className="chart-title">Khách check-in theo tháng</h3>
          <canvas ref={checkinChartRef}></canvas>
        </div>
      </div>

      {/* Table */}
      <div className="table-container">
        <h3 className="chart-title">Sự kiện mới nhất</h3>
        <table>
          <thead>
            <tr>
              <th>Mã sự kiện</th>
              <th>Tên sự kiện</th>
              <th>Ngày tổ chức</th>
              <th>Doanh thu</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>#EVT-1001</td><td>Hội thảo Công nghệ 2025</td><td>20/11/2025</td><td>5.500.000 ₫</td><td><span className="status completed">Hoàn thành</span></td></tr>
            <tr><td>#EVT-1002</td><td>Lễ hội Âm nhạc Mùa Thu</td><td>19/11/2025</td><td>3.200.000 ₫</td><td><span className="status ongoing">Đang diễn ra</span></td></tr>
            <tr><td>#EVT-1003</td><td>Triển lãm Nghệ thuật</td><td>18/11/2025</td><td>4.800.000 ₫</td><td><span className="status completed">Hoàn thành</span></td></tr>
            <tr><td>#EVT-1004</td><td>Hội nghị Khởi nghiệp</td><td>17/11/2025</td><td>2.100.000 ₫</td><td><span className="status cancelled">Đã hủy</span></td></tr>
            <tr><td>#EVT-1005</td><td>Buổi hòa nhạc từ thiện</td><td>16/11/2025</td><td>6.300.000 ₫</td><td><span className="status upcoming">Sắp diễn ra</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
