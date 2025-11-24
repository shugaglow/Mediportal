export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Amelia Roberts",
      role: "Family Physician",
      message:
        "MediPortal has transformed how my patients show up prepared for appointments. The reminders and organized records make consultations faster and more effective.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Michael Adeyemi",
      role: "Patient",
      message:
        "I love how simple it is to track all my prescriptions and appointments. Everything is organized and accessible, it genuinely reduces stress.",
      avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    },
    {
      id: 3,
      name: "Sarah Wilson",
      role: "Patient",
      message:
        "The dashboard experience is clean and easy to navigate. Seeing my medical history in one place helps me stay on top of my health journey.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <section id="testimonials" className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Are Saying
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from users who rely on MediPortal to stay organized, informed, and in control of their healthcare.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-gray-200 flex flex-col justify-between hover:shadow-xl transition-all duration-300 rounded-2xl p-8"
            >

              <p className="text-gray-700 leading-relaxed mb-32">
                “{item.message}”
              </p>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover border"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.role}</p>
                </div>
              </div>

              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

