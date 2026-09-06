import React from "react";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
      return (
            <section className="h-screen">
                  <Helmet>
                        <title>Harvest Table | Dashboard</title>
                  </Helmet>
                  <h1 className="text-5xl">Dashboard</h1>
            </section>
      );
};

export default Dashboard;
