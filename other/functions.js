import baseAxios from "./baseAxios";

export const dateToString = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};

export const fetchFn = async (options) => {
  let data, error;

  try {
    const response = await baseAxios.request(options);
    data = response.data.data;
    error = null;
    return { data, error };
  } catch (err) {
    data = null;
    error = err.response.data;
    return { data, error };
  }
};
