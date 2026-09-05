import React from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
      return (
            <section className="h-screen">
                  <Helmet>
                        <title>Harvest Table | Home</title>
                  </Helmet>
                  <h1 className="text-5xl">Home Page</h1>
            </section>
      );
};

export default Home;
