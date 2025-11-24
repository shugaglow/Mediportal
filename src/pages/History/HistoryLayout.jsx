import { Link, Outlet, useLocation } from "react-router-dom";
import TopComponent from "../../components/TopComponent";
import { HiOutlineUpload, HiOutlineDownload } from "react-icons/hi";


function HistoryLayout() {
  const { pathname } = useLocation();

  return (
    <div className="w-full">

      {/* 🔹 Header */}
       <div className=' w-full pl-4 flex flex-col lg:flex-row justify-between'>

            <div>
            <h2 className='text-xl font-bold text-blue-900 mt-16 lg:mt-8'>Medical History</h2>
            <p className='text-sm md:text-lg text-gray-600 mb-6'>Your health journey at a glance and all your records in one place.</p>
        </div>

            

            <div className="flex gap-2 mb-8  p-8">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-800 rounded-md hover:bg-gray-100">
                <HiOutlineUpload size={18} />
                Upload
            </button>

            <button className="flex items-center gap-2 bg-blue-700 px-4 py-1 text-white rounded-md hover:bg-blue-600">
                <HiOutlineDownload size={18} />
                Download
            </button>
            </div>

      </div>

      {/* 🔹 Tabs */}
      <div className="flex gap-6  pl-4 overflow-x-auto scrollbar-hides">

        <div className="flex gap-4 flex-nowrap px-2 border-b border-gray-200">
          
        <Link
          to="/medicalhistory"
          className={` ${
            pathname === "/medicalhistory" 
              ? "text-blue-700 border-b border-blue-700 px-4 py-2 text-nowrap font-semibold" 
              : "text-gray-600 px-4 py-2 text-nowrap"
          }`}
        >
          Past Visits
        </Link>

        <Link
          to="/medicalhistory/labresults"
          className={` ${
            pathname.includes("/medicalhistory/labresults") 
              ? "text-blue-700 border-b border-blue-700 px-4 py-2 text-nowrap font-semibold" 
              : "text-gray-600 px-4 py-2 text-nowrap"
          }`}
        >
          Lab Results
        </Link>

        <Link
          to="/medicalhistory/immunizations"
          className={` ${
            pathname.includes("/medicalhistory/immunizations") 
              ? "text-blue-700 border-b border-blue-700 px-4 py-2 font-semibold text-nowwrap" 
              : "text-gray-600 px-4 py-2 text-nowrap"
          }`}
        >
          Immunizations
        </Link>

        <Link
          to="/medicalhistory/allergies"
          className={` ${
            pathname.includes("/medicalhistory/allergies") 
              ? "text-blue-700 border-b border-blue-700 px-4 py-2 font-semibold text-nowrap" 
              : "text-gray-600 px-4 py-2 text-nowrap"
          }`}
        >
          Allergies
        </Link>
        </div>


     

      </div>


      <div className="mt-6">
        <Outlet />
      </div>

    </div>
  )
}

export default HistoryLayout