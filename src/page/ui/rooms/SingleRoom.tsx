import React, { useState } from "react";

const SingleRoom = () => {
  const [isSlotAvailable, setIsSlotAvailable] = useState(true); // Assuming slots are available initially
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null); // Track selected slot

  // Scroll to the booking section
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking-section");
    bookingSection?.scrollIntoView({ behavior: "smooth" });
  };

  // Simulate slots for demonstration
  const availableSlots = [
    { id: 1, time: "10:00 AM - 11:00 AM" },
    { id: 2, time: "11:30 AM - 12:30 PM" },
    { id: 3, time: "01:00 PM - 02:00 PM" },
    { id: 4, time: "02:30 PM - 03:30 PM" },
  ];

  // Handle slot selection
  const handleSlotSelection = (slotId: number) => {
    setSelectedSlot(slotId);
  };

  return (
    <div className="min-h-screen flex flex-col md:w-10/12 mx-auto mt-32 mb-8">
      {/* Room Details Section */}
      <section id="room-details" className="p-6">
        <h1 className="text-primary">Room Title</h1>

        <section id="image-gallery" className="p-6  md:flex gap-4">
          <div className="md:w-4/5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="col-span-2 row-span-2 relative group">
                <img
                  src="https://via.placeholder.com/800x600"
                  alt="Large Room Image"
                  className="w-full h-full object-cover rounded-lg  transform group-hover:scale-105 transition-transform duration-300"
                />
                <p className="absolute bottom-0 left-0 w-full bg-opacity-75 bg-black text-white p-2 text-sm group-hover:bg-opacity-100 transition-opacity duration-300">
                  Spacious room with natural lighting and modern amenities
                </p>
              </div>

              <div className="relative group">
                <img
                  src="https://via.placeholder.com/400x300"
                  alt="Room Image 1"
                  className="w-full h-auto object-cover rounded-lg  transform group-hover:scale-105 transition-transform duration-300"
                />
                <p className="absolute bottom-0 left-0 w-full bg-opacity-75 bg-black text-white p-2 text-sm group-hover:bg-opacity-100 transition-opacity duration-300">
                  Cozy seating area
                </p>
              </div>

              <div className="relative group">
                <img
                  src="https://via.placeholder.com/400x300"
                  alt="Room Image 2"
                  className="w-full h-auto object-cover rounded-lg  transform group-hover:scale-105 transition-transform duration-300"
                />
                <p className="absolute bottom-0 left-0 w-full bg-opacity-75 bg-black text-white p-2 text-sm group-hover:bg-opacity-100 transition-opacity duration-300">
                  Elegant interior design for meetings
                </p>
              </div>

              <div className="relative group">
                <img
                  src="https://via.placeholder.com/400x300"
                  alt="Room Image 3"
                  className="w-full h-auto object-cover rounded-lg  transform group-hover:scale-105 transition-transform duration-300"
                />
                <p className="absolute bottom-0 left-0 w-full bg-opacity-75 bg-black text-white p-2 text-sm group-hover:bg-opacity-100 transition-opacity duration-300">
                  Equipped with modern technology
                </p>
              </div>

              <div className="relative group">
                <img
                  src="https://via.placeholder.com/400x300"
                  alt="Room Image 4"
                  className="w-full h-auto object-cover rounded-lg  transform group-hover:scale-105 transition-transform duration-300"
                />
                <p className="absolute bottom-0 left-0 w-full bg-opacity-75 bg-black text-white p-2 text-sm group-hover:bg-opacity-100 transition-opacity duration-300">
                  Flexible layout options
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/5 flex flex-col mt-5 items-center">
            <div className="flex items-center justify-center w-full mb-4 ">
              <button className="btn-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 19a7 7 0 100-14 7 7 0 000 14z"
                  />
                </svg>
                Good 4.7 Reviews
              </button>
            </div>
            <div className="w-full h-full ">
              <div className="w-full h-full bg-gray-200 rounded-lg ">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093693!2d144.9537351153183!3d-37.816279979751554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f2c95d3b%3A0x5045675218ce7e33!2zU3dpZnQgVmlld3MgTWVsYm91cm5lLCBBdXN0cmFsaWE!5e0!3m2!1sen!2sus!4v1615381037758!5m2!1sen!2sus"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <p className="mt-6 text-lg text-gray-700">
          This room is designed to provide a perfect environment for business
          meetings, conferences, and other professional gatherings. It is
          spacious, well-ventilated, and equipped with the latest technology to
          ensure your event runs smoothly.
        </p>

        <div className="mt-6">
          <h2 className="text-primary">Facilities</h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>High-speed Wi-Fi</li>
            <li>Audio-visual equipment</li>
            <li>Air conditioning</li>
            <li>Comfortable seating arrangements</li>
            <li>Refreshments and catering options</li>
          </ul>
        </div>
      </section>

      <section id="booking-section" className="">
        <h2 className="text-2xl font-bold mb-4">Check Availability</h2>

        {isSlotAvailable ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {availableSlots.map((slot) => (
              <button
                key={slot.id}
                onClick={() => handleSlotSelection(slot.id)}
                className={`w-full px-4 py-2 border rounded-lg ${
                  selectedSlot === slot.id
                    ? "bg-[#4cbfb0] text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                {slot.time}
              </button>
            ))}
          </div>
        ) : (
          <p className="text-red-500 mb-4">
            No available slots. Please select another time.
          </p>
        )}

        <button
          onClick={() => alert("Booking confirmed!")}
          className={`btn-primary w-full md:w-auto px-4 py-2 text-white ${
            isSlotAvailable && selectedSlot
              ? ""
              : "bg-gray-300 cursor-not-allowed"
          } rounded-lg`}
          disabled={!isSlotAvailable || !selectedSlot}
        >
          Book Now
        </button>
      </section>
    </div>
  );
};

export default SingleRoom;
