/* eslint-disable @typescript-eslint/no-explicit-any */
import { Row, Col, Card } from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomForm from "../../../componnets/form/CustomForm";
import CustomInput from "../../../componnets/form/CustomInput";
import CustomSelect from "../../../componnets/form/CustomSelect";
import { useCreateSlotsMutation } from "../../../redux/fetures/slots/slots.api";
import { useGetAllRoomsQuery } from "../../../redux/fetures/rooms/rooms.api";
import { slotResolver } from "../../../zodeSchema/ZodSchemaResolver";

const CreateSlots = () => {
  const [createSlots] = useCreateSlotsMutation();
  const { data: roomData } = useGetAllRoomsQuery(undefined);

  const onSubmit = async (data: any) => {
    console.log(data);
    const res = await createSlots(data);
    console.log(res);
  };

  const roomOptions =
    roomData?.map((room) => ({
      value: room._id,
      label: room.name,
    })) || [];

  return (
    <Card style={{ width: "100%", padding: "20px" }}>
      <CustomForm onSubmit={onSubmit} resolver={zodResolver(slotResolver)}>
        <Row gutter={16}>
          <Col span={12}>
            <CustomSelect options={roomOptions} name="room" label="Room" />
          </Col>
          <Col span={12}>
            <CustomInput
              label="Date"
              name="date"
              placeholder="Enter date (YYYY-MM-DD)"
              type="date"
            />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <CustomInput
              label="Start Time"
              name="startTime"
              placeholder="Enter start time (HH:MM)"
              type="time"
            />
          </Col>
          <Col span={12}>
            <CustomInput
              label="End Time"
              name="endTime"
              placeholder="Enter end time (HH:MM)"
              type="time"
            />
          </Col>
        </Row>

        <button className="btn-primary w-full" style={{ marginTop: "20px" }}>
          Submit
        </button>
      </CustomForm>
    </Card>
  );
};

export default CreateSlots;
