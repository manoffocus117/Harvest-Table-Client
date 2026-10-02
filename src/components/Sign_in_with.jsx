import React, { useContext } from "react";
import { RiGoogleFill } from "@remixicon/react";
import Auth_context from "../context/Auth_context";
import useAxiosPublic from "./../hooks/useAxiosPublic";
import { useNavigate } from "react-router";

const Sign_in_with = () => {
      const { sign_in_with_google } = useContext(Auth_context);
      const axios_public = useAxiosPublic();
      const navigate = useNavigate();

      // handler for google sign in
      const handle_google_sign_in = () => {
            sign_in_with_google().then((result) => {
                  const user_info = {
                        name: result.user?.displayName,
                        email: result.user?.email,
                  };
                  axios_public.post("/users", user_info).then((res) => {
                        navigate("/");
                  });
            });
      };

      return (
            <>
                  <span className="divider py-8">or sign in with</span>
                  <button
                        onClick={handle_google_sign_in}
                        className="btn bg-transparent hover:bg-primary hover:text-white w-full flex items-center justify-center gap-2 border border-primary"
                  >
                        <RiGoogleFill /> Continue with Google
                  </button>
            </>
      );
};

export default Sign_in_with;
