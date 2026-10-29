import React from "react";
import Title from "../../../components/Title";
import Manage_item_form from "./sections/Manage_item_form";

const Manage_items = () => {
      return (
            <>
                  <Title sub_title={"Hurry Up!"} title={"Manage all items"} />
                  <div className="bg-white p-4 md:p-10 rounded-2xl">
                        <Manage_item_form />
                  </div>
            </>
      );
};

export default Manage_items;
