import React, { useContext } from "react";
import Auth_context from "./../context/Auth_context";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";

const Product_card = ({ item }) => {
      const { user } = useContext(Auth_context);
      const { name, image, recipe, price } = item;
      const navigate = useNavigate();
      const location = useLocation();

      // handler for add to cart
      const handle_add_to_cart = (food_item) => {
            console.log(food_item);
            if (user && user.email) {
                  // send cart item to the database
                  Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "Your item is added to the cart",
                        confirmButtonColor: "rgb(251, 170, 0)",
                  });
            } else {
                  Swal.fire({
                        title: "Not found",
                        text: "You are not logged in. Please login",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "rgb(251, 170, 0)",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Take to the login page",
                  }).then((result) => {
                        if (result.isConfirmed)
                              navigate("/login", {
                                    state: { from: location },
                                    replace: true,
                              });
                  });
            }
      };
      return (
            <div className="card bg-base-100 shadow-sm hover:scale-105">
                  <figure>
                        <img src={image} alt={name} />
                  </figure>
                  <div className="card-body space-y-3">
                        <h2 className="card-title justify-between">
                              {name}{" "}
                              <span className="badge badge-primary text-white">
                                    $ {price}
                              </span>
                        </h2>
                        <p>{recipe}</p>
                        <div className="card-actions justify-center">
                              <button
                                    onClick={() => handle_add_to_cart(item)}
                                    className="btn bg-transparent shadow-none border-0 border-b-2 border-black px-4 py-2 rounded-md capitalize hover:bg-primary hover:text-white hover:border-none"
                              >
                                    Add to cart
                              </button>
                        </div>
                  </div>
            </div>
      );
};

export default Product_card;
