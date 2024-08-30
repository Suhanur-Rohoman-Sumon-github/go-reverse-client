import { Table, TableColumnsType, TableProps, Tag } from "antd";
import { useState } from "react";
import { TQueryParams } from "../../../types";
import { useGetMyBookingsQuery } from "../../../redux/fetures/booking/booking.api";
import Skeletons from "../../../componnets/skeleton/Skeletons";
import moment from "moment";

// Define a type for the table data
type TTableDataType = {
  roomName: string;
  dateTime: string;
  status: string;
};

const MyBookings = () => {
  const [params, setParams] = useState<TQueryParams[] | undefined>(undefined);
  const {
    data: MyBookings,
    isLoading,
    isFetching,
  } = useGetMyBookingsQuery(undefined);

  console.log(MyBookings);

  // Prepare table data with necessary fields
  const tableData: TTableDataType[] =
    MyBookings?.map(({ room, date, slots, isConfirmed }) => ({
      roomName: room.name,
      dateTime: `${date} ${moment(slots[0].startTime, "HH:mm").format(
        "hh:mm A"
      )} - ${moment(slots[slots.length - 1].endTime, "HH:mm").format(
        "hh:mm A"
      )}`,
      status: isConfirmed,
    })) || [];

  // Define table columns with conditional rendering for status
  const columns: TableColumnsType<TTableDataType> = [
    {
      title: "Room Name",
      dataIndex: "roomName",
      key: "roomName",
      responsive: ["xs", "sm", "md", "lg", "xl"],
    },
    {
      title: "Date & Time",
      dataIndex: "dateTime",
      key: "dateTime",
      responsive: ["xs", "sm", "md", "lg", "xl"],
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={status === "confirmed" ? "green" : "red"}>
          {status.toUpperCase()}
        </Tag>
      ),
      responsive: ["xs", "sm", "md", "lg", "xl"],
    },
  ];

  // Handle table changes (e.g., filtering)
  const onChange: TableProps<TTableDataType>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParams[] = [];
      filters.roomName?.forEach((item) =>
        queryParams.push({ name: "roomName", value: item })
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

export default MyBookings;
