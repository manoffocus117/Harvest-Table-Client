import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import Auth_context from "../context/Auth_context";
import axios_secure from "../api/axios_secure";

const useAxiosSecure = () => {
      const navigate = useNavigate();
      const { sign_out } = useContext(Auth_context);

      useEffect(() => {
            const request_interceptor = axios_secure.interceptors.request.use(
                  (config) => {
                        const token = localStorage.getItem("access-token");

                        if (token) {
                              config.headers.Authorization = `Bearer ${token}`;
                        }

                        return config;
                  },
                  (error) => Promise.reject(error),
            );

            const response_interceptor = axios_secure.interceptors.response.use(
                  (response) => response,
                  async (error) => {
                        const status = error.response?.status;

                        if (
                              (status === 401 || status === 403) &&
                              window.location.pathname !== "/login"
                        ) {
                              try {
                                    await sign_out();
                              } finally {
                                    navigate("/login", { replace: true });
                              }
                        }

                        return Promise.reject(error);
                  },
            );

            return () => {
                  axios_secure.interceptors.request.eject(request_interceptor);

                  axios_secure.interceptors.response.eject(
                        response_interceptor,
                  );
            };
      }, [navigate, sign_out]);

      return axios_secure;
};

export default useAxiosSecure;
