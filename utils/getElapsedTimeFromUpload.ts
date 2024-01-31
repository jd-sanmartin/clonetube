/**
 * Calculates the elapsed time from a given date to now and returns it as a human-readable string.
 *
 * This function takes a date (either as a string or a Date object), calculates the difference between that date and the current date, and returns a string that represents the elapsed time in a human-readable format
 *
 * @param {_date} string | Date - The date from which to calculate the elapsed time. Can be a string or a Date object.
 * @returns {string} A string representing the elapsed time in a human-readable format.
 * @example getElapsedTimeFromUpload('2021-01-01T00:00:00.000Z') // '3 year ago'
 */
export default function (_date: string | Date) {
  const now = new Date();
  const date = typeof _date === "string" ? new Date(_date) : _date;

  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = day * 365;

  if (diffInSeconds < minute) {
    return `${diffInSeconds} seconds ago`;
  } else if (diffInSeconds < hour) {
    return `${Math.floor(diffInSeconds / minute)} minutes ago`;
  } else if (diffInSeconds < day) {
    return `${Math.floor(diffInSeconds / hour)} hours ago`;
  } else if (diffInSeconds < month) {
    return `${Math.floor(diffInSeconds / day)} days ago`;
  } else if (diffInSeconds < year) {
    return `${Math.floor(diffInSeconds / month)} months ago`;
  } else {
    return `${Math.floor(diffInSeconds / year)} years ago`;
  }
}
