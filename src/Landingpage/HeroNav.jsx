import React, { useState, useEffect } from "react";

function HeroNav({ setShowAuth, setTab }) {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "features", "how-it-works", "testimonials", "cta"];
      let currentSection = "hero";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          if (window.scrollY >= top - 120) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (section) =>
    `transition-colors block ${
      activeSection === section
        ? "text-blue-700 font-semibold"
        : "text-gray-800"
    }`;

  return (
    <nav className="w-[90%] md:w-[80%] mt-2 rounded-full fixed top-0 left-1/2 -translate-x-1/2 z-50 bg-white/60 backdrop-blur-md shadow-xl border border-gray-500/30">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6 md:px-12">

        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-700">MediPortal</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          <a href="#hero" className={linkClass("hero")}>Home</a>
          <a href="#features" className={linkClass("features")}>Features</a>
          <a href="#how-it-works" className={linkClass("how-it-works")}>How It Works</a>
          <a href="#testimonials" className={linkClass("testimonials")}>Testimonials</a>
          <a href="#cta" className={linkClass("cta")}>Get Started</a>
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:block">
          <button
            onClick={() => {
              setShowAuth(true);
              setTab("signup");
            }}
            className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="w-6 h-[3px] bg-black rounded"></span>
          <span className="w-6 h-[3px] bg-black rounded"></span>
          <span className="w-6 h-[3px] bg-black rounded"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 py-4 bg-white/90 backdrop-blur-md border-t border-gray-300 rounded-b-2xl">
          <a onClick={() => setMobileOpen(false)} href="#hero" className={linkClass("hero")}>
            Home
          </a>
          <a onClick={() => setMobileOpen(false)} href="#features" className={linkClass("features")}>
            Features
          </a>
          <a onClick={() => setMobileOpen(false)} href="#how-it-works" className={linkClass("how-it-works")}>
            How It Works
          </a>
          <a onClick={() => setMobileOpen(false)} href="#testimonials" className={linkClass("testimonials")}>
            Testimonials
          </a>
          <a onClick={() => setMobileOpen(false)} href="#cta" className={linkClass("cta")}>
            Get Started
          </a>

          <button
            onClick={() => {
              setShowAuth(true);
              setTab("signup");
              setMobileOpen(false);
            }}
            className="w-full mt-2 px-4 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}

export default HeroNav;






