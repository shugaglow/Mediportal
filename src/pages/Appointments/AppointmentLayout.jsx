import { Link, Outlet, useLocation } from "react-router-dom";

function AppointmentLayout() {
  const { pathname } = useLocation();

  const tabs = [
    { label: "Book Appointment", path: "/appointments" },
    { label: "Upcoming", path: "/appointments/upcoming" },
    { label: "Confirmed", path: "/appointments/confirmed" },
    { label: "Cancelled", path: "/appointments/cancelled" },
    { label: "Past", path: "/appointments/past" },
  ];

  return (
    <div className="w-full pl-4">

      {/* 🔹 Header */}
      <div className="w-full">

         <div>
            <h2 className='text-xl font-bold text-blue-900 mt-16 lg:mt-8'>Appointments</h2>
            <p className=' text-gray-600 mb-4'>Book your next appointment in just a few clicks.</p>
        </div>
      </div>

      

      {/* 🔹 Tabs */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 flex-nowrap px-2 border-b border-gray-200">
          {tabs.map((tab) => {
    
            const isActive = pathname === tab.path;

            return (
              <Link
                key={tab.path}
                to={tab.path}
                className={`shrink-0 px-4 py-2 font-medium ${
                  isActive
                    ? "text-blue-700 border-b border-blue-700 "
                    : "text-gray-600 bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>

      
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
}

export default AppointmentLayout;


