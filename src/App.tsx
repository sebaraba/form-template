import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CertificatesTable from "./pages/certificates/CertificatesTable";
import Navbar from "./components/navbar/Navbar";
import { RegisterForm } from "./pages/register-form/RegisterForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/certificates" element={<CertificatesTable/>} />
        <Route path="/register" element={<RegisterForm/>} />
      </Routes>
    </Router>
  );
}
export default App;
