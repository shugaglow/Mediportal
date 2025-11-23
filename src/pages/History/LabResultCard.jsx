import React from "react";
import { HiOutlineDownload } from "react-icons/hi";

function LabResultCard({ testName, date, doctor, status, onDownload }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm w-full relative">
      
      {/* Header */}
      <div className="mb-4 flex justify-between items-start">
        <div>
          <h2 className="text-lg font-bold text-blue-900">{testName}</h2>
          <p className="text-gray-500 text-sm mt-1">{date} • Ordered by {doctor}</p>
        </div>

        {/* Status Tag */}
        <span
          className={`px-4 py-1 text-xs font-semibold rounded-full ${
            status.toLowerCase() === "normal"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>

      {/* Download Button */}
      <button
        onClick={onDownload}
        className="mt-2 flex items-center gap-2 border border-gray-200 text-gray-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition"
      >
        <HiOutlineDownload size={18} />
        Download Report
      </button>
    </div>
  );
}

export default LabResultCard;
