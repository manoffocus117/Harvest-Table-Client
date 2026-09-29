import axios from "axios";

const axios_instance = axios.create({
      baseURL: "https://harvest-table-server.vercel.app",
      // baseURL: "http://localhost:3000",
});

export default axios_instance;
