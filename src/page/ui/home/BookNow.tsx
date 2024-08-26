import Aos from "../../../hooks/Aos";

const BookNow = () => {
  return (
    <div className=" my-5 flex flex-col-reverse md:flex-row items-center justify-between  mx-auto  rounded-lg overflow-hidden bg-[#f2f9fa]">
      <Aos />
      <div
        data-aos="fade-up-right"
        className="max-w-4xl mx-auto md:w-[75%] text-white md:pl-8"
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
