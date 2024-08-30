import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StepIndicator from "../../../componnets/checkout/StepIndicator";
import PersonalInformation from "../../../componnets/checkout/PersonalInformation";
import Shiping from "../../../componnets/checkout/Shiping";
import PaymentConfarmationPage from "../../../componnets/checkout/PaymentConfarmationPage";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { updateIsSubmitted } from "../../../redux/fetures/checkout/checkout.slice";
import ScrollToTop from "../../../componnets/scroltoTop/ScrollsToTop";
import { useCreateBookingMutation } from "../../../redux/fetures/booking/booking.api";
import { setSlotsId } from "../../../redux/fetures/slots/slots.slice";
import useGetMe from "../../../hooks/useGetMe";

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const data = useGetMe();
  const disPatch = useAppDispatch();
  const { isSubmitted } = useAppSelector((state) => state.checkout);
  const [createBooking] = useCreateBookingMutation(undefined);
  const { date, room, slotIds, user } = useAppSelector(
    (state) => state.bookings
  );

  const { isStripe, isPaymentConfirm } = useAppSelector(
    (state) => state.payment
  );

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleConfirmOrder = async () => {
    const data = {
      date,
      room,
      slots: slotIds,
      user,
    };

    await createBooking(data);

    disPatch(setSlotsId(""));
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  useEffect(() => {
    disPatch(updateIsSubmitted(false));
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [disPatch]);

  return (
    <div className="my-32 w-9/12 mx-auto">
      <ScrollToTop />
      <div className="flex items-center justify-center space-x-4">
        <StepIndicator
          step={1}
          title={"Information"}
          currentStep={currentStep}
        />
        <div className="border-t border-[#4cbfb0] flex-1"></div>
        <StepIndicator step={2} title={"Shiping"} currentStep={currentStep} />
        <div className="border-t border-[#4cbfb0] flex-1 "></div>
        <StepIndicator
          step={3}
          title={"Order confirm"}
          currentStep={currentStep}
        />
      </div>
      <div className="flex justify-center">
        <div className="w-full">
          {currentStep === 1 && <PersonalInformation />}
          {currentStep === 2 && <Shiping />}
          {currentStep === 3 && <PaymentConfarmationPage />}
        </div>
      </div>

      <div className="flex justify-between mt-4">
        {currentStep === 2 && (
          <button onClick={handlePreviousStep} className="btn-secondary">
            Previous
          </button>
        )}
        {currentStep === 3 && (
          <Link to={"/"}>
            <button className="btn-secondary">Back to home</button>
          </Link>
        )}
        {currentStep === 1 && isSubmitted ? (
          <button
            onClick={handleNextStep}
            className="btn-primary px-4 py-2 rounded-md"
          >
            Continue
          </button>
        ) : null}
        {currentStep === 2 && isStripe && isPaymentConfirm && (
          <button
            onClick={handleConfirmOrder}
            className="btn-primary px-4 py-2 rounded-md"
          >
            Confirm Booking
          </button>
        )}

        {currentStep === 3 ? (
          <div className="flex justify-between items-center">
            <div>
              <Link to={`/${data?.role}/dashboard`}>
                <button
                  onClick={handleNextStep}
                  className="btn-primary px-4 py-2 rounded-md"
                >
                  Go to my dashboard page
                </button>
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Checkout;
