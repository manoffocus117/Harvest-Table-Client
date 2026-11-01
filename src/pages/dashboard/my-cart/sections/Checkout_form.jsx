import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "./../../../../hooks/useAxiosSecure";
import useTotalPrice from "../../../../hooks/useTotalPrice";

const Checkout_form = () => {
      const [error, set_error] = useState("");
      const [clientSecret, setClientSecret] = useState("");

      const stripe = useStripe();
      const elements = useElements();

      const axios_secure = useAxiosSecure();
      const total_price = useTotalPrice();

      useEffect(() => {
            axios_secure
                  .post("/payment", { price: total_price })
                  .then((res) => {
                        console.log(res.data.clientSecret);
                        setClientSecret(res.data.clientSecret);
                  });
      }, [axios_secure, total_price]);

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
                  set_error(error.message);
            } else {
                  console.log("payment method", paymentMethod);
                  set_error("");
            }
      };
      return (
            <>
                  <form
                        onSubmit={handle_submit}
                        className="space-y-10 border p-10 rounded-lg"
                  >
                        <CardElement
                              className="w-100"
                              options={{
                                    style: {
                                          base: {
                                                fontSize: "16px",
                                                color: "#424770",
                                                "::placeholder": {
                                                      color: "#aab7c4",
                                                },
                                                width: "400px",
                                          },
                                          invalid: {
                                                color: "#9e2146",
                                          },
                                    },
                              }}
                        />
                        <p className="text-red-500">{error}</p>
                        <button
                              type="submit"
                              disabled={!stripe || !clientSecret}
                              className="btn btn-primary text-white"
                        >
                              Pay
                        </button>
                  </form>
            </>
      );
};

export default Checkout_form;
