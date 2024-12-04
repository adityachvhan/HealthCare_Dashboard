import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { patient } from "./Data";

const PatientsList = () => {
    return (
        <div className="bg-white shadow-md rounded-lg h-[765px] overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center mb-4 p-5">
                <h2 className="text-lg font-semibold">Patients</h2>
                <button className="text-gray-500 hover:text-gray-700">
                    <SearchIcon />
                </button>
            </div>

            {/* Patients List */}
            <div className="overflow-y-scroll h-[calc(100%)] m-2">
                {patient && patient.length > 0 ? (
                    patient.map((patient, index) => (
                        <div
                            key={index}
                            className={`flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 ${
                                patient.active ? "bg-teal-100" : ""
                            }`}
                        >
                            <div className="flex items-center space-x-3">
                                <img
                                    src={patient.profile_picture || "default-image.jpg"}
                                    alt={patient.name || "Unknown"}
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                    <p className="font-medium">{patient.name || "Unnamed Patient"}</p>
                                    <p className="text-sm text-gray-500">
                                        {patient.gender || "Unknown"}, {patient.age || "N/A"}
                                    </p>
                                </div>
                            </div>
                            <button className="text-gray-500 hover:text-gray-700">
                                <i className="fas fa-ellipsis-v"></i>
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-center py-4">No patients found</p>
                )}
            </div>
        </div>
    );
};

export default PatientsList;
