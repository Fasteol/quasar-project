import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/keraton/",
});
export default ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance;
};
export { axiosInstance };
