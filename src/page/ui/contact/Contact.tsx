const Contact = () => {
  return (
    <div className="">
      {/* Header Section */}
      <div
        style={{
          backgroundImage:
            "url(https://convene.com/wp-content/uploads/2022/03/Meetings_01_Header1170x320-2048x606.jpg)",
        }}
        className="bg-cover bg-center h-80 flex items-center justify-center text-white"
      >
        <div className="max-w-lg mx-auto text-center text-[#FFF]">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="lg:w-10/12 mx-auto pt-20 flex flex-col lg:flex-row justify-center items-center gap-x-12">
        <div className="lg:w-1/2 p-6 lg:p-0">
          <h5 className="text-xl text-[#4cbfb0] font-semibold mb-4">
            CONTACT OUR SALES TEAM
          </h5>
          <h2 className="text-3xl font-semibold mb-6">
            Increase revenue, accelerate sales pipeline, and improve customer
            retention.
          </h2>
          <div className="flex items-center gap-x-4 mb-6">
            <span className="text-[#4cbfb0] text-3xl font-semibold">20m</span>
            <p className="text-lg">10k+ bookings completed successfully</p>
          </div>
          <div className="flex items-center gap-x-4 mb-6">
            <span className="text-[#4cbfb0] text-3xl font-semibold">100k</span>
            <p className="text-lg">
              500+ businesses trust Go Reverse for their booking needs
            </p>
          </div>
          <div className="flex items-center gap-x-4 mb-6">
            <span className="text-[#4cbfb0] text-3xl font-semibold">200k</span>
            <p className="text-lg">
              100+ countries benefit from our booking solutions
            </p>
          </div>
        </div>
        <form className="p-6 lg:w-1/2">
          <div className="flex flex-col lg:flex-row gap-x-6 mb-6">
            <div className="w-full mb-4 lg:mb-0">
              <label
                className="text-lg font-medium text-[#3e5063] mb-2 block"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                placeholder="Enter your first name"
                type="text"
                required
                className="block w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#4cbfb0]"
                id="firstName"
              />
            </div>
            <div className="w-full">
              <label
                className="text-lg font-medium text-[#3e5063] mb-2 block"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                placeholder="Enter your last name"
                type="text"
                required
                className="block w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#4cbfb0]"
                id="lastName"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              className="text-lg font-medium text-[#3e5063] mb-2 block"
              htmlFor="email"
            >
              Work Email
            </label>
            <input
              placeholder="Your Email"
              type="email"
              required
              className="block w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#4cbfb0]"
              id="email"
            />
          </div>
          <div className="mb-6">
            <label
              className="text-lg font-medium text-[#3e5063] mb-2 block"
              htmlFor="description"
            >
              How Can We Help You
            </label>
            <textarea
              className="block w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#4cbfb0]"
              id="description"
              rows={4}
              placeholder="Describe your needs"
            ></textarea>
          </div>
          <button className="w-full py-2 px-4 bg-[#4cbfb0] text-white rounded-lg hover:bg-[#3daea6] transition-colors duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
