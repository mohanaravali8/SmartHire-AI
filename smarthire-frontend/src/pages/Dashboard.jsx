// eslint-disable-next-line no-unused-vars
import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Charts from "../components/Charts";

import {
  FaFileAlt,
  
  FaRobot,
  
} from "react-icons/fa";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Resume Score",
    value: "92%",
    icon: <FaFileAlt size={28} />,
    color: "from-blue-500 to-cyan-500",
  },
  
  {
    title: "AI Chats",
    value: "23",
    icon: <FaRobot size={28} />,
    color: "from-purple-500 to-pink-500",
  },
 
];

const Dashboard = () => {
  return (
    <div className="flex bg-slate-100 min-h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          {/* Welcome */}

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold">
              Welcome Back 👋
            </h1>

            <p className="text-gray-500 mt-2">
              Your SmartHire AI Dashboard
            </p>
          </motion.div>

          {/* Cards */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

            {cards.map((card, index) => (

              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`rounded-2xl text-white bg-linear-to-r ${card.color} shadow-xl p-6`}
              >

                <div className="flex justify-between items-center">

                  <div>

                    <h3 className="text-lg">
                      {card.title}
                    </h3>

                    <h1 className="text-4xl font-bold mt-3">
                      {card.value}
                    </h1>

                  </div>

                  <div className="bg-white/20 p-4 rounded-full">

                    {card.icon}

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

          {/* Charts */}

          <div className="mt-10">

            <Charts />

          </div>

          {/* Bottom Section */}

          <div className="grid lg:grid-cols-2 gap-6 mt-10">

            {/* Recent Activity */}

            <div className="bg-white rounded-2xl shadow-lg p-6">

              <h2 className="font-bold text-xl mb-5">
                Recent Activity
              </h2>

              <div className="space-y-4">

                <div className="border-l-4 border-blue-500 pl-4">
                  Resume Uploaded Successfully
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  ATS Score Generated
                </div>

                

                <div className="border-l-4 border-orange-500 pl-4">
                  AI Interview Completed
                </div>

              </div>

            </div>

            {/* AI Suggestions */}

            <div className="bg-white rounded-2xl shadow-lg p-6">

              <h2 className="font-bold text-xl mb-5">
                AI Suggestions
              </h2>

              <ul className="space-y-4">

                <li>✔ Add Docker to your Resume</li>

                <li>✔ Improve Spring Boot Projects</li>

                <li>✔ Add AWS Certification</li>

                <li>✔ Practice DSA Daily</li>

                <li>✔ Optimize Resume Keywords</li>

              </ul>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;