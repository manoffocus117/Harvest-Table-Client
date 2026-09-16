import React from "react";
import Button from "./Button";

const Product_card = ({ item }) => {
      const { name, image, recipe, price } = item;
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
                              <Button name={"add to cart"} />
                        </div>
                  </div>
            </div>
      );
};

export default Product_card;
