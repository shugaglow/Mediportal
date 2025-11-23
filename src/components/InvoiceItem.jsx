import { FaFileInvoiceDollar } from "react-icons/fa";

export default function InvoiceItem({ date, amount, status }) {
  return (
    <div className="flex gap-2 items-start bg-gray-50 p-4 rounded-lg border border-gray-200">
      <div className="flex bg-blue-100 p-2 rounded-full items-center gap-4">
        <FaFileInvoiceDollar className="text-blue-700 text-xl" />
      </div>

       <div className="w-full">
        <div className=" w-full flex justify-between items-center">
          <p className="font-semibold text-gray-800">{date}</p>
           <p className="font-semibold text-gray-800">{amount}</p>
         
        </div>

      <div className="flex w-full justify-between items-center gap-4">
         <p className="text-gray-500 text-sm">{status}</p>
      </div>

      <button className="flex items-center gap-1 text-blue-700 hover:underline">
          Download
        </button>
       </div>
    </div>
  );
}
