import React from "react";
import Title from "../../../../components/Title";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout_form from "./Checkout_form";

const stripe_promise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const Payment = () => {
      return (
            <>
                  <Title sub_title={"Pay now"} title={"Payment"} />
                  <Elements stripe={stripe_promise}>
                        <Checkout_form />
                  </Elements>
            </>
      );
};

export default Payment;
