import React from "react";

const Button = ({ name }) => {
      return (
            <button className="cursor-pointer px-4 py-2 mt-10 rounded-md border-b-2 hover:bg-primary hover:text-white">
                  {name}
            </button>
      );
};

export default Button;
