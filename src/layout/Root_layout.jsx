import React, { use } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Auth_context from "./../context/Auth_context";
import Loading from "./../components/Loading";
import Scroll_to_top from "../components/Scroll_to_top";

const Root_layout = () => {
      const { loading } = use(Auth_context);
      if (loading) {
            return <Loading />;
      }
      return (
            <>
                  <Scroll_to_top />
                  <Header />
                  <Outlet />
                  <Footer />
            </>
      );
};

export default Root_layout;
