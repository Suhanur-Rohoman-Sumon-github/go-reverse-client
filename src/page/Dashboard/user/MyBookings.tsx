import { Table, TableColumnsType, Tag } from "antd";
import { useGetMyBookingsQuery } from "../../../redux/fetures/booking/booking.api";
import Skeletons from "../../../componnets/skeleton/Skeletons";
import moment from "moment";
import { TBookings } from "../../../types/booking.type";

// Define a type for the table data
export type TTableDataType = Pick<
  TBookings,
  "roomName" | "dateTime" | "status" | "status"
>;

const MyBookings = () => {
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
        <Tag
          color={
            status === "confirmed"
              ? "green"
              : status === "canceled"
              ? "red"
              : "orange"
          }
        >
          {status === "canceled" ? "CANCEL" : status.toUpperCase()}
        </Tag>
      ),
      responsive: ["xs", "sm", "md", "lg", "xl"],
    },
  ];

  if (isLoading) {
    return <Skeletons />;
  }

  return (
    <div>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        showSorterTooltip={{ target: "sorter-icon" }}
        scroll={{ x: 800 }}
      />
    </div>
  );
};

export default MyBookings;
