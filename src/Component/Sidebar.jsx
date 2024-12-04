import React from 'react';

const Sidebar = () => {

    return (
        <nav className="bg-white shadow-md px-6 py-7 flex items-center justify-between">
            {/* Left Section - Logo */}
            <div className="flex items-center space-x-2">
                <img
                    src="https://via.placeholder.com/40"
                    alt="Logo"
                    className="w-8 h-8"
                />
                <span className="text-3xl font-bold text-blue-600">Tech.Care</span>
            </div>

            {/* Center Section - Navigation Links */}
            <div className="flex space-x-6">
                <a
                    href="#overview"
                    className="text-gray-600 hover:text-blue-600 flex items-center"
                >
                    <i className="fas fa-home mr-1"></i> Overview
                </a>
                <a
                    href="#patients"
                    className="text-white bg-teal-500 px-4 py-2 rounded-lg hover:bg-teal-600 flex items-center"
                >
                    <i className="fas fa-users mr-1"></i> Patients
                </a>
                <a
                    href="#schedule"
                    className="text-gray-600 hover:text-blue-600 flex items-center"
                >
                    <i className="fas fa-calendar-alt mr-1"></i> Schedule
                </a>
                <a
                    href="#message"
                    className="text-gray-600 hover:text-blue-600 flex items-center"
                >
                    <i className="fas fa-envelope mr-1"></i> Message
                </a>
                <a
                    href="#transactions"
                    className="text-gray-600 hover:text-blue-600 flex items-center"
                >
                    <i className="fas fa-file-invoice-dollar mr-1"></i> Transactions
                </a>
            </div>

            {/* Right Section - User Info */}
            <div className="flex items-center space-x-4">
                <div className="text-right">
                    <p className="text-sm font-semibold">Dr. Jose Simmons</p>
                    <p className="text-xs text-gray-500">General Practitioner</p>
                </div>
                <img
                    src="https://via.placeholder.com/40"
                    alt="User Profile"
                    className="w-10 h-10 rounded-full"
                />
                <button className="text-gray-600 hover:text-blue-600">
                    <i className="fas fa-cog"></i>
                </button>
            </div>
        </nav>
    );
};

export default Sidebar;
