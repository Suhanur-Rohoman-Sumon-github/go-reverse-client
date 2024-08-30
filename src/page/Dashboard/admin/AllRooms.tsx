/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  Table,
  Dropdown,
  Menu,
  Button,
  TableColumnsType,
  TableProps,
} from "antd";
import {
  useDeleteRoomsMutation,
  useGetAllRoomsQuery,
  useUpdateRoomMutation,
} from "../../../redux/fetures/rooms/rooms.api";
import { TQueryParams, TRoomData } from "../../../types";
import Skeletons from "../../../componnets/skeleton/Skeletons";
import UpdateRoom from "../../../componnets/modal/Modal";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

export type TTableDataType = Pick<
  TRoomData,
  | "_id"
  | "name"
  | "amenities"
  | "capacity"
  | "floorNo"
  | "pricePerSlot"
  | "roomNo"
>;

const AllRooms = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<TTableDataType | null>(null);
  const [params, setParams] = useState<TQueryParams[] | undefined>(undefined);
  const { data: roomData, isLoading, isFetching } = useGetAllRoomsQuery(params);
  const [updateRoom] = useUpdateRoomMutation();
  const [DeleteRoom] = useDeleteRoomsMutation();
  const tableData = roomData?.map(
    ({ _id, name, capacity, floorNo, pricePerSlot, amenities, roomNo }) => ({
      key: _id,
      _id,
      name,
      capacity,
      floorNo,
      pricePerSlot,
      amenities,
      roomNo,
    })
  );

  const handleMenuClick = async (key: string, record: TTableDataType) => {
    if (key === "update") {
      setSelectedRoom(record);
      setIsModalOpen(true);
    } else if (key === "delete") {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        DeleteRoom(record._id);

        Swal.fire("Deleted!", "Your product has been deleted.", "success");
      }
    }
  };

  const menu = (record: TTableDataType) => (
    <Menu onClick={({ key }) => handleMenuClick(key, record)}>
      <Menu.Item key="update">Update</Menu.Item>
      <Menu.Item key="delete">Delete</Menu.Item>
    </Menu>
  );

  const columns: TableColumnsType<TTableDataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      responsive: ["xs", "sm", "md", "lg", "xl"],
    },
    {
      title: "Capacity",
      dataIndex: "capacity",
      key: "capacity",
      responsive: ["xs", "sm", "md", "lg", "xl"],
    },
    {
      title: "Floor No",
      dataIndex: "floorNo",
      key: "floorNo",
      responsive: ["xs", "sm", "md", "lg", "xl"],
    },
    {
      title: "Price Per Slot",
      dataIndex: "pricePerSlot",
      key: "pricePerSlot",
      responsive: ["xs", "sm", "md", "lg", "xl"],
    },
    {
      title: "Amenities",
      dataIndex: "amenities",
      key: "amenities",
      responsive: ["xs", "sm", "md", "lg", "xl"],
    },
    {
      title: "Room No",
      dataIndex: "roomNo",
      key: "roomNo",
      responsive: ["xs", "sm", "md", "lg", "xl"],
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: TTableDataType) => (
        <Dropdown overlay={menu(record)} trigger={["click"]}>
          <Button>Actions</Button>
        </Dropdown>
      ),
    },
  ];

  const onChange: TableProps<TTableDataType>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParams[] = [];
      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );
      setParams(queryParams);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRoom(null);
  };

  const handleUpdateRoom = async (data: any) => {
    // Convert numeric fields to numbers
    data.capacity = Number(data.capacity);
    data.roomNo = Number(data.roomNo);
    data.floorNo = Number(data.floorNo);
    data.pricePerSlot = Number(data.pricePerSlot);

    const response = await updateRoom({ id: selectedRoom?._id, payload: data });
    if (response?.data?.success) {
      handleCloseModal();
    }
  };

  if (isLoading) {
    return <Skeletons />;
  }

  return (
    <div>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
        scroll={{ x: 800 }}
      />

      {/* Modal for updating room */}
      {selectedRoom && (
        <UpdateRoom
          room={selectedRoom}
          isVisible={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleUpdateRoom}
        />
      )}
    </div>
  );
};

export default AllRooms;
