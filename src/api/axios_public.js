import axios from "axios";

const axios_public = axios.create({
      baseURL: "http://localhost:3000",
});

export default axios_public;
