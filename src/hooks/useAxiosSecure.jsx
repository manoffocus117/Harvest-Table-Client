import React from "react";
import axios_instance from "../api/axios_instance";

const useAxiosSecure = () => {
      // request interceptor to add authorization header for every secure call to the api
      axios_instance.interceptors.request.use(
            (config) => {
                  const token = localStorage.getItem("access-token");

                  config.headers.authorization = `Bearer ${token}`;
                  return config;
            },
            (error) => {
                  return Promise.reject(error);
            },
      );
      return axios_instance;
};

export default useAxiosSecure;
