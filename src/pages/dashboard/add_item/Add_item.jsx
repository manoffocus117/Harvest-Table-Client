import React from "react";
import Title from "./../../../components/Title";
import Add_item_form from "./sections/Add_item_form";

const Add_item = () => {
      return (
            <>
                  <Title sub_title={"What's new"} title={"Add an item"} />
                  <div className="bg-white p-4 md:p-10 rounded-2xl">
                        <Add_item_form />
                  </div>
            </>
      );
};

export default Add_item;
