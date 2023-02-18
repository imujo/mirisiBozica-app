import baseAxios from "./baseAxios";

export const dateToString = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};

export const fetchFn = (options) => {
  const [loading, setLoading] = useState();
  const [data, setData] = useState();
  const [error, setError] = useState();

  setLoading(true);

  baseAxios
    .request(options)
    .then((res) => setData(res.data.data))
    .catch(setError)
    .finally(() => setLoading(false));

  return { data, loading, error };
};
