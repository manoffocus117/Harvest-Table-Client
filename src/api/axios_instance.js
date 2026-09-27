import axios from "axios";

const axios_instance = axios.create({
      baseURL: "https://harvest-table-server.vercel.app/",
});

export default axios_instance;
