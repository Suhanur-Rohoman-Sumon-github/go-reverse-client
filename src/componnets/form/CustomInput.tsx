import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TCustomInputProps = {
  type: string;
  name: string;
  placeholder: string;
  label: string;
};

const CustomInput = ({ type, name, placeholder, label }: TCustomInputProps) => {
  return (
    <>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <Input id={name} {...field} type={type} placeholder={placeholder} />
            {error && <p className="mt-2 text-red-500">{error.message}</p>}
          </Form.Item>
        )}
      />
    </>
  );
};

export default CustomInput;
