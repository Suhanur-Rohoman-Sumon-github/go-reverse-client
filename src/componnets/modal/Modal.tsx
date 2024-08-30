/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Button, Modal, Row, Col } from "antd";
import { updateRoomResolver } from "../../zodeSchema/ZodSchemaResolver";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomForm from "../form/CustomForm";
import CustomInput from "../form/CustomInput";
import CustomSelect from "../form/CustomSelect";
// Define an interface for the props
interface UpdateRoomProps {
  room?: {
    image?: string;
    name?: string;
    capacity?: number;
    roomNo?: number;
    floorNo?: number;
    pricePerSlot?: number;
    amenities?: string[];
  };
  isVisible: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}
const UpdateRoom: React.FC<UpdateRoomProps> = ({
  room,
  isVisible,
  onClose,
  onSubmit,
}) => {
  const [initialValues] = useState(room || {});

  return (
    <Modal
      title={room ? "Update Room" : "Create Room"}
      open={isVisible}
      onCancel={onClose}
      footer={null}
    >
      <CustomForm
        onSubmit={onSubmit}
        resolver={zodResolver(updateRoomResolver)}
        defaultValues={initialValues}
      >
        <CustomInput
          label="Image"
          name="image"
          placeholder="Enter room image"
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
              label="Floor Number"
              name="floorNo"
              placeholder="Enter floor number"
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
              mode="multiple "
              label="Amenities"
              name="amenities"
              options={[
                { value: "Projector", label: "Projector" },
                { value: "Whiteboard", label: "Whiteboard" },
                { value: "WiFi", label: "WiFi" },
                { value: "Teleconference", label: "Teleconference" },
                { value: "Air Conditioning", label: "Air Conditioning" },
              ]}
            />
          </Col>
        </Row>

        <Button type="primary" htmlType="submit" className="w-full mt-4">
          Submit
        </Button>
      </CustomForm>
    </Modal>
  );
};

export default UpdateRoom;
