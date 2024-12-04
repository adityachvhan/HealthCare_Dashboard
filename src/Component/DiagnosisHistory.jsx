import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const DiagnosisHistory = () => {
  const data = {
    labels: ["Oct 2023", "Nov 2023", "Dec 2023", "Jan 2024", "Feb 2024", "Mar 2024"],
    datasets: [
      {
        label: "Systolic",
        data: [120, 140, 160, 135, 145, 160],
        borderColor: "#f87171", // Tailwind's "rose-500"
        backgroundColor: "rgba(248, 113, 113, 0.2)",
        fill: true,
      },
      {
        label: "Diastolic",
        data: [80, 85, 78, 72, 74, 78],
        borderColor: "#60a5fa", // Tailwind's "blue-400"
        backgroundColor: "rgba(96, 165, 250, 0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-3 rounded-lg shadow-md ">
      {/* Chart Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Diagnosis History</h2>
        <div className="bg-white p-4 rounded-md shadow">
          <Line data={data} options={options} />
        </div>
      </div>

      {/* Vital Signs */}
      <div className="grid grid-cols-3 gap-4 mt-3">
        <div className="p-4 bg-white rounded-md shadow text-center">
          <p className="text-gray-500">Respiratory Rate</p>
          <p className="text-2xl font-bold">20 bpm</p>
          <p className="text-green-500">Normal</p>
        </div>
        <div className="p-4 bg-white rounded-md shadow text-center">
          <p className="text-gray-500">Temperature</p>
          <p className="text-2xl font-bold">98.6°F</p>
          <p className="text-green-500">Normal</p>
        </div>
        <div className="p-4 bg-white rounded-md shadow text-center">
          <p className="text-gray-500">Heart Rate</p>
          <p className="text-2xl font-bold">78 bpm</p>
          <p className="text-red-500">Lower than Average</p>
        </div>
      </div>

      {/* Diagnostic List */}
      <div>
        <h3 className="text-lg font-bold mb-2">Diagnostic List</h3>
        <table className="table-auto w-full bg-white rounded-md shadow">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 text-left">Problem/Diagnosis</th>
              <th className="p-2 text-left">Description</th>
              <th className="p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Hypertension</td>
              <td className="p-2">Chronic high blood pressure</td>
              <td className="p-2 text-yellow-500">Under Observation</td>
            </tr>
            <tr>
              <td className="p-2">Type 2 Diabetes</td>
              <td className="p-2">Insulin resistance and elevated blood sugar</td>
              <td className="p-2 text-green-500">Cured</td>
            </tr>
            <tr>
              <td className="p-2">Asthma</td>
              <td className="p-2">Recurrent episodes of bronchial constriction</td>
              <td className="p-2 text-gray-500">Inactive</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiagnosisHistory;
