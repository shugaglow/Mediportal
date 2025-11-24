import { NavLink, Outlet } from "react-router-dom";

function AppointmentLayout() {
  const tabs = [
    { label: "Book Appointment", path: "" }, // index route
    { label: "Upcoming", path: "upcoming" },
    { label: "Confirmed", path: "confirmed" },
    { label: "Cancelled", path: "cancelled" },
    { label: "Past", path: "past" },
  ];

  return (
    <div className="w-full px-4">
      <h2 className="text-xl font-bold text-blue-900 mt-24 lg:mt-8">Appointments</h2>
      <p className="text-gray-600 mb-4">Book your next appointment in just a few clicks.</p>

      <div className="overflow-x-auto scrollbar-hide flex gap-4 border-b border-gray-200 px-2">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path} // relative path
            end={tab.path === ""} // index route should match exactly
            className={({ isActive }) =>
              `px-4 text-nowrap py-2 font-medium ${
                isActive
                  ? "text-blue-700 border-b-2 border-blue-700"
                  : "text-gray-600 hover:text-gray-800"
              }`
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </div>

      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
}

export default AppointmentLayout;




