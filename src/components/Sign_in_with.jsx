import React, { useContext } from "react";
import { RiGoogleFill } from "@remixicon/react";
import Auth_context from "../context/Auth_context";
import useAxiosPublic from "./../hooks/useAxiosPublic";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const Sign_in_with = () => {
      const { sign_in_with_google } = useContext(Auth_context);
      const axios_public = useAxiosPublic();
      const navigate = useNavigate();

      // handler for google sign in
      const handle_google_sign_in = async () => {
            try {
                  const result = await sign_in_with_google();
                  const user_name = result.user?.displayName;

                  const user_info = {
                        name: result.user?.displayName,
                        email: result.user?.email,
                  };

                  await axios_public.post("/users", user_info);
                  Swal.fire({
                        title: "Success!",
                        text: `Welcome back, ${user_name}`,
                        icon: "success",
                        confirmButtonColor: "rgb(251, 170, 0)",
                  });

                  navigate("/");
            } catch (error) {
                  const error_message = error.code.replace("/auth", "");
                  Swal.fire({
                        title: "Error",
                        text: `Something went wrong : ${error_message}`,
                        icon: "error",
                        confirmButtonColor: "rgb(251, 170, 0)",
                  });
            }
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
