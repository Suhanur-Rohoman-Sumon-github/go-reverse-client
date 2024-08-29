/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import CustomForm from "../form/CustomForm";
import CustomInput from "../form/CustomInput";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { updateIsSubmitted } from "../../redux/fetures/checkout/checkout.slice";
import { personalInfoResolver } from "../../zodeSchema/ZodSchemaResolver";

const PersonalInformation = () => {
  const disPatch = useAppDispatch();
  const { isSubmitted } = useAppSelector((state) => state.checkout);
  const onSubmit = (data: any) => {
    disPatch(updateIsSubmitted(true));
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

        {!isSubmitted && (
          <button
            type="submit"
            className="btn-primary px-4 py-2 rounded-md w-full"
          >
            Save
          </button>
        )}
      </CustomForm>
    </div>
  );
};

export default PersonalInformation;
