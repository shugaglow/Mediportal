import React from 'react'
import { 
  HiOutlineCalendar,
  HiOutlineClipboardList,
  HiOutlineFolderOpen,
  HiOutlineBell,
  HiOutlineCreditCard, 
  HiOutlineHeart 
} from "react-icons/hi"
import { Link } from "react-router-dom"

function QuickActions() {
  return (
    <div className='w-full flex-col flex mt-8'>
      <h1 className='mb-4 font-bold text-xl'>Quick Actions</h1>
      
      {/* GRID FOR MOBILE → DESKTOP */}
      <div className="grid 
                      grid-cols-2 
                      sm:grid-cols-3 
                      lg:grid-cols-6 
                      gap-4 w-full">

        <Link 
          to="/appointments"
          className="bg-white border flex flex-col justify-center items-center 
                     border-gray-200 rounded-md h-28 sm:h-32 hover:bg-blue-50 transition"
        >
          <HiOutlineCalendar className="text-blue-700 mb-1 sm:mb-2" size={28} />
          <h1 className="text-center text-xs sm:text-sm">Book Appointment</h1>
        </Link>

        <Link 
          to="/prescription"
          className="bg-white border flex flex-col justify-center items-center 
                     border-gray-200 rounded-md h-28 sm:h-32 hover:bg-blue-50 transition"
        >
          <HiOutlineClipboardList className="text-green-700 mb-1 sm:mb-2" size={28} />
          <h1 className="text-center text-xs sm:text-sm">Prescriptions</h1>
        </Link>

        <Link 
          to="/medicalhistory"
          className="bg-white border flex flex-col justify-center items-center 
                     border-gray-200 rounded-md h-28 sm:h-32 hover:bg-blue-50 transition"
        >
          <HiOutlineFolderOpen className="text-amber-700 mb-1 sm:mb-2" size={28} />
          <h1 className="text-center text-xs sm:text-sm">Medical History</h1>
        </Link>

        <Link 
          to="/billings"
          className="bg-white border flex flex-col justify-center items-center 
                     border-gray-200 rounded-md h-28 sm:h-32 hover:bg-blue-50 transition"
        >
          <HiOutlineCreditCard className="text-blue-500 mb-1 sm:mb-2" size={28} />
          <h1 className="text-center text-xs sm:text-sm">Billings</h1>
        </Link>

        <Link 
          to="/healthtips"
          className="bg-white border flex flex-col justify-center items-center 
                     border-gray-200 rounded-md h-28 sm:h-32 hover:bg-blue-50 transition"
        >
          <HiOutlineHeart className="text-green-700 mb-1 sm:mb-2" size={28} />
          <h1 className="text-center text-xs sm:text-sm">Health Tips</h1>
        </Link>

        <Link 
          to="/reminders"
          className="bg-white border flex flex-col justify-center items-center 
                     border-gray-200 rounded-md h-28 sm:h-32 hover:bg-blue-50 transition"
        >
          <HiOutlineBell className="text-amber-700 mb-1 sm:mb-2" size={28} />
          <h1 className="text-center text-xs sm:text-sm">Reminders</h1>
        </Link>

      </div>
    </div>
  )
}

export default QuickActions

