import React, { useState } from "react";
import {
  HiOutlineMoon,
   HiOutlineGlobeAlt ,
  HiOutlineDocumentText,
  HiOutlineTrash,
  HiOutlineShieldCheck,
  HiOutlineBell,
  HiOutlineCloudDownload,
} from "react-icons/hi";

export default function Settings() {
  const [appointmentReminders, setAppointmentReminders] = useState(true);
  const [prescriptionRefills, setPrescriptionRefills] = useState(false);
  const [healthTips, setHealthTips] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoplayVideos, setAutoplayVideos] = useState(true);
  const [locationAccess, setLocationAccess] = useState(true);

  return (
    <div className="w-full px-4">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-blue-900 lg:mt-8 mt-24">
          Settings
        </h1>
        <p className="text-gray-600">
          Customize your experience, notifications, privacy, and security.
        </p>
      </div>

<div className="p-4 grid grid-cols-1 bg-white rounded-md mt-8 gap-4 w-full">
        {/* GENERAL PREFERENCES */}
      <div className="bg-white border border-gray-200 p-5 rounded-lg shadow">
        <h2 className="text-lg font-semibold text-blue-900 mb-4">
          General Preferences
        </h2>

        {/* Dark Mode */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="font-medium text-gray-800 flex items-center gap-2">
              <HiOutlineMoon /> Dark Mode
            </p>
            <p className="text-sm text-gray-600">Switch to a darker theme</p>
          </div>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>

        {/* Language */}
        <div className="mb-4 ">
          <p className="font-medium text-gray-800 flex items-center gap-2">
            < HiOutlineGlobeAlt  /> Language
          </p>
          <select className="border p-2 w-full rounded-md mt-1">
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
          </select>
        </div>

        {/* Video Autoplay */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-800">Autoplay Educational Videos</p>
            <p className="text-sm text-gray-600">
              Automatically play health videos
            </p>
          </div>
          <input
            type="checkbox"
            checked={autoplayVideos}
            onChange={() => setAutoplayVideos(!autoplayVideos)}
          />
        </div>
      </div>

      {/* NOTIFICATION SETTINGS */}
      <div className="bg-white p-5  border border-gray-200 rounded-lg shadow">
        <h2 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
          <HiOutlineBell /> Notification Preferences
        </h2>

        <SettingToggle
          label="Appointment Reminders"
          description="Get notified before your appointments"
          value={appointmentReminders}
          setValue={setAppointmentReminders}
        />

        <SettingToggle
          label="Prescription Refills"
          description="Be notified when it's time to refill"
          value={prescriptionRefills}
          setValue={setPrescriptionRefills}
        />

        <SettingToggle
          label="Health Tips"
          description="Receive personalized health advice"
          value={healthTips}
          setValue={setHealthTips}
        />
      </div>
      {/* SECURITY SETTINGS */}
      <div className="bg-white p-5  border border-gray-200 rounded-lg shadow">
        <h2 className="text-lg font-semibold text-blue-900 mb-4">
          Security
        </h2>

        <div className="grid grid-cols-1 gap-4 mb-4">
          <LabeledInput label="Current Password" type="password" />
          <LabeledInput label="New Password" type="password" />
          <LabeledInput label="Confirm Password" type="password" />
        </div>

        <button className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600">
          Change Password
        </button>

        <div className="mt-5">
          <h3 className="text-gray-800 font-medium flex items-center gap-2">
            <HiOutlineShieldCheck /> Two-Factor Authentication
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            Add an extra layer of security to your account
          </p>
          <button className="border px-4 py-2 rounded-md hover:bg-gray-100">
            Enable 2FA
          </button>
        </div>
      </div>


        {/* PRIVACY SETTINGS */}
      <div className="bg-white p-5  border border-gray-200 rounded-lg shadow">
        <h2 className="text-lg font-semibold text-blue-900 mb-4">
          Privacy & Data
        </h2>

        {/* Location Access */}
        <SettingToggle
          label="Location Access"
          description="Allow app to use your location for nearby clinics"
          value={locationAccess}
          setValue={setLocationAccess}
        />

        {/* Download Data */}
        <button className="mt-4 border px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100">
          <HiOutlineCloudDownload /> Download My Data
        </button>

      {/* DANGER ZONE */}
      <div className="bg-red-50 p-5 mt-8 rounded-lg shadow border border-red-200">
        <h2 className="text-lg font-semibold text-red-700 mb-4">
          Danger Zone
        </h2>

        <p className="text-gray-700 mb-3">
          Permanently delete your account and all data.
        </p>

        <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
          <HiOutlineTrash /> Delete Account
        </button>
      </div>
      </div>
</div>
    </div>
  );
}

/* REUSABLE COMPONENTS */
function SettingToggle({ label, description, value, setValue }) {
  return (
    <div className="flex justify-between items-center  w-full mb-4">
      <div>
        <p className="font-medium text-gray-800">{label}</p>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      <input
        type="checkbox"
        checked={value}
        onChange={() => setValue(!value)}
      />
    </div>
  );
}

function LabeledInput({ label, type }) {
  return (
    <div className="w-full">
      <label className="text-sm text-gray-700">{label}</label>
      <input
        type={type}
        className="w-full border p-2 rounded-md mt-1"
      />
    </div>
  );
}

