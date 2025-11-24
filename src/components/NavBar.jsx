import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

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
  HiOutlineCheckCircle,
  HiOutlineLogout
} from "react-icons/hi";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    setShowLogoutModal(false);
    navigate("/"); // Go back to landing page
  };

  const linkStyles =
    "flex items-center gap-2 pl-4 pr-12 py-2 rounded-md transition-all";

  const activeStyles =
    "bg-blue-100 text-blue-900 font-semibold border-l-4 border-blue-700";

  const inactiveStyles = "text-blue-950 hover:bg-blue-50";

  return (
    <>
      {/* MOBILE TOP BAR */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-gray-50 p-4 shadow z-50 flex justify-between items-center">
        <span className="text-2xl font-bold text-blue-950">MediPortal</span>

        <button onClick={() => setOpen(true)}>
          <HiOutlineMenu size={28} className="text-blue-950" />
        </button>
      </div>

      {/* BACKDROP */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="lg:hidden fixed inset-0 z-40"
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-screen bg-gray-50 flex flex-col border-r 
        border-gray-200 shadow-md transform transition-transform duration-300 z-50
        ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Logo */}
        <div className="p-8 bg-white border-b border-gray-300 flex justify-between items-center">
          <NavLink
            className="text-lg lg:text-xl text-blue-950 font-bold"
            to="/"
          >
            MediPortal
          </NavLink>

          <button onClick={() => setOpen(false)} className="lg:hidden">
            <HiOutlineX size={24} className="text-blue-950" />
          </button>
        </div>

        {/* LINKS */}
        <header className="px-6 py-2 flex-1 overflow-y-auto">
          <nav className="flex flex-col gap-2">

            <NavLink
              to="/app"
              end 
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${linkStyles} ${isActive ? activeStyles : inactiveStyles}`
              }
            >
              <HiOutlineHome size={20} />
              Dashboard
            </NavLink>

            <NavLink
              to="/app/appointments"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${linkStyles} ${isActive ? activeStyles : inactiveStyles}`
              }
            >
              <HiOutlineCalendar size={20} />
              Appointment
            </NavLink>

            <NavLink
              to="/app/prescription"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${linkStyles} ${isActive ? activeStyles : inactiveStyles}`
              }
            >
              <HiOutlineClipboardList size={20} />
              Prescriptions
            </NavLink>

            <NavLink
              to="/app/medicalhistory"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${linkStyles} ${isActive ? activeStyles : inactiveStyles}`
              }
            >
              <HiOutlineFolderOpen size={20} />
              History
            </NavLink>

            <NavLink
              to="/app/profile"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${linkStyles} ${isActive ? activeStyles : inactiveStyles}`
              }
            >
              <HiOutlineUser size={20} />
              Profile
            </NavLink>

            <NavLink
              to="/app/notifications"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${linkStyles} ${isActive ? activeStyles : inactiveStyles}`
              }
            >
              <HiOutlineBell size={20} />
              Notifications
            </NavLink>

            <NavLink
              to="/app/billings"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${linkStyles} ${isActive ? activeStyles : inactiveStyles}`
              }
            >
              <HiOutlineCreditCard size={20} />
              Billings
            </NavLink>

            <NavLink
              to="/app/healthtips"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${linkStyles} ${isActive ? activeStyles : inactiveStyles}`
              }
            >
              <HiOutlineHeart size={20} />
              Health Tips
            </NavLink>

            <NavLink
              to="/app/reminders"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${linkStyles} ${isActive ? activeStyles : inactiveStyles}`
              }
            >
              <HiOutlineCheckCircle size={20} />
              Reminders
            </NavLink>

            <NavLink
              to="/app/settings"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${linkStyles} ${isActive ? activeStyles : inactiveStyles}`
              }
            >
              <HiOutlineCog size={20} />
              Settings
            </NavLink>

            {/* LOGOUT BUTTON */}
            <button
              onClick={() => setShowLogoutModal(true)}
              className="flex items-center gap-2 pl-4 pr-12 py-2 text-red-600 hover:bg-red-50 rounded-md mt-4"
            >
              <HiOutlineLogout size={20} />
              Logout
            </button>
          </nav>
        </header>
      </div>

      {/* LOGOUT MODAL */}
      {showLogoutModal && (
        <div className="fixed inset-0  flex items-center justify-center z-999">
          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-lg w-80">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Log out?
            </h2>
            <p className="text-gray-600 mb-4">
              Are you sure you want to log out of MediPortal?
            </p>

            <div className="flex gap-3 justify-end">
              <button
                className="px-4 py-2 rounded-md border"
                onClick={() => setShowLogoutModal(false)}
              >
                Cancel
              </button>

              <button
                className="px-4 py-2 rounded-md bg-red-600 text-white"
                onClick={handleLogout}
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;




