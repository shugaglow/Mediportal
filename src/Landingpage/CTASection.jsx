import cta from "../assets/cta5.jpg";

export default function CTASection() {
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
          className="cursor-pointer px-10 py-4 bg-white text-blue-700 font-semibold rounded-2xl shadow-lg hover:bg-gray-200 transition-all duration-300"
          onClick={() => {
            document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
          }}
        >
          Get Started — It’s Free
        </button>

      </div>
    </section>
  );
}


