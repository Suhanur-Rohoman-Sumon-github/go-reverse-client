import { Table, TableColumnsType, TableProps } from "antd";
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

  const tableData = roomData?.map(
    ({ _id, name, capacity, floorNo, pricePerSlot, amenities, roomNo }) => ({
      _id,
      name,
      capacity,
      floorNo,
      pricePerSlot,
      amenities,
      roomNo,
    })
  );
  const columns: TableColumnsType<TTableDataType> = [
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: [
        {
          text: "name",
          value: "valobasa",
        },
      ],
      responsive: ["xs", "sm", "md", "lg", "xl"],
    },
    {
      title: "Capacity",
      dataIndex: "capacity",
      responsive: ["xs", "sm", "md", "lg", "xl"],
    },
    {
      title: "FloorNo",
      dataIndex: "floorNo",
      responsive: ["xs", "sm", "md", "lg", "xl"],
    },
    {
      title: "PricePerSlot",
      dataIndex: "pricePerSlot",
      responsive: ["xs", "sm", "md", "lg", "xl"],
    },
    {
      title: "Amenities",
      dataIndex: "amenities",
      responsive: ["xs", "sm", "md", "lg", "xl"],
    },
    {
      title: "RoomNo",
      dataIndex: "roomNo",
      responsive: ["xs", "sm", "md", "lg", "xl"],
    },
    {
      title: "Action",
      key: "x",
      render: () => {
        return (
          <div>
            <button>update</button>
            <button className="ml-4">delete</button>
          </div>
        );
      },
      responsive: ["xs", "sm", "md", "lg", "xl"],
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
