import React from "react";
import hero1 from "../assets/hero2.jpg";

function Hero({ setShowAuth, setTab }) {
  return (
    <section
      id="hero"
      className="relative w-full h-screen text-white"
      style={{
        backgroundImage: `url(${hero1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content at bottom-left */}
      <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 z-10 flex flex-col gap-4 max-w-xl">
        {/* Small Label */}
        <p className="bg-white/70 border border-gray-500 text-blue-800 rounded-full px-4 py-1 text-sm md:text-base w-fit">
          Your health, at your fingertips.
        </p>

        {/* Heading + Subtext */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Your Complete Digital Health Companion
          </h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-200">
            Manage your health easily, from anywhere. Book appointments, track
            prescriptions, and monitor your medical records effortlessly.
          </p>
        </div>

        {/* Button */}
        <button
          onClick={() => {
            setShowAuth(true);
            setTab("signup");
          }}
          className="mt-4 px-6 sm:px-8 py-2 sm:py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-900 transition-all w-fit"
        >
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Hero;





