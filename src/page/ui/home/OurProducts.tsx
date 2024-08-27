import { Link } from "react-router-dom";
import Title from "../../../componnets/ui/Title";
import Aos from "../../../hooks/Aos";

const OurProducts = () => {
  return (
    <div className=" mt-28">
      <Title title="Our Products" subTitle="service we provide" />
      <Aos />
      <div className=" flex flex-col md:flex-row items-center justify-between  mx-auto  rounded-lg overflow-hidden">
        <div data-aos="fade-right" className="w-full md:w-[40%] mb-6 md:mb-0">
          <img
            src="https://vizmo.in/_nuxt/img/visitors-product.fab7b64.svg"
            alt="Our Products"
            className="w-full h-full border-red-500 rounded-lg"
          />
        </div>

        {/* Text Content */}
        <div
          data-aos="fade-left"
          className="w-full md:w-[60%] text-white md:pl-8"
        >
          <h2 className="text-primary">Book Your QR Code Solution Today</h2>
          <p className="text-secondary">
            Don’t miss out on the opportunity to upgrade your business with our
            efficient QR code solutions. Book now to streamline your operations
            and enhance customer interactions with cutting-edge technology.
          </p>
          <Link
            to={"/rooms"}
            className="inline-block bg-[#4cbfb0] hover:bg-[#3ea592] text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Book Now
          </Link>
        </div>
      </div>
      <div
        data-aos="fade-right"
        className=" flex flex-col-reverse md:flex-row items-center justify-between  mx-auto  rounded-lg overflow-hidden"
      >
        <div className="w-full md:w-[60%] text-white md:pl-8">
          <h2 className="text-primary">Reserve Your Ergonomic Desk</h2>
          <p className="text-secondary">
            Ensure your workspace is equipped with the best in ergonomic design.
            Book your desk now to enjoy comfort and productivity, whether at the
            office or in your home setup.
          </p>
          <Link
            to={"/rooms"}
            className="inline-block bg-[#4cbfb0] hover:bg-[#3ea592] text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Book Now
          </Link>
        </div>

        <div data-aos="flip-left" className="w-full md:w-[40%] mb-6 md:mb-0">
          <img
            src="https://vizmo.in/_nuxt/img/desks-product.f7af245.svg"
            alt="Our Products"
            className="w-full h-full border-red-500 rounded-lg"
          />
        </div>
      </div>
      <div className=" flex flex-col md:flex-row items-center justify-between  mx-auto  rounded-lg overflow-hidden">
        <div
          data-aos="fade-down-right"
          className="w-full md:w-[40%] mb-6 md:mb-0"
        >
          <img
            src="https://vizmo.in/_nuxt/img/rooms-product.6050c6a.svg"
            alt="Our Products"
            className="w-full h-full border-red-500 rounded-lg"
          />
        </div>

        <div
          data-aos="fade-down-left"
          className="w-full md:w-[60%] text-white md:pl-8"
        >
          <h2 className="text-primary">Schedule Your Meeting Room Setup</h2>
          <p className="text-secondary">
            Optimize your meeting space with our advanced solutions. Book now to
            enhance your collaborative efforts and create an environment that's
            perfect for productive meetings and effective communication.
          </p>
          <Link
            to={"/rooms"}
            className="inline-block bg-[#4cbfb0] hover:bg-[#3ea592] text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
