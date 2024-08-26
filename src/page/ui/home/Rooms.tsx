import Title from "../../../componnets/ui/Title";
import Aos from "../../../hooks/Aos";

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      image:
        "https://q-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=",
      name: "Deluxe Room",
      capacity: "4 People",
      price: "$100",
    },
    {
      id: 2,
      image:
        "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",
      name: "Standard Room",
      capacity: "2 People",
      price: "$80",
    },
    {
      id: 3,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=c4092495705eab3fad626e8e1a43b1daf7c623e4ea41daf26a201b4417a71709&o=",
      name: "Suite",
      capacity: "6 People",
      price: "$200",
    },
    {
      id: 4,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/285825586.webp?k=acd6fa84499149459629d3c7ebc4008d3fe4f675a67c0202be2622dac900b7f1&o=",
      name: "Single Room",
      capacity: "1 Person",
      price: "$50",
    },
    {
      id: 5,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/579099936.webp?k=e04cc7f7fe864ce09b7d7d978dbb7db3e558038a2151eb7c4c11e895bafbd8c0&o=",
      name: "Double Room",
      capacity: "2 People",
      price: "$90",
    },
    {
      id: 6,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=",
      name: "Family Suite",
      capacity: "5 People",
      price: "$150",
    },
  ];
  return (
    <div className="py-16 ">
      <div className="">
        <Title title="Most popular rooms" subTitle="our most visited rooms" />
        <Aos />
        <div
          data-aos="flip-left"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {rooms.map((room) => (
            <div
              key={room.id}
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
                  Price Per Slot: {room.price}
                </p>
                <a
                  href="#"
                  className="inline-block bg-[#4cbfb0] hover:bg-[#3ea592] text-white font-semibold py-2 px-4 rounded transition duration-300"
                >
                  See Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
