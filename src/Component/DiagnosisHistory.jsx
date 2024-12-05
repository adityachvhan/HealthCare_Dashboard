import React from "react";
import BloodPressureChart from "./BloodPressureChart";

const DiagnosisHistory = () => {
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md h-auto space-y-6">
      {/* Diagnosis History Title */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Diagnosis History</h2>
      </div>

      {/* Blood Pressure Chart Section */}
      <div className="bg-white p-6 rounded-md shadow-md">
        <BloodPressureChart />
      </div>

      {/* Vital Signs Section */}
      <div className="grid grid-cols-3 gap-6">
        <div className="p-4 bg-blue-50 rounded-md shadow text-center">
          <p className="text-gray-500 font-medium">Respiratory Rate</p>
          <p className="text-2xl font-bold text-gray-800">20 bpm</p>
          <p className="text-green-500 font-medium">Normal</p>
        </div>
        <div className="p-4 bg-red-50 rounded-md shadow text-center">
          <p className="text-gray-500 font-medium">Temperature</p>
          <p className="text-2xl font-bold text-gray-800">98.6°F</p>
          <p className="text-green-500 font-medium">Normal</p>
        </div>
        <div className="p-4 bg-pink-50 rounded-md shadow text-center">
          <p className="text-gray-500 font-medium">Heart Rate</p>
          <p className="text-2xl font-bold text-gray-800">78 bpm</p>
          <p className="text-red-500 font-medium">Lower than Average</p>
        </div>
      </div>

      {/* Diagnostic List Section */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Diagnostic List</h3>
        <table className="table-auto w-full bg-white rounded-md shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4 text-left font-medium text-gray-600">Problem/Diagnosis</th>
              <th className="p-4 text-left font-medium text-gray-600">Description</th>
              <th className="p-4 text-left font-medium text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="p-4">Hypertension</td>
              <td className="p-4">Chronic high blood pressure</td>
              <td className="p-4 text-yellow-500">Under Observation</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="p-4">Type 2 Diabetes</td>
              <td className="p-4">Insulin resistance and elevated blood sugar</td>
              <td className="p-4 text-green-500">Cured</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="p-4">Asthma</td>
              <td className="p-4">Recurrent episodes of bronchial constriction</td>
              <td className="p-4 text-gray-500">Inactive</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiagnosisHistory;
