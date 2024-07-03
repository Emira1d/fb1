import axios from "axios";

const instance = axios.create({
  baseURL: "http://0.0.0.0:3000/",
  //baseURL: "https://10.0.156.209/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;