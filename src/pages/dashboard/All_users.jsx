import React from "react";
import Title from "./../../components/Title";
import { RiDeleteBin2Line } from "@remixicon/react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const All_users = () => {
      // loading all users data using tanstack & axios
      const axios_secure = useAxiosSecure();
      const { data: users = [] } = useQuery({
            queryKey: ["users"],
            queryFn: async () => {
                  const res = await axios_secure.get("/users");
                  return res.data;
            },
      });
      console.log(users);
      // handler for delete user
      const handle_delete_user = (id) => {};
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
                                                      <td>{user?.role}</td>
                                                      <th>
                                                            <button
                                                                  onClick={() =>
                                                                        handle_delete_user()
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

export default All_users;
