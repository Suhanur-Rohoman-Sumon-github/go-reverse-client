import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TCustomSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[];
  defaultValue: string;
};

const CustomSelect = ({
  label,
  name,
  options,
  defaultValue,
}: TCustomSelectProps) => (
  <Controller
    name={name}
    render={({ field, fieldState: { error } }) => (
      <Form.Item label={label}>
        <Select
          defaultValue={defaultValue}
          {...field}
          style={{ width: "100%" }}
          options={options}
        />
        {error && <p>{error.message}</p>}
      </Form.Item>
    )}
  />
);

export default CustomSelect;
