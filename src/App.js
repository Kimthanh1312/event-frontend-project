import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

import DashboardPage from "./pages/DashboardPage";
import CustomersPage from "./pages/CustomersPage";
import TicketsPage from "./pages/TicketsPage";
import EventsPage from "./pages/EventsPage";
import CheckinPage from "./pages/CheckinPage"; 


function App() {
  return (
    <Router>
      <div className="d-flex">
        {/* Sidebar bên trái */}
        <Sidebar />

        {/* Nội dung chính bên phải */}
        <div className="flex-grow-1 d-flex flex-column">
          <Header />

          {/* Nội dung động */}
          <main className="flex-grow-1 p-4">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/customers" element={<CustomersPage />} />
              <Route path="/tickets" element={<TicketsPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/checkin" element={<CheckinPage />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
