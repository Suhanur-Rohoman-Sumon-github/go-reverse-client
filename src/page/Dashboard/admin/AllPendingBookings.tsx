import { Table, Button, Tag, TableColumnsType } from "antd";
import { useGetAllBookingsQuery } from "../../../redux/fetures/booking/booking.api";
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

  const handleConfirm = (id: string) => {
    console.log(`Confirm booking with id ${id}`);
  };

  const handleCancel = (id: string) => {
    console.log(`Cancel booking with id ${id}`);
  };

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
        </div>
      ),
    },
  ];

  const tableData = (data as TBookingData[])?.map((booking: TBookingData) => ({
    key: booking._id,
    ...booking,
  }));

  if (isLoading) {
    return (
      <div>
        <Skeletons />
      </div>
    );
  }

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
