import { useState, useEffect } from "react";
import logo from "../../assets/Abstract_ball_globe_icons_logo_template-removebg-preview.png";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-white/30 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto  ">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className=" text-2xl font-bold">
              <img src={logo} className="h-20 w-20 rounded-full" alt="" />
            </NavLink>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#4cbfb0]" : "nothing"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-[#4cbfb0]" : "nothing"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-[#4cbfb0]" : "nothing"
              }
            >
              Contact Us
            </NavLink>
          </div>

          {/* Action Button */}
          <div className="hidden md:block">
            <Link to={"/login"} className="text-[#4cbfb0] mr-4 font-bold">
              Login
            </Link>
            <a
              href="#signup"
              className="inline-block px-4 py-2 text-white bg-[#4cbfb0] rounded-lg "
            >
              Sign Up Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              className="text-gray-800 hover:text-blue-500 focus:outline-none focus:text-blue-500"
              aria-label="Toggle menu"
            >
              {/* Mobile menu icon (hamburger) */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
