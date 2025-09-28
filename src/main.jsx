import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";

// Add these imports:
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import Video from "./Pages/Video.jsx"; // Make sure this file exists

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Video" element={<Video />} />
      </Routes>
      <Footer />
    </HashRouter>
  </StrictMode>
);
