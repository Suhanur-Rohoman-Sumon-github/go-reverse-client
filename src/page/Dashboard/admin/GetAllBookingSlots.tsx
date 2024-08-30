/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, Tag, Dropdown, Menu, Button } from "antd";
import { useGetAllSlotsFromAdminQuery } from "../../../redux/fetures/slots/slots.api";
import { TSlots } from "../../../types";
import Skeletons from "../../../componnets/skeleton/Skeletons";

const GetAllBookingSlots = () => {
  const { data, error, isLoading } = useGetAllSlotsFromAdminQuery(undefined);

  if (isLoading) {
    return (
      <div>
        <Skeletons />
      </div>
    );
  }

  if (error) return <div>Error loading data</div>;

  // Format the data
  const formattedData = (data || []).map((slot: TSlots) => ({
    key: slot._id,
    roomName: slot?.room?.name,
    startTime: slot.startTime,
    endTime: slot.endTime,
    isBooked: slot.isBooked ? "Booked" : "Available",
  }));

  const handleMenuClick = (key: string, record: TSlots) => {
    if (key === "update") {
      console.log(`Update slot with id ${record._id}`);
    } else if (key === "delete") {
      console.log(`Delete slot with id ${record._id}`);
    }
  };

  const menu = (record: TSlots) => (
    <Menu onClick={({ key }) => handleMenuClick(key, record)}>
      <Menu.Item key="update">Update</Menu.Item>
      <Menu.Item key="delete">Delete</Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: "Room Name",
      dataIndex: "roomName",
      key: "roomName",
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
      key: "startTime",
    },
    {
      title: "End Time",
      dataIndex: "endTime",
      key: "endTime",
    },
    {
      title: "Status",
      dataIndex: "isBooked",
      key: "isBooked",
      render: (status: string) => (
        <Tag color={status === "Booked" ? "red" : "green"}>{status}</Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: { key: string | undefined }) => {
        const originalSlot = data?.find(
          (slot) => slot._id === record.key
        ) as TSlots;
        return (
          <Dropdown overlay={menu(originalSlot)} trigger={["click"]}>
            <Button>Actions</Button>
          </Dropdown>
        );
      },
    },
  ];

  return <Table dataSource={formattedData} columns={columns} rowKey="key" />;
};

export default GetAllBookingSlots;
