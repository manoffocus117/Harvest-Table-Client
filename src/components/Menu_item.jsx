import React from "react";

const Menu_item = ({ item }) => {
      const { name, price, image, recipe } = item;

      return (
            <div className="flex items-center gap-5 shadow p-3 rounded-md">
                  <figure className="rounded-full h-22 w-25">
                        <img
                              src={image}
                              alt={name}
                              className="rounded-full h-full w-full object-cover"
                        />
                  </figure>
                  <div className="space-y-2">
                        <h2 className="text-2xl flex justify-between">
                              {name} --------------------{" "}
                              <span className="text-primary">${price}</span>
                        </h2>
                        <p className="w-10/12">{recipe}</p>
                  </div>
            </div>
      );
};

export default Menu_item;
