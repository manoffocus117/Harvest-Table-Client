import {
      RiFacebookCircleFill,
      RiInstagramLine,
      RiTwitterFill,
} from "@remixicon/react";
import React from "react";

const Footer = () => {
      return (
            <footer className="flex flex-col sm:flex-row items-start">
                  <div className="bg-[#1F2937] w-full md:w-1/2 py-20 text-white flex flex-col items-center justify-center gap-3">
                        <h3 className="text-3xl mb-3">Contact Us</h3>
                        <p>Somewhere in Bangladesh</p>
                        <p>+88 01234567890</p>
                        <p>Sat - Thus: 8:00AM - 10:00PM</p>
                        <p>Fri : Close</p>
                  </div>
                  <div className="bg-[#111827] w-full md:w-1/2 pt-20 pb-24 text-white flex flex-col items-center justify-center gap-10">
                        <h3 className="text-3xl mb-3">Follow Us</h3>
                        <p>Join us on social media</p>
                        <figure className="flex items-center justify-center gap-10">
                              <RiFacebookCircleFill />
                              <RiInstagramLine />
                              <RiTwitterFill />
                        </figure>
                  </div>
            </footer>
      );
};

export default Footer;
