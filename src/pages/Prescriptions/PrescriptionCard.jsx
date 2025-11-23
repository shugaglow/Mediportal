import React from "react";
import { HiOutlineClipboardCheck } from "react-icons/hi";

function PrescriptionCard({
  status,
  medication,
  doctor,
  dosage,
  frequency,
  startDate,
  endDate,
  refillsLeft,
}) {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm w-full max-w-md">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-lg text-blue-900 flex items-center gap-2">
          <HiOutlineClipboardCheck className="text-blue-700" size={20} />
          Prescription
        </h2>

        <span
          className={`px-3 py-1 text-xs rounded-full font-semibold ${
            status === "active"
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>

      {/* Medication name */}
      <h1 className="text-xl font-semibold text-gray-900">{medication}</h1>
      <p className="text-sm text-gray-500 mb-4">
        Prescribed by <span className="font-medium">{doctor}</span>
      </p>

      {/* Details Grid */}
      <div className="flex flex-col gap-4 text-sm">
        <div className="flex justify-between">
          <p className="text-gray-500">Dosage:</p>
          <p className="font-semibold text-gray-800">{dosage}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-gray-500">Frequency:</p>
          <p className="font-semibold text-gray-800">{frequency}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-gray-500">Start Date:</p>
          <p className="font-semibold text-gray-800">{startDate}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-gray-500">End Date:</p>
          <p className="font-semibold text-gray-800">{endDate}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-gray-500">Refills Left:</p>
          <p className="font-semibold text-gray-800">{refillsLeft}</p>
        </div>
      </div>

      {/* Refill Button */}
      <div className="flex gap-2">
        <button
        className="mt-6 w-full border text-gray-600 border-gray-200 py-2 rounded-md font-regular hover:bg-gray-100 transition"
      >
        Refill
      </button>

      <button
        className="mt-6 w-full border text-gray-600 border-gray-200 py-2 rounded-md font-regular hover:bg-gray-100 transition"
      >
        Export
      </button>
      </div>
    </div>
  );
}

export default PrescriptionCard;
