import React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const Checkout_form = () => {
      const stripe = useStripe();
      const elements = useElements();

      const handle_submit = async (event) => {
            event.preventDefault();

            if (!stripe || !elements) {
                  return;
            }

            const card = elements.getElement(CardElement);

            if (!card) {
                  return;
            }

            const { error, paymentMethod } = await stripe.createPaymentMethod({
                  type: "card",
                  card,
            });

            if (error) {
                  console.log("payment error", error);
            } else {
                  console.log("payment method", paymentMethod);
            }
      };
      return (
            <>
                  <form onSubmit={handle_submit}>
                        <CardElement
                              options={{
                                    style: {
                                          base: {
                                                fontSize: "16px",
                                                color: "#424770",
                                                "::placeholder": {
                                                      color: "#aab7c4",
                                                },
                                          },
                                          invalid: {
                                                color: "#9e2146",
                                          },
                                    },
                              }}
                        />
                        <button
                              type="submit"
                              disabled={!stripe}
                              className="btn btn-primary text-white"
                        >
                              Pay
                        </button>
                  </form>
            </>
      );
};

export default Checkout_form;
