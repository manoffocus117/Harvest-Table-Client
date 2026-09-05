import {
      RiMenu5Line,
      RiShoppingCart2Line,
      RiUser3Line,
} from "@remixicon/react";
import React from "react";
import { Link, NavLink } from "react-router";

const Header = () => {
      const navlink = (
            <>
                  <NavLink to={"/"}>Home</NavLink>
                  <NavLink to={"/"}>Our Menu</NavLink>
                  <NavLink to={"/"}>Out Shop</NavLink>
                  <NavLink to={"/"}>Contact Us</NavLink>
                  <NavLink to={"/"}>Dashboard</NavLink>
            </>
      );
      return (
            <header className="w-full py-2 fixed top-0 z-10">
                  <div className="navbar w-11/12 mx-auto p-0">
                        <div className="navbar-start">
                              <Link to={"/"} className="text-xl uppercase">
                                    Harvest Table
                              </Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                              <menu className="menu menu-horizontal gap-10">
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
