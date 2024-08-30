/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  Dropdown,
  Menu,
  Button,
  TableColumnsType,
  TableProps,
} from "antd";
import { useGetAllRoomsQuery } from "../../../redux/fetures/rooms/rooms.api";
import { TQueryParams, TRoomData } from "../../../types";
import { useState } from "react";
import Skeletons from "../../../componnets/skeleton/Skeletons";

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
  const [params, setParams] = useState<TQueryParams[] | undefined>(undefined);
  const { data: roomData, isLoading, isFetching } = useGetAllRoomsQuery(params);

  // Format table data to match the expected type
  const tableData = roomData?.map(
    ({ _id, name, capacity, floorNo, pricePerSlot, amenities, roomNo }) => ({
      key: _id, // Adding a key for Ant Design Table
      _id,
      name,
      capacity,
      floorNo,
      pricePerSlot,
      amenities,
      roomNo,
    })
  );

  const handleMenuClick = (key: string, record: TTableDataType) => {
    if (key === "update") {
      console.log(`Update room with id ${record._id}`);
    } else if (key === "delete") {
      console.log(`Delete room with id ${record._id}`);
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
      filters: [
        {
          text: "valobasa",
          value: "valobasa",
        },
      ],
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
    </div>
  );
};

export default AllRooms;
