import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { VehicleDetails } from "./pages/VehicleDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicle/" element={<VehicleDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
