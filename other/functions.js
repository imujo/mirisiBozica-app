import baseAxios from "./baseAxios";

export const dateToString = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};

export const dateAddDays = (date, days) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
};

export const timeToNumber = (time) => {
  if (!time) return "";
  const [hours, minutes, _] = time.split(":");

  return parseInt(hours) + parseInt(minutes) / 60;
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
