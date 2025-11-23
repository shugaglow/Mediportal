import React from "react";

function VaccinationCard({ vaccineName, administeredDate, nextDueDate }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm w-full max-w-md">
      
      {/* Vaccine Header */}
      <div className="mb-4">
        <h2 className="text-lg font-bold text-blue-900">{vaccineName}</h2>
        <p className="text-gray-500 text-sm mt-1">
          Administered: {administeredDate}
        </p>
      </div>

      {/* Next Due */}
      <div>
        <p className="text-gray-500 text-sm font-semibold">Next due:</p>
        <p className="text-gray-800">{nextDueDate}</p>
      </div>

    </div>
  );
}

export default VaccinationCard;
