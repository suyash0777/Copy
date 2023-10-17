import axios from "axios";

const instance = axios.create({
  baseURL: "https://newshop-b4ff.onrender.com",
  withCredentials: true,
});

export default instance;
