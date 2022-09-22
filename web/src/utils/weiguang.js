export const dateOne = (item) => {
  let d = new Date(item);
  let Y = d.getFullYear();
  let M = d.getMonth() + 1;
  let D = d.getDate();
  // 天和月在小于10的时候需要前置加“0”
  if (D < 10) {
    D = "0" + D;
  }
  if (M < 10) {
    M = "0" + M;
  }
  let dates = Y + "." + M + "." + D;
  return dates;
};
