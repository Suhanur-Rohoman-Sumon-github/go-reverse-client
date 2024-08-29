import { Elements } from "@stripe/react-stripe-js";
import { updatePaymentType } from "../../redux/fetures/checkout/checkout.slice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import {
  setIsPaymentConfirm,
  setPaymentMethod,
} from "../../redux/fetures/payment/payment.slice";
import { useEffect } from "react";
const Shiping = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
  const dispatch = useAppDispatch();
  const { paymentType } = useAppSelector((state) => state.checkout);
  const { isPaymentConfirm } = useAppSelector((state) => state.payment);

  useEffect(() => {
    dispatch(setIsPaymentConfirm(""));
  }, [dispatch]);
  const paymentOptions = [
    { id: 2, name: "Stripe", deliveryTime: "3-5 Business Days" },
    { id: 3, name: "Paypal", deliveryTime: "3-5 Business Days" },
  ];

  const handlePaymentSelection = (name: string) => {
    dispatch(setPaymentMethod(name));
    dispatch(updatePaymentType(name));
  };

  return (
    <div className="container mx-auto py-8">
      {/* <ScrollToTop /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side: Shipping Information */}
        <div className="p-6 rounded-lg">
          <h1 className="text-2xl font-semibold mb-4">Shipping Information</h1>
          <p className="mb-6">
            Select a payment method for your purchase. Estimated delivery times
            are provided.
          </p>

          <div className="space-y-4">
            {paymentOptions.map((option) => (
              <div
                key={option.id}
                className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer ${
                  paymentType === option.name
                    ? "border-[#4cbfb0]"
                    : "border-gray-300"
                }`}
                onClick={() => handlePaymentSelection(option.name)}
              >
                <div className="flex items-center">
                  <input
                    type="radio"
                    id={option.name}
                    name="payment"
                    value={option.name}
                    className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    checked={paymentType === option.name}
                    onChange={() => handlePaymentSelection(option.name)}
                  />
                  <label
                    htmlFor={option.name}
                    className="ml-2 block text-sm leading-5 text-gray-700"
                  >
                    {option.name}
                  </label>
                </div>
                <div className="text-sm text-gray-500">
                  {option.deliveryTime}
                </div>
              </div>
            ))}
          </div>

          {paymentType === "Stripe" && !isPaymentConfirm && (
            <div className="mt-6 p-4 border rounded-lg bg-gray-100">
              <h2 className="text-xl font-semibold mb-4">Enter Card Details</h2>
              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            </div>
          )}
          {paymentType === "Paypal" && (
            <div className="mt-6 p-4 border rounded-lg bg-gray-100">
              <h2 className="text-xl font-semibold mb-4">
                paypal is coming soon in bangladesh wait for ict minister
              </h2>
            </div>
          )}
        </div>

        {/* Right side: Summary */}
        <div className="">{/* <OrderSumMary /> */}</div>
      </div>
    </div>
  );
};

export default Shiping;
