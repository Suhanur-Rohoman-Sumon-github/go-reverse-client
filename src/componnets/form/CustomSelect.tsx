import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TCustomSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[];
  defaultValue?: string;
  mode?: "multiple " | undefined;
};

const CustomSelect = ({
  label,
  name,
  options,
  defaultValue,
  mode,
}: TCustomSelectProps) => (
  <Controller
    name={name}
    render={({ field, fieldState: { error } }) => (
      <Form.Item label={label}>
        <Select
          defaultValue={defaultValue}
          mode={mode ? "multiple" : undefined}
          {...field}
          style={{ width: "100%" }}
          options={options}
        />
        {error && <p className=" mt-2 text-red-500">{error.message}</p>}
      </Form.Item>
    )}
  />
);

export default CustomSelect;
