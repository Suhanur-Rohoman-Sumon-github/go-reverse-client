import React, { useState, useEffect, EventHandler } from "react";
import { useGetAllRoomsQuery } from "../../../redux/fetures/rooms/rooms.api";
import { TQueryParams } from "../../../types";

const RoomPage = () => {
  const [params, setParams] = useState<TQueryParams[]>([]);
  const [filters, setFilters] = useState({
    searchTerm: "",
    capacity: 0,
    priceRange: 0,
    sort: "",
  });

  console.log(filters.priceRange);

  const { data: roomsData } = useGetAllRoomsQuery(params);

  useEffect(() => {
    const buildQueryParams = () => {
      const queryParams: TQueryParams[] = [];

      if (filters.searchTerm) {
        queryParams.push({ name: "searchTerm", value: filters.searchTerm });
      }

      if (filters.capacity) {
        queryParams.push({
          name: "capacity",
          value: filters.capacity.toString(),
        });
      }

      if (filters.priceRange) {
        queryParams.push({
          name: "pricePerSlot",
          value: filters.priceRange,
        });
      }

      if (filters.sort) {
        queryParams.push({ name: "sort", value: filters.sort });
      }

      return queryParams;
    };

    setParams(buildQueryParams());
  }, [filters]);

  const handleSearch = (event: EventHandler) => {
    setFilters({ ...filters, searchTerm: event.target.value });
  };

  const handleCapacityChange = (event) => {
    const value = parseInt(event.target.value);
    setFilters({
      ...filters,
      capacity: value,
    });
  };

  const handlePriceRangeChange = (event) => {
    const value = parseInt(event.target.value);
    setFilters({
      ...filters,
      priceRange: value,
    });
  };

  const handleSortChange = (event) => {
    setFilters({
      ...filters,
      sort: event.target.value,
    });
  };

  const clearFilters = () => {
    setFilters({
      searchTerm: "",
      capacity: 0,
      priceRange: 0,
      sort: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className="bg-cover h-96 flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://convene.com/wp-content/uploads/2022/03/Meetings_01_Header1170x320-2048x606.jpg')",
        }}
      ></header>

      <div className="flex flex-grow">
        <aside className="w-full md:w-1/4 p-6 bg-white shadow-lg rounded-lg m-4">
          <h2 className="text-primary">Filters</h2>

          <div className="mb-6">
            <input
              type="text"
              placeholder="Search by room name..."
              onChange={handleSearch}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="text-secondary">Capacity</label>
            <div className="flex flex-col">
              {[5, 10, 20, 30, 50, 100].map((capacity) => (
                <label key={capacity} className="inline-flex items-center mt-2">
                  <input
                    type="radio"
                    value={capacity}
                    checked={filters.capacity === capacity}
                    onChange={handleCapacityChange}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">{capacity}+</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block mb-2">Price Range</label>
            <input
              type="range"
              min="0"
              max="500"
              step="50"
              value={filters.priceRange}
              onChange={handlePriceRangeChange}
              className="w-full text-green-500"
            />
            <div className="flex justify-between text-gray-700">
              <span>$0</span>
              <span>${filters.priceRange}</span>
            </div>
          </div>

          <div className="mb-6">
            <label className="text-secondary">Sort by Price</label>
            <select
              name="sort"
              value={filters.sort}
              onChange={handleSortChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">sort price</option>
              <option value="pricePerSlot"> Low to High </option>
            </select>
          </div>

          <button onClick={clearFilters} className="btn-primary w-full">
            Clear Filters
          </button>
        </aside>

        <main className="w-full md:w-3/4 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {roomsData?.length > 0 ? (
            roomsData?.map((room) => (
              <div
                key={room._id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out"
              >
                <img alt={room.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-lg font-bold text-gray-800">
                    {room.name}
                  </h2>
                  <p className="text-gray-600">Capacity: {room.capacity}</p>
                  <p className="text-gray-600">
                    Price Per Slot: ${room.pricePerSlot}
                  </p>
                  <button className="btn-primary w-full mt-4">
                    See Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center">
              <p className="text-primary ">no data found</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default RoomPage;
