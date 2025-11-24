import { useState } from "react";
import NotificationCard from "../components/NotificationCard";


export default function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Upcoming Appointment",
      message: "You have an appointment scheduled for April 28 at 10:00 AM.",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      title: "New Prescription Available",
      message: "Your prescription for Lisinopril has been updated.",
      time: "Yesterday",
      read: true,
    },
    {
      id: 3,
      title: "Lab Results Ready",
      message: "Your Complete Blood Count (CBC) results are now available.",
      time: "3 days ago",
      read: false,
    },
  ]);

  const [settings, setSettings] = useState({
    appointments: true,
    prescriptions: true,
    labResults: true,
    healthTips: false,
  });

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const updateSetting = (field) => {
    setSettings((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <div className="w-full pl-4">
      {/* Header */}
      <div>
        <h1 className="text-xl flex  justify-start items-center gap-2 font-bold text-blue-900 lg:mt-8 mt-16">
          Notifications
        </h1>
        <p className="text-gray-600 mt-2">
          Stay updated with appointment reminders, lab results, and health-related alerts.
        </p>
      </div>

<div className="bg-white p-4 rounded-md mt-8">
        {/* Notification List */}
      <div className=" space-y-4">
        {notifications.map((note) => (
          <NotificationCard
            key={note.id}
            title={note.title}
            message={note.message}
            time={note.time}
            read={note.read}
            onMarkRead={() => markAsRead(note.id)}
          />
        ))}
      </div>

      {/* Notification Preferences */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold text-gray-800">
          Notification Preferences
        </h2>
        <p className="text-gray-500 text-sm">
          Choose the types of alerts you want to receive.
        </p>

        <div className="mt-4 space-y-4">
          {[
            ["appointments", "Appointment Reminders"],
            ["prescriptions", "Prescription Refill Alerts"],
            ["labResults", "Lab Result Updates"],
            ["healthTips", "Health Tips & Advice"],
          ].map(([field, label]) => (
            <div key={field} className="flex justify-between items-center p-3 bg-white rounded-lg border">
              <span className="text-gray-700">{label}</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings[field]}
                  onChange={() => updateSetting(field)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-700"></div>
                <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"></div>
              </label>
            </div>
          ))}
        </div>
      </div>
</div>
    </div>
  );
}
