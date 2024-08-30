import { Table, Button, Tag, TableColumnsType } from "antd";
import {
  useDeleteBookingsMutation,
  useGetAllBookingsQuery,
  useUpdateBookingMutation,
} from "../../../redux/fetures/booking/booking.api";
import { TBookingData } from "../../../types/booking.type";
import Skeletons from "../../../componnets/skeleton/Skeletons";

const getStateColor = (status: string) => {
  switch (status) {
    case "confirmed":
      return "green";
    case "canceled":
      return "red";
    default:
      return "gray";
  }
};

const AllPendingBookings = () => {
  const { data, isLoading } = useGetAllBookingsQuery(undefined);

  const [updateBooking] = useUpdateBookingMutation();
  const [deleteBookings] = useDeleteBookingsMutation();

  const handleConfirm = async (id: string) => {
    await updateBooking({
      id,
      payload: { isConfirmed: "confirmed" },
    });
  };

  const handleCancel = async (id: string) => {
    await updateBooking({
      id,
      payload: { isConfirmed: "canceled" },
    });
  };
  const handleDelete = async (id: string) => {
    await deleteBookings(id);
  };

  // Define table columns
  const columns: TableColumnsType<TBookingData> = [
    {
      title: "Room Name",
      dataIndex: ["room", "name"],
      key: "roomName",
    },
    {
      title: "User Name",
      dataIndex: ["user", "name"],
      key: "userName",
    },
    {
      title: "Total Amount",
      dataIndex: "totalAmount",
      key: "totalAmount",
    },
    {
      title: "Slots",
      key: "slots",
      render: (_, record) => (
        <div>
          {record.slots.map((slot) => (
            <div key={slot._id}>
              {slot.startTime} - {slot.endTime}
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "State",
      key: "state",
      render: (_, record) => (
        <Tag color={getStateColor(record.isConfirmed)}>
          {record.isConfirmed.charAt(0).toUpperCase() +
            record.isConfirmed.slice(1)}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div>
          <Button
            type="primary"
            onClick={() => handleConfirm(record._id)}
            disabled={record.isConfirmed === "confirmed"}
          >
            Confirm
          </Button>
          <Button
            type="default"
            onClick={() => handleCancel(record._id)}
            style={{ marginLeft: 8 }}
            disabled={record.isConfirmed === "canceled"}
          >
            Cancel
          </Button>
          <Button
            type="default"
            onClick={() => handleDelete(record._id)}
            style={{ marginLeft: 8 }}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  // Transform fetched data to table-friendly format
  const tableData = (data as TBookingData[])?.map((booking: TBookingData) => ({
    key: booking._id,
    ...booking,
  }));

  // Render loading state
  if (isLoading) {
    return (
      <div>
        <Skeletons />
      </div>
    );
  }

  // Render table with data
  return (
    <div>
      <h1>Pending Bookings</h1>
      <Table
        columns={columns}
        dataSource={tableData}
        pagination={{ pageSize: 5 }}
        rowKey="_id"
      />
    </div>
  );
};

export default AllPendingBookings;
