import React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useCart from "../../../../hooks/useCart";
import useTotalPrice from "../../../../hooks/useTotalPrice";

const Checkout_form = () => {
      const stripe = useStripe();
      const elements = useElements();

      const [cart] = useCart();
      const total_price = useTotalPrice();

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
                  console.log("[error]", error);
            } else {
                  console.log("[PaymentMethod]", paymentMethod);
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
                              disabled={!stripe}
                              type="submit"
                              className="btn btn-primary text-white mt-4"
                        >
                              Pay
                        </button>
                  </form>
            </div>
      );
};

export default Checkout_form;
