/* eslint-disable @typescript-eslint/no-explicit-any */
import { Row, Col, Card } from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomForm from "../../../componnets/form/CustomForm";
import CustomInput from "../../../componnets/form/CustomInput";
import CustomSelect from "../../../componnets/form/CustomSelect";
import { roomResolver } from "../../../zodeSchema/ZodSchemaResolver";
import { useCreateRoomMutation } from "../../../redux/fetures/rooms/rooms.api";

const CreateRoom = () => {
  const [CreateRoom] = useCreateRoomMutation();
  const onSubmit = (data: any) => {
    console.log(data);
    data.roomNo = Number(data.roomNo);
    data.floorNo = Number(data.floorNo);
    data.capacity = Number(data.capacity);
    data.pricePerSlot = Number(data.pricePerSlot);
    CreateRoom(data);
    console.log(data);
  };

  const amenityOptions = [
    { value: "Projector", label: "Projector" },
    { value: "Whiteboard", label: "Whiteboard" },
    { value: "WiFi", label: "WiFi" },
    { value: "Teleconference", label: "Teleconference" },
    { value: "Air Conditioning", label: "Air Conditioning" },
  ];

  return (
    <Card style={{ width: "100%", padding: "20px" }}>
      <CustomForm onSubmit={onSubmit} resolver={zodResolver(roomResolver)}>
        <CustomInput
          label="image"
          name="image"
          placeholder="Enter room name"
          type="text"
        />

        <Row gutter={16}>
          <Col span={12}>
            <CustomInput
              label="Room Name"
              name="name"
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
              label="Room Number"
              name="roomNo"
              placeholder="Enter room number"
              type="text"
            />
          </Col>
          <Col span={12}>
            <CustomInput
              label="Room Number"
              name="floorNo"
              placeholder="Enter room number"
              type="text"
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
              mode={"multiple "}
              label="Amenities"
              name="amenities"
              options={amenityOptions}
            />
          </Col>
        </Row>

        <button className="btn-primary w-full" style={{ marginTop: "20px" }}>
          submit
        </button>
      </CustomForm>
    </Card>
  );
};

export default CreateRoom;
