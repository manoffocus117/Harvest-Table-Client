import React from "react";

const Button = ({ name }) => {
      return (
            <button className="btn bg-transparent shadow-none border-0 border-b-2 border-black px-4 py-2 rounded-md capitalize hover:bg-primary hover:text-white hover:border-none">
                  {name}
            </button>
      );
};

export default Button;
