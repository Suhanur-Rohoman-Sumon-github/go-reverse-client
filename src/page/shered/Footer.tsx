const Footer = () => {
  return (
    <footer className="bg-[#062132] text-white py-10">
      <div className=" px-4">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/40"
                alt="Logo"
                className="mr-2"
              />
              <span className="text-2xl font-bold">YourBrand</span>
            </div>
            <p className="text-gray-400">
              Discover amazing places and book your next adventure with us!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul>
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white block mb-2"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white block mb-2"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white block mb-2"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white block mb-2"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Resources</h3>
            <ul>
              <li>
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-white block mb-2"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="text-gray-400 hover:text-white block mb-2"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-gray-400 hover:text-white block mb-2"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#support"
                  className="text-gray-400 hover:text-white block mb-2"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Subscribe to Our Newsletter
            </h3>
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Enter your email"
                className="mb-3 p-2 rounded-md text-black"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-600 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            &copy; 2024 YourBrand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
