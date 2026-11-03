import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useCart from "../../../../hooks/useCart";
import useTotalPrice from "../../../../hooks/useTotalPrice";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const Checkout_form = () => {
      const [error, set_error] = useState("");
      const [clientSecret, setClientSecret] = useState("");

      const stripe = useStripe();
      const elements = useElements();

      const [cart] = useCart();
      const total_price = useTotalPrice();

      const axios_secure = useAxiosSecure();

      useEffect(() => {
            axios_secure
                  .post("/payment/create-intent", { price: total_price })
                  .then((res) => {
                        console.log(res.data.clientSecret);
                        setClientSecret(res.data.clientSecret);
                  });
      }, [axios_secure, total_price]);

      const handle_checkout = async (event) => {
            event.preventDefault();

            if (!stripe || !elements) {
                  return;
            }

            const card = elements.getElement(CardElement);
            if (card === null) {
                  return;
            }

            const { error, paymentMethod } = await stripe.createPaymentMethod({
                  type: "card",
                  card,
            });
            if (error) {
                  set_error(error.message);
            } else {
                  console.log("[PaymentMethod]", paymentMethod);
                  set_error("");
            }
      };

      return (
            <div className="w-140 mx-auto bg-white p-10 rounded-2xl">
                  <div className="flex flex-row items-center justify-between mb-10">
                        <h1 className="text-2xl">
                              Total Items : {cart.length}
                        </h1>
                        <h1 className="text-2xl">
                              Total Price : ${total_price}
                        </h1>
                  </div>
                  <span className="divider mb-5"></span>
                  <form onSubmit={handle_checkout}>
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
                              className="border p-4 rounded"
                        />
                        <button
                              disabled={!stripe || !clientSecret}
                              type="submit"
                              className="btn btn-primary text-white mt-4"
                        >
                              Pay
                        </button>
                        <span className="text-red-500 flex mt-2">{error}</span>
                  </form>
            </div>
      );
};

export default Checkout_form;
