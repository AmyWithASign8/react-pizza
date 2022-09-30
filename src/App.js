import "./App.css";
import { Header } from "./components";
import React from "react";
import { Home, Cart } from "./pages";
import { Routes, Route } from "react-router";
import Footer from "./components/Footer";
import Authorization from "./pages/Authorization";
import Registration from "./pages/Login";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/Home" element={<Home />} exact />
        <Route path="/Cart" element={<Cart />} exact />
        <Route path="/reg" element={<Authorization />} exact />
        <Route path="/login" element={<Registration />} exact />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
