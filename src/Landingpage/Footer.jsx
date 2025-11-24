// Footer.jsx
export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-14">
      <div className=" px-15">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">MediPortal</h2>
            <p className="text-gray-400 leading-relaxed">
              Your all-in-one health management platform — appointments,
              prescriptions, medical records, reminders, and more in one secure place.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="hover:text-white transition">Home</a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition">Features</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#cta" className="hover:text-white transition">Get Started</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">Help Center</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">FAQs</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Contact Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Join our newsletter for health tips, updates, and reminders.
            </p>

            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-gray-300 border border-gray-700 focus:border-blue-500 focus:outline-none"
              />
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} MediPortal — All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
