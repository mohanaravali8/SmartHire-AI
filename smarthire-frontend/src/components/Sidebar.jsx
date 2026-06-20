// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUpload,
  FaSearch,
 
  FaRobot,
  FaComments,
 
 
} from "react-icons/fa";

const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <FaTachometerAlt />,
  },
  {
    title: "Resume Upload",
    path: "/upload",
    icon: <FaUpload />,
  },
  {
    title: "Resume Analysis",
    path: "/analysis",
    icon: <FaSearch />,
  },
 
  {
    title: "Interview Coach",
    path: "/interview",
    icon: <FaRobot />,
  },
  {
    title: "AI Chatbot",
    path: "/chatbot",
    icon: <FaComments />,
  },

];

const Sidebar = () => {
  return (
    <div className="w-72 min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col shadow-2xl">

      {/* Logo */}

      <div className="p-8 border-b border-slate-700">

        <h1 className="text-3xl font-extrabold text-cyan-400">
          SmartHire AI
        </h1>

        <p className="text-gray-400 mt-2 text-sm">
          AI Career Assistant
        </p>

      </div>

      {/* Menu */}

      <div className="flex-1 mt-6">

        {menuItems.map((item) => (

          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-8 py-4 mx-4 mb-3 rounded-xl transition-all duration-300
              ${
                isActive
                  ? "bg-cyan-500 text-white shadow-lg"
                  : "hover:bg-slate-700 text-gray-300"
              }`
            }
          >

            <span className="text-xl">{item.icon}</span>

            <span className="font-medium">{item.title}</span>

          </NavLink>

        ))}

      </div>

    

      </div>

   
  );
};

export default Sidebar;