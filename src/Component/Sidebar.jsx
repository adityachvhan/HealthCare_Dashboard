import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import TopicOutlinedIcon from '@mui/icons-material/TopicOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
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
                    <HomeOutlinedIcon className='mr-2' /> Overview
                </a>

                <a
                    href="#patients"
                    className="text-white bg-teal-500 px-4 py-2 rounded-lg hover:bg-teal-600 flex items-center"
                >
                    <PeopleAltOutlinedIcon className='mr-2' /> Patients
                </a>
                <a
                    href="#schedule"
                    className="text-gray-600 hover:text-blue-600 flex items-center"
                >
                    <CalendarTodayOutlinedIcon className='mr-2' /> Schedule
                </a>
                <a
                    href="#message"
                    className="text-gray-600 hover:text-blue-600 flex items-center"
                >
                    <ChatBubbleOutlineOutlinedIcon className='mr-2' /> Message
                </a>
                <a
                    href="#transactions"
                    className="text-gray-600 hover:text-blue-600 flex items-center"
                >
                    <TopicOutlinedIcon className='mr-2' /> Transactions
                </a>
            </div>

            {/* Right Section - User Info */}
            <div className="flex items-center space-x-4">

                <div className="flex justify-between items-center gap-5">
                    <img
                        src="https://fedskillstest.ct.digital/4.png"
                        alt="User Profile"
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="text-right">
                        <p className="text-lg font-semibold">Dr. Jose Simmons</p>
                        <p className="text-xs text-gray-500">General Practitioner</p>
                    </div>
                </div>

                {/* Border Divider */}
                <div className="border-l border-gray-300 h-10"></div>

                <button className="text-gray-600  flex items-center space-x-2">
                    <SettingsOutlinedIcon className='hover:text-blue-600'/>
                    <MoreVertOutlinedIcon className='hover:text-blue-600'/>
                </button>
            </div>

        </nav>
    );
};

export default Sidebar;
