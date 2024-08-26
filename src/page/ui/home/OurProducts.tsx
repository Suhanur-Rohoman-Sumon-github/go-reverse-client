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
          <h2 className="text-primary">Explore Our Products</h2>
          <p className="text-secondary">
            Discover a variety of high-quality products crafted to meet your
            needs. Browse through our collection and find the perfect item for
            you.
          </p>
          <a
            href="#products"
            className="inline-block bg-[#4cbfb0] hover:bg-[#3ea592] text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Shop Now
          </a>
        </div>
      </div>
      <div
        data-aos="fade-right"
        className=" flex flex-col-reverse md:flex-row items-center justify-between  mx-auto  rounded-lg overflow-hidden"
      >
        <div className="w-full md:w-[60%] text-white md:pl-8">
          <h2 className="text-primary">Explore Our Products</h2>
          <p className="text-secondary">
            Discover a variety of high-quality products crafted to meet your
            needs. Browse through our collection and find the perfect item for
            you.
          </p>
          <a
            href="#products"
            className="inline-block bg-[#4cbfb0] hover:bg-[#3ea592] text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Shop Now
          </a>
        </div>
        {/* Image Container */}
        <div data-aos="flip-left" className="w-full md:w-[40%] mb-6 md:mb-0">
          <img
            src="https://vizmo.in/_nuxt/img/desks-product.f7af245.svg"
            alt="Our Products"
            className="w-full h-full border-red-500 rounded-lg"
          />
        </div>
      </div>
      <div className=" flex flex-col md:flex-row items-center justify-between  mx-auto  rounded-lg overflow-hidden">
        {/* Image Container */}
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

        {/* Text Content */}
        <div
          data-aos="fade-down-left"
          className="w-full md:w-[60%] text-white md:pl-8"
        >
          <h2 className="text-primary">Explore Our Products</h2>
          <p className="text-secondary">
            Discover a variety of high-quality products crafted to meet your
            needs. Browse through our collection and find the perfect item for
            you.
          </p>
          <a
            href="#products"
            className="inline-block bg-[#4cbfb0] hover:bg-[#3ea592] text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
