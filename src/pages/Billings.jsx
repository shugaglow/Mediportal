import { FaCreditCard } from "react-icons/fa";
import Invoice from "../components/Invoice";


export default function Billings() {
  return (
    <div className="w-full pl-4">
      {/* Header */}
      <h1 className="text-xl font-bold text-blue-900 lg:mt-8 mt-16">Billing & Payments</h1>
      <p className="text-gray-600 mb-6">
        Manage your payments, view invoices, and update your billing details.
      </p>

      <div className="flex flex-col bg-white p-4 rounded-md lg:flex-row gap-4 w-full">
        {/* Billing Method */}
        <section className="mt-2 w-full lg:w-1/2 bg-white p-5 flex flex-col rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">Payment Method</h2>

          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <FaCreditCard className="text-blue-700 text-3xl" />
              <div>
                <p className="font-semibold text-gray-800">Visa Ending • 4242</p>
                <p className="text-gray-500 text-sm">Expires 09/27</p>
              </div>
            </div>

            <button className="px-4 mt-4 text-nowrap py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600">
              Update Card
            </button>
          </div>
        </section>

        {/* Subscription */}
        <section className="mt-6 w-full lg:w-1/2 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold mb-3">Subscription</h2>

          <p className="font-semibold text-gray-800">Premium Plan – $49/month</p>
          <p className="text-gray-500 text-sm mt-1">
            Access to all premium features and priority support
          </p>

          <button className="mt-4 w-full px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-50">
            Cancel Subscription
          </button>
        </section>
      </div>

      {/* Invoices */}
      <Invoice />
    </div>
  );
}

