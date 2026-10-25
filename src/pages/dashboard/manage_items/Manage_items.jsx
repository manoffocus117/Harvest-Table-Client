import React from "react";
import Title from "../../../components/Title";
import useMenu from "../../../hooks/useMenu";
import { RiDeleteBin2Line, RiEditLine } from "@remixicon/react";

const Manage_items = () => {
      const [menu] = useMenu();
      console.log(menu);

      const handle_edit_menu_item = () => {};
      const handle_delete_menu_item = () => {};
      return (
            <>
                  <Title sub_title={"Hurry Up!"} title={"Manage all items"} />
                  <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mt-5">
                        <table className="table text-center">
                              <thead className="bg-primary text-white">
                                    <tr>
                                          <th>No.</th>
                                          <th>Image</th>
                                          <th>Item Name</th>
                                          <th>Category</th>
                                          <th>Price</th>
                                          <th>Actions</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {menu.map((item, index) => (
                                          <tr key={item._id}>
                                                <th>{index + 1}</th>
                                                <td>
                                                      <div className="avatar">
                                                            <div className="mask mask-circle h-12 w-12">
                                                                  <img
                                                                        src={
                                                                              item.image
                                                                        }
                                                                        alt="Avatar Tailwind CSS Component"
                                                                  />
                                                            </div>
                                                      </div>
                                                </td>
                                                <td>{item.name}</td>
                                                <td className="capitalize">
                                                      {item.category}
                                                </td>
                                                <td className="font-semibold">
                                                      ${item.price}
                                                </td>
                                                <td className="space-x-3">
                                                      <button
                                                            onClick={() =>
                                                                  handle_edit_menu_item(
                                                                        item._id,
                                                                  )
                                                            }
                                                            className="btn bg-primary px-2 text-white"
                                                      >
                                                            <RiEditLine />
                                                      </button>
                                                      <button
                                                            onClick={() =>
                                                                  handle_delete_menu_item(
                                                                        item._id,
                                                                  )
                                                            }
                                                            className="btn bg-red-600 px-2 text-white"
                                                      >
                                                            <RiDeleteBin2Line />
                                                      </button>
                                                </td>
                                          </tr>
                                    ))}
                              </tbody>
                        </table>
                  </div>
            </>
      );
};

export default Manage_items;
