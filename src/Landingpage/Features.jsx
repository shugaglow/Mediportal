// Features.jsx
import FeaturesCard from "./FeaturesCard";
import feature1 from "../assets/hero2.jpg";
import feature2 from "../assets/hero3.jpg";
import feature3 from "../assets/hero4.jpg";

export default function Features() {
  return (
    <section
      id="features"
      className="w-full max-w-6xl mx-auto px-6 py-24 bg-gray-200 flex flex-col "
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-blue-900">
        Powerful Features Built for Your Health
      </h2>
      <p className="text-gray-600 text-center mb-8">Discover how MediPortal simplifies healthcare access with tools designed to save you time, reduce stress, and put your medical needs in one place.</p>

       <div className="flex gap-8 flex-wrap">
         <FeaturesCard
          title="Easy Appointment Scheduling"
          description="Book doctor appointments in minutes. No queues, no stress — just fast, convenient scheduling at your fingertips."
          image={feature1}
        />

        <FeaturesCard
          title="Secure Medical Records"
          description="Access all your health records in one place. Your files are encrypted, organized and available anytime you need them."
          image={feature2}
        />

        <FeaturesCard
          title="Smart Health Reminders"
          description="Stay on track with personalized reminders for medications, upcoming check-ups, and essential health alerts."
          image={feature3}
        />
     </div>
    </section>
  );
}
