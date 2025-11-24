// LandingPage.jsx
import { useState } from "react";
import HeroNav from "./HeroNav";
import LandingModal from "./LandingModal";
import Hero from "./Hero";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";

import Footer from "./Footer";
import HeroCTA from "./HeroCTA";






export default function LandingPage() {
  const [showAuth, setShowAuth] = useState(false);
  const [tab, setTab] = useState("login"); 
  

  return (
    <div className="w-full min-h-screen bg-gray-50">
     
 <div className="flex justify-center">
       <HeroNav setShowAuth={setShowAuth} setTab={setTab} />
 </div>

      <Hero setShowAuth={setShowAuth} setTab={setTab} />

      <Features />
      <HowItWorks />
      <Testimonials />
      <HeroCTA setShowAuth={setShowAuth} setTab={setTab} />

      <Footer />

      {/* Login/Signup Modal */}
      {showAuth && (
        <LandingModal
          showAuth={showAuth}
          setShowAuth={setShowAuth}
          tab={tab}
          setTab={setTab}
        />
      )}
    </div>
  );
}




