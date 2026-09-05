import {
      RiMenu5Line,
      RiShoppingCart2Line,
      RiUser3Line,
} from "@remixicon/react";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";

import Logo from "../assets/logo.png";

const Header = () => {
      // state for scroll effect
      const [is_scrolled, set_is_scrolled] = useState(false);

      // handle scroll effect
      useEffect(() => {
            const handle_scroll = () => {
                  set_is_scrolled(window.scrollY > 50);
            };
            window.addEventListener("scroll", handle_scroll);
            return () => window.removeEventListener("scroll", handle_scroll);
      }, []);

      const navlink = (
            <>
                  <NavLink to={"/"}>Home</NavLink>
                  <NavLink to={"/our-menu"}>Our Menu</NavLink>
                  <NavLink to={"/our-shop"}>Our Shop</NavLink>
                  <NavLink to={"/contact-us"}>Contact Us</NavLink>
                  <NavLink to={"/dashboard"}>Dashboard</NavLink>
            </>
      );
      return (
            <header
                  className={`${is_scrolled ? "navbar-blur" : ""}  w-full py-2 fixed top-0 z-10`}
            >
                  <div className="navbar w-11/12 mx-auto p-0">
                        <div className="navbar-start">
                              <Link
                                    to={"/"}
                                    className="text-xl font-medium flex items-end gap-2"
                              >
                                    <img
                                          src={Logo}
                                          alt="logo"
                                          className="w-12 h-12"
                                    />
                                    <h3>Harvest Table</h3>
                              </Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                              <menu className="menu menu-horizontal items-center gap-10">
                                    {navlink}
                              </menu>
                        </div>
                        <div className="navbar-end gap-3 lg:gap-0">
                              {/* user pri=ofile & shopping cart */}
                              <div className="flex gap-3">
                                    {/* shopping cart */}
                                    <div className="dropdown dropdown-end">
                                          <div
                                                tabIndex={0}
                                                role="button"
                                                className="btn btn-ghost btn-circle bg-base-300"
                                          >
                                                <RiShoppingCart2Line />
                                          </div>
                                          <div
                                                tabIndex={0}
                                                className="card card-sm dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
                                          >
                                                <div className="card-body">
                                                      <span className="text-lg font-bold">
                                                            8 Items
                                                      </span>
                                                      <span className="text-info">
                                                            Subtotal: $999
                                                      </span>
                                                      <div className="card-actions">
                                                            <button className="btn btn-primary btn-block">
                                                                  View cart
                                                            </button>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    {/* user profile */}
                                    <div className="dropdown dropdown-end">
                                          <div
                                                tabIndex={0}
                                                role="button"
                                                className="btn btn-ghost btn-circle bg-base-300"
                                          >
                                                <RiUser3Line />
                                          </div>
                                          <menu
                                                tabIndex={-1}
                                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                                          >
                                                <li>
                                                      <a className="justify-between">
                                                            Profile
                                                            <span className="badge">
                                                                  New
                                                            </span>
                                                      </a>
                                                </li>
                                                <li>
                                                      <a>Settings</a>
                                                </li>
                                                <li>
                                                      <a>Logout</a>
                                                </li>
                                          </menu>
                                    </div>
                              </div>
                              {/* mobile nav menu */}
                              <div className="dropdown dropdown-end lg:hidden">
                                    <div
                                          tabIndex={0}
                                          role="button"
                                          className="btn btn-ghost btn-circle bg-base-300"
                                    >
                                          <RiMenu5Line className="rounded-full" />
                                    </div>
                                    <menu
                                          tabIndex={-1}
                                          className="menu menu-sm gap-3 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                                    >
                                          {navlink}
                                    </menu>
                              </div>
                        </div>
                  </div>
            </header>
      );
};

export default Header;
