import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";

type TCustomDatePickerProps = {
  name: string;
  label?: string;
};

const CustomDatePicker = ({ name, label }: TCustomDatePickerProps) => {
  return (
    <>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <DatePicker {...field} style={{ width: "100%" }} size={"large"} />
            {error && <p className="mt-2 text-red-500">{error.message}</p>}
          </Form.Item>
        )}
      />
    </>
  );
};

export default CustomDatePicker;
