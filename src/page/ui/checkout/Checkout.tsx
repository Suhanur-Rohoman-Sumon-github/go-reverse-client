import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StepIndicator from "../../../componnets/checkout/StepIndicator";
import PersonalInformation from "../../../componnets/checkout/PersonalInformation";
import Shiping from "../../../componnets/checkout/Shiping";
import PaymentConfarmationPage from "../../../componnets/checkout/PaymentConfarmationPage";
import { useAppSelector } from "../../../redux/hook";

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { isSubmitted } = useAppSelector((state) => state.checkout);

  //   const isStripe = useAppSelector((state) => state.payment.isStripe);
  //   const { orderInfo, isSubmitted } = useAppSelector((state) => state.orders);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  //   const handleConfirmOrder = async () => {
  //     createOrder(orderInfo);
  //     setCurrentStep((prevStep) => prevStep + 1);
  //   };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="my-32 w-9/12 mx-auto">
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
        {currentStep > 1 && (
          <button onClick={handlePreviousStep} className="btn-secondary">
            Previous
          </button>
        )}
        {currentStep === 1 && isSubmitted ? (
          <button
            onClick={handleNextStep}
            className="btn-primary px-4 py-2 rounded-md"
          >
            Continue
          </button>
        ) : null}
        {currentStep === 2 && (
          <button
            onClick={handleNextStep}
            className="btn-primary px-4 py-2 rounded-md"
          >
            Continue
          </button>
        )}

        {currentStep === 3 ? (
          <div className="flex justify-between items-center">
            <div>
              <Link to={`/user/my-booking`}>
                <button
                  onClick={handleNextStep}
                  className="btn-primary px-4 py-2 rounded-md"
                >
                  Go to my Booking page
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
