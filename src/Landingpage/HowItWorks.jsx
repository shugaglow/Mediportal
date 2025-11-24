import hero2 from "../assets/hero3.jpg";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Sign In Securely",
      description:
        "Log in to your account to access your personalized medical hub. Your data is encrypted and protected.",
    },
    {
      id: 2,
      title: "Access Your Dashboard",
      description:
        "Instantly see all your important health information in one place — appointments, prescriptions, bills, reminders, and more.",
    },
    {
      id: 3,
      title: "Stay on Top of Your Care",
      description:
        "View prescriptions, track your medical history, monitor bills, follow health tips, and manage appointments, all from one intuitive interface.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="w-full py-24 bg-gray-900 relative text-white"
      style={{
        backgroundImage: `url(${hero2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How MediPortal Works
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            From creating your account to booking your specialist, everything
            happens seamlessly in one place.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="p-6 bg-white/10 backdrop-blur-md border border-white/20 
                         rounded-2xl shadow-xl transition-all hover:bg-white/20"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-4 
                              rounded-full bg-blue-500 text-white text-xl font-bold">
                {step.id}
              </div>

              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-200 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



