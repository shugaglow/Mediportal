import React from 'react'
import cta from '../assets/cta5.jpg';

function HeroCTA({ setShowAuth, setTab }) {
  return (
        <section
      id="cta"
      className="relative w-full py-48 text-white"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cta})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg">
          Take Control of Your Health Today
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
          Manage appointments, prescriptions, health records, reminders, and more —
          all from one simple and secure dashboard built just for you.
        </p>

        {/* Button */}
            <button
          onClick={() => {
            setShowAuth(true);
            setTab("signup");
          }}
          className="mt-4 px-6 sm:px-8 py-2 sm:py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-900 transition-all w-fit"
        >
          Get Started - It's Free
        </button>

      </div>
    </section>
  )
}

export default HeroCTA