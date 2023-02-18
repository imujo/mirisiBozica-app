import useAsync from "./useAsync";
import baseAxios from "../other/baseAxios";

const DEFAULT_OPTIONS = {
  method: "GET",
  headers: { "Content-Type": "application/json" },
};

export default function useFetch(options = {}, dependencies = []) {
  return useAsync(() => {
    return baseAxios
      .request(options ? options : DEFAULT_OPTIONS)
      .then((res) => {
        console.log(res.data.data);
        if (res.data.data) return res.data.data;
        return Promise.reject("ERROR");
      })
      .catch((err) => {
        console.log(err);
        return Promise.reject(err);
      });
  }, dependencies);
}
