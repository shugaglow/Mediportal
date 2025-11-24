import React, { useState } from "react";
import { HiOutlineBell, HiOutlineCalendar } from "react-icons/hi2";
import QuickActions from "../components/QuickActions";
import NotificationCard from "../components/NotificationCard";
import ReminderCard from "../components/ReminderCard";
import AppointmentCards from "./Appointments/AppointmentCards";

export default function Home() {
  // Notifications state
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Appointment Approved",
      message: "Your appointment with Dr. Kelechi has been confirmed.",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      title: "New Health Tip",
      message: "Stay hydrated! Drink at least 2L of water today.",
      time: "Yesterday",
      read: true,
    },
  ]);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    );
  };

  return (
    <section className="min-h-screen w-full">
      <div className=" w-full">

        <div className="pl-4">
          <h1 className="text-xl font-bold text-blue-900 mt-16 lg:mt-8">Welcome to MediPortal!</h1>
            <p className=' text-gray-600 mb-4'>Here's what's happening with your health today.</p>
        </div>
        

        {/* Appointments */}
        <div className="mt-6 pl-4 w-full gap-6">
          <div className="bg-white w-full p-4 sm:p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Upcoming Appointments</h2>
            <p className="text-gray-600 text-[15px] sm:text-[16px]">
              Schedule and manage your medical appointments with ease.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
              <AppointmentCards
                doctorName="Dr. Sarah Johnson"
                department="Dermatology"
                date="Feb 10, 2025"
                time="10:30 AM"
                status="upcoming"
                location="Room 204, Main Hospital"
              />

              <AppointmentCards
                doctorName="Dr. Michael Ade"
                department="Cardiology"
                date="Jan 25, 2025"
                time="2:00 PM"
                status="completed"
                location="Room 101, Heart Center"
              />

              <AppointmentCards
                doctorName="Dr. Helen Ojo"
                department="Pediatrics"
                date="Jan 12, 2025"
                time="9:00 AM"
                status="cancelled"
                location="Room 305, Children's Wing"
              />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className=" pl-4 my-8">
          <QuickActions />
        </div>

        {/* Notifications & Reminders */}
        <div className="flex flex-col gap-4 pl-4 mb-8">
          <h2 className="text-lg font-semibold">Notifications & Reminders</h2>

          <div className="flex flex-col gap-6">
            {/* Notifications */}
            <div className="flex flex-col gap-4">
              {notifications.map((notif) => (
                <NotificationCard
                  key={notif.id}
                  title={notif.title}
                  message={notif.message}
                  time={notif.time}
                  read={notif.read}
                  onMarkRead={() => markAsRead(notif.id)}
                />
              ))}
            </div>

            {/* Reminders */}
            <div className="flex flex-col gap-4">
              <ReminderCard
                title="Take your morning medication"
                time="Everyday • 8:00 AM"
                category="Medication"
                icon={<HiOutlineBell className="text-blue-600 text-2xl" />}
                enabled={true}
              />

              <ReminderCard
                title="Therapy Session"
                time="Jan 25, 2025 • 2:00 PM"
                category="Appointment"
                icon={<HiOutlineCalendar className="text-green-600 text-2xl" />}
                enabled={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

