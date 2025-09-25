import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import DashboardPage from "./pages/DashboardPage";
import CustomersPage from "./pages/CustomersPage";
import TicketsPage from "./pages/TicketsPage";
import EventsPage from "./pages/EventsPage";
import CheckinPage from "./pages/CheckinPage"; 


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/tickets" element={<TicketsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/checkin" element={<CheckinPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
