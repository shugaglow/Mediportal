import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { useState } from "react";

export default function ReminderCard({ title, time, category, icon, enabled }) {
  const [active, setActive] = useState(enabled);

  return (
    <div className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-gray-100 
                    flex flex-col sm:flex-row items-start sm:items-center 
                    justify-between gap-4 sm:gap-2 w-full">

      {/* Left Section */}
      <div className="flex items-start gap-3 sm:gap-4 w-full">
        
        {/* Icon */}
        <div className="text-lg  bg-blue-100 p-2 rounded-full sm:text-xl shrink-0">
          {icon}
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-gray-900 text-base sm:text-lg leading-tight">
            {title}
          </h3>
        {/* Toggle */}
      <button onClick={() => setActive(!active)} className="self-end sm:self-center">
        {active ? (
          <FaToggleOn className="text-blue-700 text-3xl sm:text-4xl" />
        ) : (
          <FaToggleOff className="text-gray-400 text-3xl sm:text-4xl" />
        )}
      </button>
          </div>

        <div className="flex justify-between mt-2">
            <p className="text-gray-600 text-sm sm:text-base mt-1">
            {time}
          </p>
        </div>

          <span className="mt-2 inline-block text-xs sm:text-sm px-2 py-1 
                           rounded-full bg-gray-100 text-gray-700">
            {category}
          </span>
        </div>
      </div>

      
    </div>
  );
}


