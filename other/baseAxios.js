import axios from "axios";

export default baseAxios = axios.create({
  baseURL: "https://opgplaner-server-production.up.railway.app/",
});
