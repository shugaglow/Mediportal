import React, { useState } from "react";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";

import { NavLink } from "react-router-dom";
import {
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineHome,
  HiOutlineCalendar,
  HiOutlineClipboardList,
  HiOutlineFolderOpen,
  HiOutlineUser,
  HiOutlineBell,
  HiOutlineCog,
  HiOutlineCreditCard,
  HiOutlineHeart,
} from "react-icons/hi";

function NavBar() {
  const [open, setOpen] = useState(false);

  const linkStyles =
    "flex items-center gap-2 pl-4 pr-12 py-2 rounded-md transition-all";

  const activeStyles =
    "bg-blue-100 text-blue-900 font-semibold border-l-4 border-blue-700";

  const inactiveStyles =
    "text-blue-950 hover:bg-blue-50";

  return (
    <>
      {/* MOBILE TOP BAR */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-gray-50 p-4 shadow z-50 flex justify-between items-center">
        <span className="text-2xl font-bold text-blue-950">MediPortal</span>

        <button onClick={() => setOpen(true)}>
          <HiOutlineMenu size={28} className="text-blue-950" />
        </button>
      </div>

      {/* BACKDROP FOR MOBILE */}
      {open && (
       <div
  onClick={() => setOpen(false)}
  className="lg:hidden fixed inset-0 z-40"
/>

      )}

      {/* SIDEBAR */}
      <div
        className={`
          fixed top-0 left-0 h-screen bg-gray-50 flex flex-col
          border-r border-gray-200 shadow-md transform transition-transform duration-300 z-50
          ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Logo */}
        <div className="p-8 bg-white border-b border-gray-300 flex justify-between items-center">
          <NavLink className="text-lg lg:text-xl text-blue-950 font-bold" to="/">
            MediPortal
          </NavLink>

          {/* Close button mobile */}
          <button
            onClick={() => setOpen(false)}
            className="lg:hidden text-blue-950"
          >
            <HiOutlineX size={24} />
          </button>
        </div>

        {/* Nav Items */}
        <header className="px-6 py-2 flex-1 overflow-y-auto">
          <nav className="flex flex-col gap-2">

            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${linkStyles} ${isActive ? activeStyles : inactiveStyles}`
              }
            >
              <HiOutlineHome size={20} />
              Dashboard
            </NavLink>

            <NavLink
              to="/appointments"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${linkStyles} ${isActive ? activeStyles : inactiveStyles}`
              }
            >
              <HiOutlineCalendar size={20} />
              Appointment
            </NavLink>

            <NavLink
              to="/prescription"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${linkStyles} ${isActive ? activeStyles : inactiveStyles}`
              }
            >
              <HiOutlineClipboardList size={20} />
              Prescriptions
            </NavLink>

            <NavLink
              to="/medicalhistory"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${linkStyles} ${isActive ? activeStyles : inactiveStyles}`
              }
            >
              <HiOutlineFolderOpen size={20} />
              History
            </NavLink>

            <NavLink
              to="/profile"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${linkStyles} ${isActive ? activeStyles : inactiveStyles}`
              }
            >
              <HiOutlineUser size={20} />
              Profile
            </NavLink>

            <NavLink
              to="/notifications"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${linkStyles} ${isActive ? activeStyles : inactiveStyles}`
              }
            >
              <HiOutlineBell size={20} />
              Notifications
            </NavLink>

            <NavLink
              to="/billings"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${linkStyles} ${isActive ? activeStyles : inactiveStyles}`
              }
            >
              <HiOutlineCreditCard size={20} />
              Billings
            </NavLink>

            <NavLink
              to="/healthtips"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${linkStyles} ${isActive ? activeStyles : inactiveStyles}`
              }
            >
              <HiOutlineHeart size={20} />
              Health Tips
            </NavLink>

            <NavLink
              to="/reminders"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${linkStyles} ${isActive ? activeStyles : inactiveStyles}`
              }
            >
              <HiOutlineClipboardDocumentCheck size={20} />
              Reminders
            </NavLink>

            <NavLink
              to="/settings"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${linkStyles} ${isActive ? activeStyles : inactiveStyles}`
              }
            >
              <HiOutlineCog size={20} />
              Settings
            </NavLink>
          </nav>
        </header>
      </div>
    </>
  );
}

export default NavBar;



