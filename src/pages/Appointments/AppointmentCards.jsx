import React from "react";
import { HiOutlineCalendar, HiOutlineClock } from "react-icons/hi";

function AppointmentCards({ doctorName, date, time, department, status, location }) {
  return (
    <div className="w-full bg-white rounded-lg shadow-md p-5 flex flex-col gap-4 border border-gray-200 hover:shadow-lg transition">

      {/* Doctor Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex gap-3 items-center">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
            {doctorName?.[0]}
          </div>
          <div>
            <h3 className="font-semibold text-[15px] text-gray-800">{doctorName}</h3>
            <p className="text-sm text-gray-500">{department}</p>
          </div>
        </div>

        <div
          className={`px-3 py-1 rounded-full text-xs font-semibold self-start sm:self-auto
            ${status === "upcoming" ? "bg-blue-100 text-blue-700" : ""}
            ${status === "completed" ? "bg-green-100 text-green-700" : ""}
            ${status === "cancelled" ? "bg-red-100 text-red-700" : ""}
          `}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </div>
      </div>

      {/* Date & Time */}
      <div className="flex flex-col gap-3 text-gray-700">
        
        <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
          <div className="flex items-center gap-2">
            <HiOutlineCalendar size={18} className="text-blue-600" />
            <span className="text-sm font-medium">{date}</span>
          </div>

          <div className="flex items-center gap-2">
            <HiOutlineClock size={18} className="text-blue-600" />
            <span className="text-sm font-medium">{time}</span>
          </div>
        </div>

        <p className="text-sm text-gray-600">{location}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-2 mt-2">

        <button className="text-gray-900 bg-white border border-gray-200 px-3 py-2 rounded-md text-sm font-medium hover:text-blue-700 hover:bg-blue-100 transition">
          Reschedule
        </button>

        <button className="text-gray-900 bg-white border border-gray-200 px-3 py-2 rounded-md text-sm font-medium hover:text-blue-700 hover:bg-blue-100 transition">
          Cancel
        </button>

        <button className="text-gray-900 bg-white border border-gray-200 px-3 py-2 rounded-md text-sm font-medium hover:text-blue-700 hover:bg-blue-100 transition">
          Add to Calendar
        </button>

      </div>
    </div>
  );
}

export default AppointmentCards;
