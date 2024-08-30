import ceo from "../../../assets/ceo.png";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div
        style={{
          backgroundImage:
            "url(https://convene.com/wp-content/uploads/2022/03/Meetings_01_Header1170x320-2048x606.jpg)",
        }}
        className="bg-cover bg-center h-80 flex items-center justify-center text-[#000]"
      >
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl font-extrabold mb-4 ">
            Welcome to Go reverse
          </h1>
          <p className="text-lg">
            Explore innovative booking services designed to simplify and enhance
            your event planning. At Go Reverse, we offer user-friendly solutions
            to make your booking experience smooth and efficient.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Our Story Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg text-gray-700">
            Go Reverse began with a simple idea: to transform how people book
            and manage their events and spaces. From humble beginnings in a
            small office, our passion for efficiency and convenience has evolved
            into a leading platform trusted for its innovation and ease of use.
          </p>
        </section>

        {/* Our Mission and Values Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">
            Our Mission and Values
          </h2>
          <p className="text-lg text-gray-700">
            At Go Reverse, our mission is to streamline the booking experience,
            making it effortless for individuals and organizations to reserve
            the spaces and services they need. We are committed to values of
            transparency, user-centric design, and reliability, ensuring that
            every interaction is smooth and satisfying.
          </p>
        </section>

        {/* Meet the Team Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Team Member Card Example */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src={ceo} className="h-14 w-14 rounded-full" alt="" />
              <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
              <p className="text-[#4cbfb0] mb-4">Co-Founder & CEO</p>
              <p className="text-gray-600">
                Jane is passionate about technology and leads our team with
                vision and dedication.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={
                  "data:image/jpeg;base64,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"
                }
                className="h-14 w-14 rounded-full"
                alt=""
              />
              <h3 className="text-xl font-semibold mb-2">Michael Brown</h3>
              <p className="text-[#4cbfb0] mb-4">Chief Technical Officer</p>
              <p className="text-gray-600">
                Michael is an expert in software development and oversees all
                technical projects.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={
                  "data:image/jpeg;base64,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"
                }
                className="h-14 w-14 rounded-full"
                alt=""
              />
              <h3 className="text-xl font-semibold mb-2">Lisa Johnson</h3>
              <p className="text-[#4cbfb0] mb-4">Head of Marketing</p>
              <p className="text-gray-600">
                Lisa drives our marketing efforts with creativity and a
                strategic mindset.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={
                  "data:image/jpeg;base64,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"
                }
                className="h-14 w-14 rounded-full"
                alt=""
              />
              <h3 className="text-xl font-semibold mb-2">David Wilson</h3>
              <p className="text-[#4cbfb0] mb-4">Chief Financial Officer</p>
              <p className="text-gray-600">
                David manages our financial operations with precision and
                expertise.
              </p>
            </div>

            {/* Add more team members here */}
          </div>
        </section>

        {/* Customer Commitment Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Customer Commitment</h2>
          <p className="text-lg text-gray-700">
            At Go Reverse, our customers are our top priority. We are dedicated
            to providing an exceptional booking experience with every
            interaction. Our commitment to responsive support and seamless
            service ensures that your needs are met efficiently and effectively,
            leaving you with complete satisfaction.
          </p>
        </section>

        {/* Contact Us Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <div className="flex items-center space-x-4">
            <p className="text-lg text-gray-700">
              Have questions or feedback? Reach out to us:
            </p>
          </div>
          <a
            href="mailto:info@Typo Tech.com"
            className="text-blue-500 hover:underline"
          >
            info@goRevers.com
          </a>
        </section>
      </div>
    </div>
  );
};

export default About;
