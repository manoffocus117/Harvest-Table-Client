import React from "react";
import { PuffLoader } from "react-spinners";

const Loading = () => {
      return (
            <section className="my-0! mx-auto h-screen flex items-center justify-center">
                  <PuffLoader size={100} color="rgb(251, 170, 0)" />
            </section>
      );
};

export default Loading;
