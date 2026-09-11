import React from "react";

const Title = ({ sub_title, title }) => {
      return (
            <div className="my-25 w-4/12 mx-auto">
                  <h3 className="text-xl text-center text-primary">
                        --- {sub_title} ---
                  </h3>
                  <span className="divider"></span>
                  <h1 className="text-3xl md:text-5xl text-center">{title}</h1>
                  <span className="divider"></span>
            </div>
      );
};

export default Title;
