import axios from "axios";

const axios_instance = axios.create({
      baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
});

export default axios_instance;
