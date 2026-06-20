// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";

const lineData = [
  { month: "Jan", score: 60 },
  { month: "Feb", score: 68 },
  { month: "Mar", score: 74 },
  { month: "Apr", score: 81 },
  { month: "May", score: 88 },
  { month: "Jun", score: 92 },
];

const pieData = [
  { name: "Java", value: 35 },
  { name: "React", value: 25 },
  { name: "Spring Boot", value: 20 },
  { name: "SQL", value: 20 },
];

const COLORS = [
  "#2563EB",
  "#10B981",
  "#F97316",
  "#8B5CF6",
];

const Charts = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-8">

      {/* Line Chart */}

      <div className="bg-white rounded-2xl shadow-xl p-6">

        <h2 className="text-xl font-bold mb-5">
          Resume Performance
        </h2>

        <ResponsiveContainer width="100%" height={320}>

          <LineChart data={lineData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Line
              type="monotone"
              dataKey="score"
              stroke="#2563EB"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

      {/* Pie Chart */}

      <div className="bg-white rounded-2xl shadow-xl p-6">

        <h2 className="text-xl font-bold mb-5">
          Skills Distribution
        </h2>

        <ResponsiveContainer width="100%" height={320}>

          <PieChart>

            <Pie
              data={pieData}
              dataKey="value"
              outerRadius={120}
              label
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default Charts;