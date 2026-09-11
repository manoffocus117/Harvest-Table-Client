import React from "react";

const Menu_item = ({ item }) => {
      const { name, price, image, recipe } = item;

      return (
            <div className="grid grid-cols-5 grid-rows-2 gap-2 items-center shadow p-3 rounded-md">
                  <figure className="rounded-full h-20 md:h-25 w-20 md:w-25 col-span-2 md:col-span-1 md:row-span-2">
                        <img
                              src={image}
                              alt={name}
                              className="rounded-full h-full w-full object-cover"
                        />
                  </figure>
                  <h2 className="col-span-3 md:col-span-4 text-2xl md:flex md:justify-between">
                        {name} - <span className="text-primary">${price}</span>
                  </h2>
                  <p className="col-span-5 md:col-span-4 md:w-10/12">
                        {recipe}
                  </p>
            </div>
      );
};

export default Menu_item;
