import { Link } from "react-router-dom";
import Title from "../../../componnets/ui/Title";
import Aos from "../../../hooks/Aos";
import { useGetAllRoomsQuery } from "../../../redux/fetures/rooms/rooms.api";

const Rooms = () => {
  const { data: roomData } = useGetAllRoomsQuery(undefined);

  return (
    <div className="py-16 ">
      <div className="">
        <Title title="Most popular rooms" subTitle="our most visited rooms" />
        <Aos />
        <div
          data-aos="flip-left"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {roomData?.map((room) => (
            <div
              key={room._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-2">Capacity: {room.capacity}</p>
                <p className="text-gray-600 mb-4">
                  Price Per Slot: {room.pricePerSlot}
                </p>
                <Link
                  to={`/rooms/${room._id}`}
                  className="inline-block bg-[#4cbfb0] hover:bg-[#3ea592] text-white font-semibold py-2 px-4 rounded transition duration-300"
                >
                  See Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
