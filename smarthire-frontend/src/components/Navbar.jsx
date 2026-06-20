//import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBell, FaUserCircle, FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove stored login data
    localStorage.clear();
    sessionStorage.clear();

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center bg-white shadow-md px-8 py-4">

      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-blue-600">
          SmartHire AI
        </h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">

        {/* Notification */}
        <button className="text-gray-600 hover:text-blue-600 text-xl">
          <FaBell />
        </button>

        {/* User */}
        <div className="flex items-center gap-2">
          <FaUserCircle className="text-3xl text-blue-600" />
          <span className="font-semibold">Mohana</span>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </div>
  );
};

export default Navbar;