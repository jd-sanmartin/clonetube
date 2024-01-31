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
