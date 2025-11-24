import { NavLink, Outlet } from "react-router-dom";

function HistoryLayout() {
  const tabs = [
    { label: "Past Visits", path: "" }, // index route
    { label: "Lab Results", path: "labresults" },
    { label: "Immunizations", path: "immunizations" },
    { label: "Allergies", path: "allergies" },
  ];

  return (
    <div className="w-full px-4">
      <h2 className="text-xl font-bold text-blue-900 mt-24 lg:mt-8">Medical History</h2>
      <p className="text-gray-600 mb-4">All your health records in one place.</p>

      <div className="overflow-x-auto flex gap-4 border-b border-gray-200 px-2">
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

export default HistoryLayout;


