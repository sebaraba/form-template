import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/certificates" element={<div>Certificates</div>} />
        <Route path="/register" element={<div>Register Certificates</div>} />
      </Routes>
    </Router>
  );
}
export default App;
