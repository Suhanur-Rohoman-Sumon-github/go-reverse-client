/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import { useCreatePaymentIntentMutation } from "../../redux/fetures/payment/payment.api";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  setIsPaymentConfirm,
  setPaymentMethod,
} from "../../redux/fetures/payment/payment.slice";

const CheckoutForm = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [isPaymentIntent, setIsPaymentIntent] = useState(false);
  const { isPaymentConfirm, price } = useAppSelector((state) => state.payment);

  const dispatch = useAppDispatch();
  const stripe = useStripe();
  const elements = useElements();

  const [createPaymentIntent] = useCreatePaymentIntentMutation();

  useEffect(() => {
    if (!isPaymentIntent) {
      createPaymentIntent({ price })
        .unwrap()
        .then((res: any) => {
          setClientSecret(res.data.clientSecret);
          setIsPaymentIntent(true);
          dispatch(setPaymentMethod("Stripe"));
        });
    }
  }, [price, isPaymentIntent, createPaymentIntent, dispatch]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const tostId = toast.loading(
      "please wait few second we proceed your payment"
    );
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.error("[error]", error);
      return;
    }

    const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: "mr:sumon",
        },
      },
    });

    if (paymentIntent?.status === "succeeded") {
      toast.success("Your payment was successful!", { id: tostId });
      dispatch(setIsPaymentConfirm("Confirm"));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full my-8">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#0069ff",
              "::placeholder": {
                color: "",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {!isPaymentConfirm && (
        <button
          className="btn-primary w-full mt-8"
          type="submit"
          disabled={!stripe}
        >
          Purchase
        </button>
      )}
    </form>
  );
};

export default CheckoutForm;
