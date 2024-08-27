import { Button, Form, Input, Select, Row, Col, Card } from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import CustomForm from "../../../componnets/form/CustomForm";
import CustomInput from "../../../componnets/form/CustomInput";
import CustomSelect from "../../../componnets/form/CustomSelect";
import { Controller } from "react-hook-form";

const { Option } = Select;

// Define your validation schema using Zod
const roomResolver = z.object({
  roomName: z.string().nonempty({ message: "Room name is required" }),
  capacity: z.string().min(1, { message: "Capacity must be at least 1" }),
  pricePerSlot: z
    .string()
    .min(0, { message: "Price per slot must be positive" }),
  roomType: z.string().nonempty({ message: "Room type is required" }),
});

const CreateRoom = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  const roomOptions = [
    { value: "standard", label: "Standard" },
    { value: "deluxe", label: "Deluxe" },
    { value: "suite", label: "Suite" },
  ];

  const amenityOptions = [
    { value: "standard", label: "Standard" },
    { value: "deluxe", label: "Deluxe" },
    { value: "suite", label: "Suite" },
  ];

  return (
    <Card style={{ width: "100%", padding: "20px" }}>
      <CustomForm onSubmit={onSubmit} resolver={zodResolver(roomResolver)}>
        {/* Room Image Upload */}
        <Form.Item label="Room Image" valuePropName="fileList">
          <input type="file" name="image" />
        </Form.Item>

        {/* Room Name and Capacity - Two inputs in one row */}
        <Row gutter={16}>
          <Col span={12}>
            <CustomInput
              label="Room Name"
              name="roomName"
              placeholder="Enter room name"
              type="text"
            />
          </Col>
          <Col span={12}>
            <CustomInput
              label="Capacity"
              name="capacity"
              placeholder="Enter room capacity"
              type="number"
            />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <CustomInput
              label="Price Per Slot"
              name="pricePerSlot"
              placeholder="Enter price per slot"
              type="number"
            />
          </Col>
          <Col span={12}>
            <CustomSelect
              options={roomOptions}
              name={"roomType"}
              label={"Room Type"}
              defaultValue="standard"
            />
          </Col>
        </Row>

        {/* Submit Button */}
        <Button type="primary" htmlType="submit" style={{ marginTop: "20px" }}>
          submit
        </Button>
      </CustomForm>
    </Card>
  );
};

export default CreateRoom;
