import React from "react";
import Title from "../../components/Title";
import useCart from "./../../hooks/useCart";
import { RiDeleteBin2Line } from "@remixicon/react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useTotalPrice from "../../hooks/useTotalPrice";

const My_cart = () => {
      const [cart, refetch] = useCart();
      const axios_secure = useAxiosSecure();

      // total price
      const [formatted_price] = useTotalPrice();

      const handle_delete = (id) => {
            Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "rgb(251, 170, 0)",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                  if (result.isConfirmed)
                        axios_secure.delete(`/cart/${id}`).then((res) => {
                              if (res.data.deletedCount > 0) {
                                    Swal.fire({
                                          title: "Deleted!",
                                          text: "Your item has been deleted.",
                                          icon: "success",
                                          confirmButtonColor:
                                                "rgb(251, 170, 0)",
                                          timer: 3000,
                                    });
                                    refetch();
                              }
                        });
            });
      };

      return (
            <>
                  <Title sub_title={"My cart"} title={"Wanna add more?"} />
                  <div className="bg-white p-10 rounded-2xl">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                              <h1 className="text-3xl">
                                    Total items: {cart.length}
                              </h1>
                              <h1 className="text-3xl">
                                    Total Price: {formatted_price}
                              </h1>
                              <button className="btn btn-primary text-white">
                                    Pay Now
                              </button>
                        </div>
                        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mt-5">
                              <table className="table text-center">
                                    <thead className="bg-primary text-white">
                                          <tr>
                                                <th>No.</th>
                                                <th>Image</th>
                                                <th>Item Name</th>
                                                <th>Price</th>
                                                <th>Action</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {cart.map((item, index) => (
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
                                                      <td>${item.price}</td>
                                                      <th>
                                                            <button
                                                                  onClick={() =>
                                                                        handle_delete(
                                                                              item._id,
                                                                        )
                                                                  }
                                                                  className="btn bg-red-600 px-2 text-white"
                                                            >
                                                                  <RiDeleteBin2Line />
                                                            </button>
                                                      </th>
                                                </tr>
                                          ))}
                                    </tbody>
                              </table>
                        </div>
                  </div>
            </>
      );
};

export default My_cart;
