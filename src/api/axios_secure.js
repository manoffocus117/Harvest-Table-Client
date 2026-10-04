import axios from "axios";

const axios_secure = axios.create({
      baseURL: "http://localhost:3000",
});

export default axios_secure;
