// LandingModal.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function LandingModal({ showAuth, setShowAuth, tab, setTab }) {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/app");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/app");
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white mx-8 p-4 rounded-xl w-full max-w-md shadow-lg relative">
        <div className="mb-2 w-full flex flex-col justify-between items-between ">
          <div className="flex justify-between mb-2 w-full items-center">
            <h1 className="font-semibold text-blue-900 ">Welcome to MediPortal</h1>
               {/* Close Button */}
        <button
          onClick={() => setShowAuth(false)}
          className=" text-gray-700 w-fit rounded-full hover:text-black text-3xl"
        >
          ×
        </button>
          
          </div>

          <p className="font-regular mb-8 text-gray-600">Join MediPortal or Continue where you <br/>left off and stay in control of your health.</p>
        </div>

<div className="bg-gray-100 p-4 rounded-md">
          {/* Tabs */}
        <div className="flex mb-6 border-b border-gray-200">
          <button
            className={`flex-1 py-2 font-medium ${
              tab === "login"
                ? "text-blue-700 border-b-2 border-blue-700"
                : "text-gray-500"
            }`}
            onClick={() => setTab("login")}
          >
            Login
          </button>

          <button
            className={`flex-1 py-2 font-medium ${
              tab === "signup"
                ? "text-blue-700 border-b-2 border-blue-700"
                : "text-gray-500"
            }`}
            onClick={() => setTab("signup")}
          >
            Sign Up
          </button>
        </div>

        {/* Login Form */}
        {tab === "login" && (
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <input
              type="email"
              className="w-full mt-1 p-3 border border-gray-400 rounded-lg bg-white"
              placeholder="Enter your email"
            />
            <input
              type="password"
              className="w-full mt-1 p-3 border border-gray-400 rounded-lg bg-white"
              placeholder="Enter password"
            />
            <button className="bg-blue-700 text-white w-full py-3 rounded-lg mt-2 hover:bg-blue-800">
              Login
            </button>
          </form>
        )}

        {/* Signup Form */}
        {tab === "signup" && (
          <form className="flex flex-col gap-4" onSubmit={handleSignup}>
            <input
              type="text"
              className="w-full mt-1 p-3 border border-gray-400 rounded-lg bg-white"
              placeholder="Enter full name"
            />
            <input
              type="email"
              className="w-full mt-1 p-3 border border-gray-400 rounded-lg bg-white"
              placeholder="Enter email"
            />
            <input
              type="password"
              className="w-full mt-1 p-3 border border-gray-400 rounded-lg bg-white"
              placeholder="Create password"
            />
            <button className="bg-blue-700 text-white w-full py-3 rounded-lg mt-2 hover:bg-blue-800">
              Create Account
            </button>
          </form>
        )}
</div>
      </div>
    </div>
  );
}

export default LandingModal;
