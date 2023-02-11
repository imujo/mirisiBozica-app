import useAsync from "./useAsync";
import axios from "axios";

const serverFetch = axios.create({
  baseURL: "http://192.168.8.102:3001",
});

const DEFAULT_OPTIONS = {
  method: "GET",
  headers: { "Content-Type": "application/json" },
};

export default function useFetch(options = {}, dependencies = []) {
  return useAsync(() => {
    return serverFetch
      .request(options ? options : DEFAULT_OPTIONS)
      .then((res) => {
        if (res.data?.data) return res.data.data;
        return Promise.reject("ERROR");
      })
      .catch((err) => {
        console.log(err);
        return Promise.reject(err);
      });
  }, dependencies);
}
