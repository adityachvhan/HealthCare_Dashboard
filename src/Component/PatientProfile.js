import React from "react";
import { FiCalendar, FiPhone, FiUser, FiDownload } from "react-icons/fi";

const PatientProfile = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 space-y-6">
      {/* Profile Header */}
      <div className="flex flex-col items-center text-center">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover"
        />
        <h2 className="text-lg font-bold mt-4">Jessica Taylor</h2>
      </div>

      {/* Personal Details */}
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <FiCalendar className="text-gray-500" />
          <div>
            <p className="text-sm text-gray-500">Date of Birth</p>
            <p className="text-sm font-medium">August 23, 1996</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FiUser className="text-gray-500" />
          <div>
            <p className="text-sm text-gray-500">Gender</p>
            <p className="text-sm font-medium">Female</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FiPhone className="text-gray-500" />
          <div>
            <p className="text-sm text-gray-500">Contact Info.</p>
            <p className="text-sm font-medium">(415) 555-1234</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FiPhone className="text-gray-500" />
          <div>
            <p className="text-sm text-gray-500">Emergency Contacts</p>
            <p className="text-sm font-medium">(415) 555-5678</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FiUser className="text-gray-500" />
          <div>
            <p className="text-sm text-gray-500">Insurance Provider</p>
            <p className="text-sm font-medium">Sunrise Health Assurance</p>
          </div>
        </div>
      </div>

      {/* Show All Information Button */}
      <button className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600">
        Show All Information
      </button>

      {/* Lab Results */}
      <div>
        <h3 className="text-lg font-bold mb-4">Lab Results</h3>
        <ul className="space-y-4">
          {[
            "Blood Tests",
            "CT Scans",
            "Radiology Reports",
            "X-Rays",
            "Urine Test",
          ].map((test, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
            >
              <span className="text-sm font-medium">{test}</span>
              <FiDownload className="text-gray-500 cursor-pointer hover:text-teal-500" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PatientProfile;
