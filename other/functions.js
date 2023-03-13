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

export const timeStringToDate = (timeString) => {
  if (!timeString) return undefined;
  const [hours, minutes, _] = timeString.split(":");

  return new Date(0, 0, 0, hours, minutes);
};

export const dateToTimeFormat = (date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  let hoursString = "";
  let minutesString = "";
  if (hours < 10) {
    hoursString = "0" + hours;
  } else {
    hoursString = "" + hours;
  }

  if (minutes < 10) {
    minutesString = "0" + minutes;
  } else {
    minutesString = "" + minutes;
  }

  return hoursString + ":" + minutesString;
};

export const dateToUTC = (date) => {
  let newDate = new Date();
  newDate.setUTCHours(date.getHours());
  newDate.setUTCMinutes(date.getMinutes());

  return newDate;
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

// calculates position of events to enable overlapping events
// https://gist.github.com/aholachek/ce7cd491546a88cbc9c4
export function makeLayout(events, hourHeight) {
  if (!events) return [];
  events.forEach(function (d) {
    if (!d.dateObj) {
      d.dateObj = {
        start: timeToNumber(d.start_time),
        end: timeToNumber(d.end_time),
      };
    }
    if (!d.layout) {
      d.layout = {};
    }
  });

  //this needs to be sorted by time
  events.sort(function (a, b) {
    if (a.dateObj.start < b.dateObj.start) return -1;
    else if (b.dateObj.start < a.dateObj.start) return 1;
  });

  //add top and height vals
  events.forEach(function (d) {
    d.layout.top = d.dateObj.start * hourHeight;
    d.layout.height = hourHeight * (d.dateObj.end - d.dateObj.start);
  });

  events.forEach(function (d) {
    d.layout.earlyOverlap = events.filter(function (c) {
      if (c == d) return false;
      if (
        c.dateObj.start < d.dateObj.start &&
        c.dateObj.end > d.dateObj.start
      ) {
        return true;
      } else if (d.dateObj.start == c.dateObj.start) {
        if (c.dateObj.end > d.dateObj.end) return true;
        else if (c.dateObj.end === d.dateObj.end && c.id < d.id) return true;
      }
    });

    d.layout.lateOverlap = events.filter(function (c) {
      if (c == d) return false;
      if (
        c.dateObj.start > d.dateObj.start &&
        c.dateObj.start < d.dateObj.end
      ) {
        return true;
      } else if (d.dateObj.start == c.dateObj.start) {
        if (c.dateObj.end < d.dateObj.end) return true;
        else if (c.dateObj.end === d.dateObj.end && c.id > d.id) return true;
      }
    });
  });

  //what is the longest consecutive set of items that are to each item's right?
  //this will help determine the width
  events.forEach(function (d) {
    var mostEntries = 0;

    function getLater(d, num) {
      //we've reached the end of a branch
      if (!d.layout.lateOverlap.length) {
        if (num > mostEntries) mostEntries = num;
      } else {
        num += 1;
        d.layout.lateOverlap.forEach(function (d) {
          return getLater(d, num);
        });
      }
    }
    getLater(d, 0);

    d.layout.maxRight = mostEntries;
  });

  //finally, calculate the widths
  events.forEach(function (d) {
    function getWidthAndPosition(d) {
      var beforeWidth, immediatelyBefore;

      if (!d.layout.earlyOverlap.length) {
        beforeWidth = 0;
      } else {
        //because the sort might not be perfect
        immediatelyBefore = (function () {
          var farthestRight;
          d.layout.earlyOverlap.forEach(function (item) {
            if (
              !farthestRight ||
              item.layout.left > farthestRight.layout.left
            ) {
              farthestRight = item;
            }
          });
          return farthestRight;
        })();

        beforeWidth =
          immediatelyBefore.layout.left + immediatelyBefore.layout.width + 1;
      }

      //divide the remaining width equally between this block
      //and the later overlapping ones
      d.layout.width = (100 - beforeWidth) / (1 + d.layout.maxRight);
      d.layout.left = beforeWidth;

      d.layout.lateOverlap.forEach(function (l) {
        if (l.layout.earlyOverlap[l.layout.earlyOverlap.length - 1] == d) {
          getWidthAndPosition(l);
        }
      });
    } //end getWidth

    //it's a top level
    if (!d.layout.earlyOverlap.length) {
      getWidthAndPosition(d);
    }
  });

  return events;
}
