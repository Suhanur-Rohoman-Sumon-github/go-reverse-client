import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomForm from "../form/CustomForm";
import CustomInput from "../form/CustomInput";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { updateIsSubmitted } from "../../redux/fetures/checkout/checkout.slice";
import { personalInfoResolver } from "../../zodeSchema/ZodSchemaResolver";
import ScrollToTop from "../scroltoTop/ScrollsToTop";
import { useGetMeQuery } from "../../redux/fetures/auth/authApi";
import Skeletons from "../skeleton/Skeletons";
import { setUser } from "../../redux/fetures/booking/booking.slice";

const PersonalInformation = () => {
  const disPatch = useAppDispatch();
  const { data: userData, isLoading } = useGetMeQuery(undefined);

  const [defaultValues, setDefaultValues] = useState({
    email: undefined,
    firstName: undefined,
    address: undefined,
    city: undefined,
    zip: undefined,
  });

  useEffect(() => {
    if (userData?.data) {
      const { email, name } = userData.data;
      const { street, city, state, zipCode } = userData.data.addresses || {};

      setDefaultValues({
        email: email || undefined,
        firstName: name || undefined,
        address: street || undefined,
        city: city || undefined,
        zip: zipCode || undefined,
      });
    }
  }, [userData]);

  const { isSubmitted } = useAppSelector((state) => state.checkout);

  const onSubmit = (data: any) => {
    disPatch(updateIsSubmitted(true));
    disPatch(setUser(userData?.data?._id));
  };

  if (isLoading) {
    return <Skeletons />;
  }

  return (
    <div className="container mx-auto p-4">
      <ScrollToTop />

      <CustomForm
        onSubmit={onSubmit}
        defaultValues={defaultValues}
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
