import { Row, Col, Card } from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import CustomForm from "../../../componnets/form/CustomForm";
import CustomInput from "../../../componnets/form/CustomInput";
import CustomSelect from "../../../componnets/form/CustomSelect";
import { FormEventHandler } from "react";

const roomResolver = z.object({
  roomName: z.string({ required_error: "Room name is required" }),
  image: z.string({ required_error: "image name is required" }),
  capacity: z.string({ required_error: "Capacity must be at least 1" }),
  pricePerSlot: z.string({ required_error: "Price per slot must be positive" }),
  roomType: z.string({ required_error: "Room type is required" }),
  amenities: z.array(
    z.string({ required_error: "Please select at least one amenity" })
  ),
});

const CreateRoom = () => {
  const onSubmit = (data: FormEventHandler) => {
    console.log(data);
  };

  const roomOptions = [
    { value: "standard", label: "Standard" },
    { value: "deluxe", label: "Deluxe" },
    { value: "suite", label: "Suite" },
  ];

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
        <Col>
          <CustomSelect
            mode={"multiple "}
            label="Amenities"
            name="amenities"
            options={amenityOptions}
          />
        </Col>

        <button className="btn-primary w-full" style={{ marginTop: "20px" }}>
          submit
        </button>
      </CustomForm>
    </Card>
  );
};

export default CreateRoom;
