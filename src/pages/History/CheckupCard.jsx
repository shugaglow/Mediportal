import React from "react";
import { HiOutlineClipboardCopy } from "react-icons/hi";

function CheckupCard({ title, date, doctor, diagnosis, notes }) {
  
  const handleCopy = () => {
    const textToCopy = `
${title}
${date} • ${doctor}

Diagnosis:
${diagnosis}

Notes:
${notes}
    `;
    navigator.clipboard.writeText(textToCopy)
      .then(() => alert("Checkup details copied!"))
      .catch((err) => console.error("Failed to copy: ", err));
  };

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm w-full max-w-md relative">
      
      {/* Copy Icon */}
      <button
        onClick={handleCopy}
        className="absolute top-4 right-4 bg-blue-100 p-2 rounded-full text-blue-400 hover:text-blue-700 hover:bg-blue-200 transition"
        title="Copy details"
      >
        <HiOutlineClipboardCopy size={20} />
      </button>

      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-bold text-blue-900">{title}</h2>
        <p className="text-gray-500 text-sm mt-1">{date} • {doctor}</p>
      </div>

      {/* Diagnosis */}
      <div className="mb-2">
        <p className="text-gray-500 text-sm font-semibold">Diagnosis:</p>
        <p className="text-gray-800">{diagnosis}</p>
      </div>

      {/* Notes */}
      <div>
        <p className="text-gray-500 text-sm font-semibold">Notes:</p>
        <p className="text-gray-800">{notes}</p>
      </div>

    </div>
  );
}

export default CheckupCard;

