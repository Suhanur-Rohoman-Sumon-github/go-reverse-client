import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import CustomForm from "../form/CustomForm";
import CustomInput from "../form/CustomInput";

// Define Zod schema for validation
const personalInfoResolver = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .nonempty("Email is required"),
  firstName: z.string().nonempty("First Name is required"),
  lastName: z.string().nonempty("Last Name is required"),
  address: z.string().nonempty("Address is required"),
  city: z.string().nonempty("City is required"),
  zip: z.string().nonempty("Zip Code is required"),
});

const PersonalInformation = () => {
  const onSubmit = (data: any) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-primary">Contact Information</h1>

      <CustomForm
        onSubmit={onSubmit}
        resolver={zodResolver(personalInfoResolver)}
      >
        <div className="mb-4">
          <CustomInput
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <CustomInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Enter your first name"
          />
        </div>

        <div className="mb-4">
          <CustomInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Enter your last name"
          />
        </div>

        <div className="mb-4">
          <CustomInput
            label="Address"
            name="address"
            type="text"
            placeholder="Enter your address"
          />
        </div>

        <div className="mb-4">
          <CustomInput
            label="City"
            name="city"
            type="text"
            placeholder="Enter your city"
          />
        </div>

        <div className="mb-4">
          <CustomInput
            label="Zip Code"
            name="zip"
            type="text"
            placeholder="Enter your zip code"
          />
        </div>

        <button
          type="submit"
          className="btn-primary px-4 py-2 rounded-md w-full"
        >
          Save
        </button>
      </CustomForm>
    </div>
  );
};

export default PersonalInformation;
