// src/components/RoomPage.jsx
import React, { useState } from "react";

// Dummy data for rooms
const roomsData = [
  {
    id: 1,
    name: "Conference Room A",
    capacity: 10,
    pricePerSlot: 100,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 2,
    name: "Meeting Room B",
    capacity: 5,
    pricePerSlot: 50,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 3,
    name: "Seminar Hall",
    capacity: 50,
    pricePerSlot: 500,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 4,
    name: "Training Room",
    capacity: 20,
    pricePerSlot: 200,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 5,
    name: "Workshop Room",
    capacity: 15,
    pricePerSlot: 150,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 6,
    name: "Interview Room",
    capacity: 3,
    pricePerSlot: 30,
    image: "https://via.placeholder.com/200",
  },
];

const RoomPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    capacities: [],
    priceRange: [0, 500],
    sort: "",
  });

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCapacityChange = (event) => {
    const value = parseInt(event.target.value);
    setFilters((prevFilters) => ({
      ...prevFilters,
      capacities: prevFilters.capacities.includes(value)
        ? prevFilters.capacities.filter((capacity) => capacity !== value)
        : [...prevFilters.capacities, value],
    }));
  };

  const handlePriceRangeChange = (event) => {
    const value = parseInt(event.target.value);
    setFilters({
      ...filters,
      priceRange: [0, value],
    });
  };

  const handleSortChange = (event) => {
    setFilters({
      ...filters,
      sort: event.target.value,
    });
  };

  const clearFilters = () => {
    setSearchTerm("");
    setFilters({
      capacities: [],
      priceRange: [0, 500],
      sort: "",
    });
  };

  const filteredRooms = roomsData
    .filter((room) =>
      room.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((room) =>
      filters.capacities.length > 0
        ? filters.capacities.includes(room.capacity)
        : true
    )
    .filter(
      (room) =>
        room.pricePerSlot >= filters.priceRange[0] &&
        room.pricePerSlot <= filters.priceRange[1]
    )
    .sort((a, b) => {
      if (filters.sort === "asc") {
        return a.pricePerSlot - b.pricePerSlot;
      } else if (filters.sort === "desc") {
        return b.pricePerSlot - a.pricePerSlot;
      }
      return 0;
    });

  return (
    <div className="min-h-screen  flex flex-col bg-[#dbf2ef]">
      <header
        className="bg-cover  h-96 flex items-center justify-center "
        style={{
          backgroundImage:
            "url('https://convene.com/wp-content/uploads/2022/03/Meetings_01_Header1170x320-2048x606.jpg')",
        }}
      ></header>

      {/* Main content */}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 p-6 bg-white shadow-lg rounded-lg m-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Filters</h2>

          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search by room name..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Capacity Filter */}
          <div className="mb-6">
            <label className="block mb-2 text-gray-600 font-medium">
              Capacity
            </label>
            <div className="flex flex-col">
              {[5, 10, 20, 30, 50].map((capacity) => (
                <label key={capacity} className="inline-flex items-center mt-2">
                  <input
                    type="checkbox"
                    value={capacity}
                    checked={filters.capacities.includes(capacity)}
                    onChange={handleCapacityChange}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">{capacity}+</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="mb-6">
            <label className="block mb-2 text-gray-600 font-medium">
              Price Range
            </label>
            <input
              type="range"
              min="0"
              max="500"
              step="50"
              value={filters.priceRange[1]}
              onChange={handlePriceRangeChange}
              className="w-full"
            />
            <div className="flex justify-between text-gray-700">
              <span>$0</span>
              <span>${filters.priceRange[1]}</span>
            </div>
          </div>

          {/* Sort by Price */}
          <div className="mb-6">
            <label className="block mb-2 text-gray-600 font-medium">
              Sort by Price
            </label>
            <select
              name="sort"
              value={filters.sort}
              onChange={handleSortChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">None</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>

          {/* Clear Filters Button */}
          <button
            onClick={clearFilters}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition duration-300 ease-in-out"
          >
            Clear Filters
          </button>
        </aside>

        {/* Room cards */}
        <main className="w-full md:w-3/4 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800">{room.name}</h2>
                <p className="text-gray-600">Capacity: {room.capacity}</p>
                <p className="text-gray-600">
                  Price Per Slot: ${room.pricePerSlot}
                </p>
                <button className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition duration-300 ease-in-out">
                  See Details
                </button>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default RoomPage;
