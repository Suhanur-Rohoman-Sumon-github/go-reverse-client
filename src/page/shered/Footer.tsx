import { Link } from "react-router-dom";
import logo from "../../assets/Abstract_ball_globe_icons_logo_template-removebg-preview.png";
import CustomForm from "../../componnets/form/CustomForm";
import CustomInput from "../../componnets/form/CustomInput";
const Footer = () => {
  const handleSubmit = () => {};
  return (
    <footer className="bg-[#ccede8] text-white py-10">
      <div className=" px-4">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="Logo" className="h-20 w-20 rounded-full" />
            </div>
            <p className="text-secondary">
              Discover amazing places and book your next adventure with us!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-secondary">Quick Links</h3>
            <ul>
              <li>
                <Link to={"/"} className="text-secondary">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"about"} className="text-secondary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="text-secondary">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-[#062132]">
              Subscribe to Our Newsletter
            </h3>
            <CustomForm onSubmit={handleSubmit}>
              <CustomInput
                label="email"
                name="email"
                placeholder="Enter your email"
                type="email"
              />
              <button className="btn-primary">subscribe</button>
            </CustomForm>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-600 mt-8 pt-6 text-center">
          <p className="text-[#062132]">
            &copy; 2024 YourBrand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
