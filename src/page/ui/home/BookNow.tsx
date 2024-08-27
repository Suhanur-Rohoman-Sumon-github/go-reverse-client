import { Link } from "react-router-dom";
import Aos from "../../../hooks/Aos";

const BookNow = () => {
  return (
    <div className=" my-5 flex flex-col-reverse md:flex-row items-center justify-between  mx-auto  rounded-lg overflow-hidden bg-[#f2f9fa]">
      <Aos />
      <div
        data-aos="fade-up-right"
        className="max-w-4xl mx-auto md:w-[75%] text-white md:pl-8"
      >
        <h2 className="text-primary">
          Ready to Elevate Your Experience? Book Now
        </h2>
        <p className="text-secondary">
          Don’t wait—secure your spot today! Whether you're looking for
          innovative QR code solutions, an ergonomic desk setup, or a tailored
          meeting room configuration, booking now ensures you receive top-notch
          service and unbeatable convenience. Click below to get started and
          elevate your experience to the next level
        </p>
        <Link
          to={"/rooms"}
          className="inline-block bg-[#4cbfb0] hover:bg-[#3ea592] text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
        >
          Book Now
        </Link>
      </div>
      {/* Image Container */}
      <div data-aos="fade-up-left" className="w-full md:w-[25%] mb-6 md:mb-0 ">
        <img
          src="https://vizmo.in/_nuxt/img/bookademo.134dc0f.svg"
          alt="Our Products"
          className="w-full h-full  rounded-lg"
        />
      </div>
    </div>
  );
};

export default BookNow;
