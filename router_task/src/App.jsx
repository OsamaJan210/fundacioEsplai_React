import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Courses from "./pages/Courses";
import CourseInfo from "./pages/CourseInfo";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
