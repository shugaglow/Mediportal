import React from 'react'
import { HiOutlineCalendar, HiOutlineClock, } from "react-icons/hi";

function UpcomingCards({doctorName, date, time, department, status, location}) {
  return (
    <div>
      <div className="w-full bg-white rounded-lg shadow-md p-5 flex flex-col gap-3 border border-gray-200 hover:shadow-lg transition">
              
              {/* Doctor */}
              <div className="flex items-center justify-between gap-1">
               <div className="flex gap-2">
                 <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                  {doctorName?.[0]}
                </div>
                <div>
                  <h3 className="font-semibold text-[14px] text-gray-800">{doctorName}</h3>
                  <p className="text-sm text-gray-500">{department}</p>
                </div>
               </div>
        
                 <div
                  className={`px-3 py-1 rounded-full text-xs font-semibold
                    ${status === "upcoming" ? "bg-blue-100 text-blue-700" : ""}
                  
                  `}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </div>
              </div>
        
              {/* Date & Time */}
              <div className="flex flex-col items-between gap-2 text-gray-700">
               <div className="flex justify-between gap-2">
                 <div className="flex items-center gap-2">
                  <HiOutlineCalendar size={18} className="text-blue-600" />
                  <span className="text-sm font-medium">{date}</span>
                </div>
        
                <div className="flex items-center gap-2">
                  <HiOutlineClock size={18} className="text-blue-600" />
                  <span className="text-sm font-medium">{time}</span>
                </div>
               </div>
        
                <div>
                    {location}
                </div>
              </div>
        
              {/* Status */}
              <div className="flex items-center justify-start gap-2">
               
                <button className="text-gray-900 bg-white border border-gray-200 px-2 py-2 rounded-md text-sm hover:text-blue-700 hover:bg-blue-100 transition focus:bg-blue-200">
                  Reschedule
                </button>
        
                <button className="text-gray-900 bg-white border border-gray-200 px-4 py-2 rounded-md text-sm hover:text-blue-700 hover:bg-blue-100 transition focus:bg-blue-200">
                  Cancel
                </button>
        
                
              </div>
            </div>
        
    </div>
  )
}

export default UpcomingCards