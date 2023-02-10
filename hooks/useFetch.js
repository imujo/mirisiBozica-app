import useAsync from "./useAsync";
import axios from "axios";

const DEFAULT_OPTIONS = {
  method: "GET",
  headers: { "Content-Type": "application/json" },
};

export default function useFetch(options = {}, dependencies = []) {
  return useAsync(() => {
    return axios
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
