import { useState, useEffect } from "react";
import { FaBell, FaPlus, FaPills, FaHeartbeat, FaCalendarCheck } from "react-icons/fa";
import ReminderCard from "../components/ReminderCard";

export default function Reminders() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  const [reminders, setReminders] = useState([
    {
      title: "Take Blood Pressure Medication",
      time: "8:00 AM",
      category: "Medication",
      icon: <FaPills className="text-blue-700 text-2xl" />,
      enabled: true,
    },
    {
      title: "Annual Check-Up",
      time: "April 30, 2025 • 10:30 AM",
      category: "Appointment",
      icon: <FaCalendarCheck className="text-green-600 text-2xl" />,
      enabled: true,
    },
    {
      title: "15-Minute Evening Walk",
      time: "7:00 PM",
      category: "Wellness",
      icon: <FaHeartbeat className="text-red-600 text-2xl" />,
      enabled: false,
    },
  ]);

  const addReminder = (e) => {
    e.preventDefault();
    const form = e.target;

    const newReminder = {
      title: form.title.value,
      time: form.time.value,
      category: form.category.value,
      enabled: true,
      icon:
        form.category.value === "Medication" ? (
          <FaPills className="text-blue-700 text-2xl" />
        ) : form.category.value === "Appointment" ? (
          <FaCalendarCheck className="text-green-600 text-2xl" />
        ) : (
          <FaHeartbeat className="text-red-600 text-2xl" />
        ),
    };

    setReminders([...reminders, newReminder]);
    setShowModal(false);
    form.reset();
  };

  return (
    <div className="w-full">
      {/* Header */}
      <h1 className="text-xl font-bold text-blue-900 lg:mt-0 mt-16">Reminders</h1>
      <p className="text-gray-600 mt-1">
        Stay on top of your health with smart personalized reminders.
      </p>

      {/* Add Reminder Button */}
      <button
        onClick={() => setShowModal(true)}
        className="mt-5 bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center gap-2"
      >
        <FaPlus /> Add Reminder
      </button>

      {/* Reminders List */}
      <div className="grid grid-cols-1 gap-4 mt-6">
        {reminders.map((reminder, index) => (
          <ReminderCard key={index} {...reminder} />
        ))}
      </div>

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl shadow-xl w-[90%] md:w-[400px] animate-scaleIn">
            <h2 className="text-xl font-semibold mb-4">Add New Reminder</h2>

            <form onSubmit={addReminder} className="flex flex-col gap-4">
              <div>
                <label className="font-medium">Title</label>
                <input
                  name="title"
                  required
                  className="w-full mt-1 p-2 border rounded-md"
                  placeholder="Enter reminder title"
                />
              </div>

              <div>
                <label className="font-medium">Time / Date</label>
                <input
                  name="time"
                  required
                  className="w-full mt-1 p-2 border rounded-md"
                  placeholder="e.g. 8:00 AM or April 30, 2025"
                />
              </div>

              <div>
                <label className="font-medium">Category</label>
                <select name="category" className="w-full mt-1 p-2 border rounded-md">
                  <option>Medication</option>
                  <option>Appointment</option>
                  <option>Wellness</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded-md hover:bg-gray-100"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600"
                >
                  Save Reminder
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

