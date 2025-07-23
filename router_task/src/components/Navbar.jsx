import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  
  const auth = JSON.parse(localStorage.getItem("auth"));
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">MyCourseApp</div>
        <div className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition">
            Home
          </Link>
          <Link to={`/admin?auth=${auth}`} className="text-gray-700 hover:text-blue-600 font-medium transition">
            Admin
          </Link>
          <Link to="/login" className="text-gray-700 hover:text-blue-600 font-medium transition">
            Login
          </Link>
          <Link to="/courses" className="text-gray-700 hover:text-blue-600 font-medium transition">
            Courses
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
