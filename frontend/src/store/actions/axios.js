import axios from "axios";

const instance = axios.create({
  baseURL: "https://newshop.onrender.com",
  withCredentials: true,
});

export default instance;
