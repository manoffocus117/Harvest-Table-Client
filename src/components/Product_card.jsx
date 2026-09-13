import React from "react";
import Button from "./Button";

const Product_card = ({ item }) => {
      const { name, image, recipe } = item;
      return (
            <div className="card bg-base-100 shadow-sm">
                  <figure>
                        <img src={image} alt={name} />
                  </figure>
                  <div className="card-body space-y-3">
                        <h2 className="card-title">{name}</h2>
                        <p>{recipe}</p>
                        <div className="card-actions justify-center">
                              <Button name={"add to cart"} />
                        </div>
                  </div>
            </div>
      );
};

export default Product_card;
