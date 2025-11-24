import React from "react";
import { HiOutlineUpload, HiOutlineUser } from "react-icons/hi";

export default function Profile() {
  return (
    <div className="w-full pl-4">
      {/* Header */}
      <h1 className="text-xl font-bold text-blue-900 lg:mt-8 mt-16">Profile Information</h1>
      <p className="text-gray-600 mb-6">
        Manage and update your personal details.
      </p>

      {/* Profile Photo */}
      <div className="bg-white rounded-lg p-5 shadow mb-6">
        <h2 className="text-lg font-semibold mb-4 text-blue-900">
          Personal Information
        </h2>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-bold">
            JD
          </div>

          <button className="border px-3 py-2 rounded-md hover:bg-gray-50 flex items-center gap-2">
            <HiOutlineUpload />
            Change Photo
          </button>
        </div>

        {/* Personal Info Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm text-gray-700">First Name</label>
            <input
              type="text"
              defaultValue="John"
              className="w-full border p-2 rounded-md"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Last Name</label>
            <input
              type="text"
              defaultValue="Doe"
              className="w-full border p-2 rounded-md"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Email</label>
            <input
              type="email"
              defaultValue="john.doe@example.com"
              className="w-full border p-2 rounded-md"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Phone Number</label>
            <input
              type="text"
              defaultValue="+1 (555) 123-4567"
              className="w-full border p-2 rounded-md"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Date of Birth</label>
            <input
              type="date"
              defaultValue="1990-01-15"
              className="w-full border p-2 rounded-md"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Gender</label>
            <select className="w-full border p-2 rounded-md">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <button className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600 mt-3">
          Save Changes
        </button>
      </div>

      {/* Insurance Info */}
      <div className="bg-white rounded-lg p-5 shadow">
        <h2 className="text-lg font-semibold mb-4 text-blue-900">
          Insurance Information
        </h2>

        <div className="grid grid-cols-1 gap-4 mb-4">
          <div>
            <label className="text-sm text-gray-700">Insurance Provider</label>
            <input
              type="text"
              defaultValue="Blue Cross Blue Shield"
              className="w-full border p-2 rounded-md"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Policy Number</label>
            <input
              type="text"
              defaultValue="BCBS-123456789"
              className="w-full border p-2 rounded-md"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Group Number</label>
            <input
              type="text"
              defaultValue="GRP-987654"
              className="w-full border p-2 rounded-md"
            />
          </div>
        </div>

        <button className="border px-4 py-2 rounded-md hover:bg-gray-100 flex items-center gap-2">
          <HiOutlineUpload />
          Upload Insurance Card
        </button>
      </div>
    </div>
  );
}

