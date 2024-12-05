import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BloodPressureChart = () => {
  const data = {
    labels: ["Oct, 2023", "Nov, 2023", "Dec, 2023", "Jan, 2024", "Feb, 2024", "Mar, 2024"],
    datasets: [
      {
        label: "Systolic",
        data: [120, 130, 160, 140, 150, 160],
        borderColor: "#ec4899", // Pink color
        backgroundColor: "#ec4899",
        tension: 0.4,
      },
      {
        label: "Diastolic",
        data: [80, 60, 100, 90, 70, 78],
        borderColor: "#6366f1", // Purple color
        backgroundColor: "#6366f1",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#64748b",
        },
      },
      tooltip: {
        backgroundColor: "#f8fafc",
        titleColor: "#334155",
        bodyColor: "#334155",
      },
    },
    scales: {
      x: {
        ticks: { color: "#64748b" },
      },
      y: {
        ticks: { color: "#64748b" },
        beginAtZero: true,
        min: 50,
        max: 180,
      },
    },
  };

  return (
    <div>
      <div className="flex justify-between items-start gap-8">
        <div className="w-[70%]">
          <Line data={data} options={options} />
        </div>
        <div className="space-y-4">
          <div className="text-center">
            <h4 className="text-pink-500 font-bold">Systolic</h4>
            <p className="text-lg font-medium">160</p>
            <p className="text-gray-500">(Higher than Average)</p>
          </div>
          <div className="text-center">
            <h4 className="text-purple-500 font-bold">Diastolic</h4>
            <p className="text-lg font-medium">78</p>
            <p className="text-gray-500">(Lower than Average)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodPressureChart;
