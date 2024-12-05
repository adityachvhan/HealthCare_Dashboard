import React from "react";
import { FiCalendar, FiPhone, FiUser, FiShield, FiDownload } from "react-icons/fi";

const PatientProfile = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 space-y-6 h-[800px]">
      {/* Profile Header */}
      <div className="flex flex-col items-center text-center">
        <img
          src="https://fedskillstest.ct.digital/4.png"
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border-2 border-teal-500"
        />
        <h2 className="text-xl font-bold mt-4 text-gray-800">Jessica Taylor</h2>
      </div>

      {/* Personal Details */}
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <FiCalendar className="text-teal-500 w-5 h-5" />
          <div>
            <p className="text-sm text-gray-500">Date of Birth</p>
            <p className="text-sm font-medium text-gray-800">August 23, 1996</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FiUser className="text-teal-500 w-5 h-5" />
          <div>
            <p className="text-sm text-gray-500">Gender</p>
            <p className="text-sm font-medium text-gray-800">Female</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FiPhone className="text-teal-500 w-5 h-5" />
          <div>
            <p className="text-sm text-gray-500">Contact Info.</p>
            <p className="text-sm font-medium text-gray-800">(415) 555-1234</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FiPhone className="text-teal-500 w-5 h-5" />
          <div>
            <p className="text-sm text-gray-500">Emergency Contacts</p>
            <p className="text-sm font-medium text-gray-800">(415) 555-5678</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FiShield className="text-teal-500 w-5 h-5" />
          <div>
            <p className="text-sm text-gray-500">Insurance Provider</p>
            <p className="text-sm font-medium text-gray-800">
              Sunrise Health Assurance
            </p>
          </div>
        </div>
      </div>

      {/* Show All Information Button */}
      <button className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition duration-300">
        Show All Information
      </button>

      {/* Lab Results */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-4">Lab Results</h3>
        <div className="h-[200px] overflow-y-auto bg-gray-100 p-3 rounded-lg">
          <ul className="space-y-4">
            {[
              "Blood Tests",
              "CT Scans",
              "Radiology Reports",
              "X-Rays",
              "Urine Test",
              "MRI Scan",
              "Allergy Test",
              "Liver Function Test",
              "Kidney Function Test",
              "Cardiac Reports",
            ].map((test, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition duration-300"
              >
                <span className="text-sm font-medium text-gray-800">{test}</span>
                <FiDownload className="text-teal-500 cursor-pointer hover:scale-110 transition duration-300" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
