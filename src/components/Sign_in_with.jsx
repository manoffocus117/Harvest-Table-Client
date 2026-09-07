import { RiGoogleFill } from "@remixicon/react";
import React from "react";

const Sign_in_with = () => {
      return (
            <>
                  <span className="divider py-8">or sign in with</span>
                  <button className="btn bg-transparent hover:bg-primary hover:text-white w-full flex items-center justify-center gap-2 border border-primary">
                        <RiGoogleFill /> Continue with Google
                  </button>
            </>
      );
};

export default Sign_in_with;
