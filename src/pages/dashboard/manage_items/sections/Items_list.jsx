import React, { useState } from "react";
import Title from "../../../../components/Title";
import useMenu from "../../../../hooks/useMenu";
import { RiDeleteBin2Line, RiEditLine } from "@remixicon/react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router";

const Items_list = () => {
      const [menu, refetch] = useMenu();
      const [category, set_category] = useState("all");

      const axios_secure = useAxiosSecure();

      const filtered_menu =
            category === "all"
                  ? menu
                  : menu.filter((item) => item.category === category);

      const handle_update_menu_item = () => {};
      const handle_delete_menu_item = (item) => {
            Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "rgb(251, 170, 0)",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!",
            }).then(async (result) => {
                  if (result.isConfirmed) {
                        const res = await axios_secure.delete(
                              `/menu/${item._id}`,
                        );

                        if (res.data.deletedCount > 0) {
                              Swal.fire({
                                    title: "Deleted!",
                                    text: "Your item has been deleted.",
                                    icon: "success",
                                    showConfirmButton: false,
                                    timer: 2000,
                              });
                              // refetching data for the ui
                              refetch();
                        }
                  }
            });
      };
      return (
            <>
                  <Title sub_title={"Hurry Up!"} title={"Manage all items"} />
                  <div className="bg-white p-4 md:p-10 rounded-2xl">
                        <div className="flex justify-between items-center">
                              <h2 className="text-3xl">
                                    Total Items: {filtered_menu.length}
                              </h2>
                              <div className="flex flex-col items-end gap-2">
                                    <legend className="text-sm">Sort by</legend>
                                    <select
                                          name="category"
                                          value={category}
                                          onChange={(e) =>
                                                set_category(e.target.value)
                                          }
                                          className="w-37 select select-sm outline-none"
                                    >
                                          <option value="all">All</option>
                                          <option value="dessert">
                                                Desserts
                                          </option>
                                          <option value="pizza">Pizza</option>
                                          <option value="salad">Salad</option>
                                          <option value="soup">Soup</option>
                                    </select>
                              </div>
                        </div>
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
                                          {filtered_menu.map((item, index) => (
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
                                                            <Link
                                                                  to={`/dashboard/manage-items/update-item/${item._id}`}
                                                                  data-tip="Update Item"
                                                                  className="btn bg-primary px-2 text-white tooltip"
                                                            >
                                                                  <RiEditLine />
                                                            </Link>
                                                            <button
                                                                  data-tip="Delete Item"
                                                                  onClick={() =>
                                                                        handle_delete_menu_item(
                                                                              item,
                                                                        )
                                                                  }
                                                                  className="btn bg-red-600 px-2 text-white tooltip"
                                                            >
                                                                  <RiDeleteBin2Line />
                                                            </button>
                                                      </td>
                                                </tr>
                                          ))}
                                    </tbody>
                              </table>
                        </div>
                  </div>
            </>
      );
};

export default Items_list;
