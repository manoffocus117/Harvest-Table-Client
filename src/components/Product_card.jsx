import React from "react";

const Product_card = ({ item }) => {
      const { name, image, recipe, price } = item;

      // handler for add to cart
      const handle_add_to_cart = (food_item) => {
            console.log(food_item);
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
