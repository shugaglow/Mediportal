// NotificationCard.jsx
import { HiOutlineBell, HiCheckBadge } from "react-icons/hi2";

export default function NotificationCard({
  title,
  message,
  time,
  read,
  onMarkRead,
}) {
  return (
    <div
      className={`p-4 rounded-lg border 
      ${read ? "bg-gray-50 border-gray-200" : "bg-white border-blue-200"}
      flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4`}
    >
      {/* Left side */}
      <div className="flex gap-3">
        <div className="p-2 bg-blue-100 rounded-full h-fit min-w-10 min-h-10 flex items-center justify-center">
          <HiOutlineBell className="text-blue-700 text-xl" />
        </div>

        <div className="flex flex-col">
          <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
            {title}
          </h3>

          <p className="text-gray-600 text-xs sm:text-sm mt-1">{message}</p>
          <p className="text-xs text-gray-500 mt-2">{time}</p>
        </div>
      </div>

      {/* Mark as read */}
      {!read && (
        <button
          onClick={onMarkRead}
          className="text-blue-600 text-xs sm:text-sm flex items-center gap-1 hover:underline self-start sm:self-center"
        >
          <HiCheckBadge className="text-lg" />
          Mark as read
        </button>
      )}
    </div>
  );
}

