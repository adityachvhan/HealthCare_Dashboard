import React from 'react'
import PatientsList from './Patients'
import DiagnosisHistory from './DiagnosisHistory'
import BloodPressureChart from './BloodPressureChart'
import PatientProfile from './PatientProfile'

const Middle = () => {
    return (
        <div className=" w-full gap-3 h-[800px] mt-4 flex">
            {/* Left Section */}
            <div className="w-[25%] ">
                <PatientsList />
            </div>

            {/* Middle Section */}
            <div className="w-[50%] ">
                <DiagnosisHistory />
            </div>

            {/* Right Section */}
            <div className="w-[25%] ">
                <PatientProfile />
            </div>
        </div>
    )
}

export default Middle
