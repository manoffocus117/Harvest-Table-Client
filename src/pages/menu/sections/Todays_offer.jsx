import React from "react";
import Menu_item from "./../../../components/Menu_item";
import Title from "../../../components/Title";

const Todays_offer = ({ todays_offer }) => {
      return (
            <section>
                  <Title title={"Today's offer"} sub_title={"Don't miss"} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                        {todays_offer.map((item) => (
                              <Menu_item key={item._id} item={item} />
                        ))}
                  </div>
            </section>
      );
};

export default Todays_offer;
