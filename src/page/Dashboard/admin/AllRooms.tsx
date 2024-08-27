import { useGetAllRoomsQuery } from "../../../redux/fetures/rooms/rooms.api";

const AllRooms = () => {
  const { data } = useGetAllRoomsQuery(undefined);
  console.log(data);
  return (
    <div>
      <h1>this is all rooms </h1>
    </div>
  );
};

export default AllRooms;
