import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://schoolbusform.test",
});

axios.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json";
  return config;
});

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return error.response;
  }
);

export default axios;
