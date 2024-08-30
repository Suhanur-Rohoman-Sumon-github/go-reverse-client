import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetSingleRoomQuery } from "../../../redux/fetures/rooms/rooms.api";
import { useGetAllSlotsQuery } from "../../../redux/fetures/slots/slots.api";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { setProductPrice } from "../../../redux/fetures/payment/payment.slice";
import { TSingleRoom } from "../../../types";
import Skeletons from "../../../componnets/skeleton/Skeletons";
import {
  setDate,
  setRoom,
  toggleSlotId,
} from "../../../redux/fetures/booking/booking.slice";

const SingleRoom = () => {
  const [isSlotAvailable] = useState(true);
  const disPatch = useAppDispatch();
  const { slotIds } = useAppSelector((state) => state.bookings);

  const { roomId } = useParams();

  const { data: SingleRoom, isLoading: roomLoading } = useGetSingleRoomQuery(
    roomId as string
  );

  const { data: availableSlots, isLoading: slotsLoading } =
    useGetAllSlotsQuery(roomId);

  if (roomLoading || slotsLoading) {
    return (
      <div>
        <Skeletons />
      </div>
    );
  }

  if (!SingleRoom) return <div>No room data available</div>;

  const { name, capacity, floorNo, pricePerSlot, amenities, image } =
    SingleRoom as TSingleRoom;
  const totalAmount = pricePerSlot * availableSlots!.length;
  console.log(availableSlots![0].date);

  const handleSlotSelection = (slotId: string) => {
    disPatch(toggleSlotId(slotId));
    disPatch(setProductPrice(totalAmount));
    disPatch(setRoom(roomId as string));
    disPatch(setDate(availableSlots![0].date as string));
  };

  return (
    <div className="min-h-screen flex flex-col md:w-10/12 mx-auto mt-32 mb-8">
      {/* Room Details Section */}
      <section id="room-details" className="p-6">
        <section id="image-gallery" className="md:flex gap-4">
          <div className="w-[80%]">
            <img src={image} className="w-full h-64" alt="" />
          </div>

          <div className="md:w-1/5 flex flex-col mt-5 items-center">
            <div className="flex items-center justify-center w-full mb-4 ">
              <button className="bg-[#4cbfb0] flex items-center text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300">
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
            <div className="w-full h-full">
              <div className="w-full h-full bg-gray-200 rounded-lg">
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
        <h1 className="text-primary mt-4">{name}</h1>
        <p className="text-[#434B4F]">{`Floor No : ${floorNo}`}</p>
        <p className="text-[#434B4F]">{`Capacity : ${capacity}`}</p>
        <p className="text-[#434B4F]">{`Price Per Slot : ${pricePerSlot}`}</p>
        <p className="mt-6 text-lg text-gray-700">
          This room is designed to provide a perfect environment for business
          meetings, conferences, and other professional gatherings. It is
          spacious, well-ventilated, and equipped with the latest technology to
          ensure your event runs smoothly.
        </p>

        <div className="mt-6">
          <h2 className="text-primary">Facilities</h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            {amenities.map((item: string) => (
              <div key={item}>
                <li>{item}</li>
              </div>
            ))}
          </ul>
        </div>
      </section>

      <section id="booking-section" className="ml-6">
        <h2 className="text-primary">Book a slot</h2>

        {availableSlots && availableSlots?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {availableSlots?.map((slot) => (
              <button
                key={slot._id}
                onClick={() => handleSlotSelection(slot._id)}
                className={`w-full px-4 py-2 border rounded-lg ${
                  slotIds.includes(slot._id)
                    ? "bg-[#4cbfb0] text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                {moment(slot.startTime, "hh:mm A").isValid()
                  ? moment(slot.startTime, "hh:mm A").format("hh:mm A")
                  : "Invalid date"}
              </button>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <div>
              <img
                src="https://tntph.com/Pages/images/default-source/error/not-available.png"
                alt=""
              />
              <p className="text-red-500 mb-4 text-center">
                No available slots. Please select another Room.
              </p>
            </div>
          </div>
        )}

        {availableSlots && availableSlots?.length > 0 && (
          <Link to={"/checkout"}>
            <button
              className={`btn-primary w-full md:w-auto px-4 py-2 text-white ${
                isSlotAvailable && slotIds.length > 0
                  ? ""
                  : "bg-gray-300 cursor-not-allowed"
              } rounded-lg`}
              disabled={!isSlotAvailable || slotIds.length === 0}
            >
              Book Now
            </button>
          </Link>
        )}
      </section>
    </div>
  );
};

export default SingleRoom;
