import React from "react";
import { MdWarningAmber } from "react-icons/md";

function AllergyCard({ name, severity, reaction }) {
  const severityColor =
    severity.toLowerCase() === "severe"
      ? "text-red-700 bg-red-100"
      : severity.toLowerCase() === "moderate"
      ? "text-yellow-700 bg-yellow-100"
      : "text-green-700 bg-green-100";

  return (
    <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-200">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <MdWarningAmber className="text-red-600 text-xl" />
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      </div>

      {/* Severity */}
      <div className="flex justify-between items-center">
        <p className="font-medium text-gray-700">Severity:</p>
      <span className={`inline-block mt-1 mb-3 px-3 py-1 text-sm rounded-full ${severityColor}`}>
        {severity}
      </span>
      </div>

      {/* Reaction */}
      <div className="flex flex-col">
        <p className="font-medium text-gray-700">Reaction:</p>
      <p className="text-gray-600">{reaction}</p>
      </div>
    </div>
  );
}

export default AllergyCard;
