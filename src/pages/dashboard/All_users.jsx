import React from "react";
import Title from "./../../components/Title";
import { RiAdminLine, RiDeleteBin2Line, RiGroupLine } from "@remixicon/react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const All_users = () => {
      // loading all users data using tanstack & axios
      const axios_secure = useAxiosSecure();
      const { data: users = [], refetch } = useQuery({
            queryKey: ["users"],
            queryFn: async () => {
                  const res = await axios_secure.get("/users");
                  return res.data;
            },
      });

      const handle_make_admin = (user) => {
            axios_secure.patch(`/users/${user._id}`).then((res) => {
                  if (res.data.modifiedCount > 0) {
                        Swal.fire({
                              icon: "success",
                              title: "success",
                              text: `${user.name} is an admin now`,
                              showConfirmButton: true,
                              confirmButtonColor: "rgb(251, 170, 0)",
                              timer: 1500,
                        });
                        refetch();
                  }
            });
      };

      // handler for delete user
      const handle_delete_user = (user) => {
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
                        axios_secure
                              .delete(`/users/${user._id}`)
                              .then((res) => {
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
                  <Title sub_title={"How many??"} title={"Manage users"} />
                  <div className="bg-white p-4 md:p-10 rounded-2xl">
                        <div className="">
                              <h1 className="text-3xl">
                                    Total users: {users.length}
                              </h1>
                        </div>

                        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mt-5">
                              <table className="table text-center">
                                    <thead className="bg-primary text-white">
                                          <tr>
                                                <th>No.</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Role</th>
                                                <th>Action</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {users.map((user, index) => (
                                                <tr key={user._id}>
                                                      <th>{index + 1}</th>
                                                      <td>{user?.name}</td>
                                                      <td>{user?.email}</td>
                                                      <td>
                                                            {user?.role ===
                                                            "admin" ? (
                                                                  <span
                                                                        className="bg-primary p-2 rounded text-white tooltip tooltip-primary tooltip-right"
                                                                        data-tip={
                                                                              user?.role
                                                                        }
                                                                  >
                                                                        <RiAdminLine />
                                                                  </span>
                                                            ) : (
                                                                  <button
                                                                        onClick={() =>
                                                                              handle_make_admin(
                                                                                    user,
                                                                              )
                                                                        }
                                                                        className="btn bg-primary px-2 text-white tooltip tooltip-primary tooltip-right"
                                                                        data-tip={
                                                                              "User"
                                                                        }
                                                                  >
                                                                        <RiGroupLine />
                                                                  </button>
                                                            )}
                                                      </td>
                                                      <td>
                                                            <button
                                                                  onClick={() =>
                                                                        handle_delete_user(
                                                                              user,
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
                  </div>
            </>
      );
};

export default All_users;
