function isItHoliday(date) {
  const holidays = ["2020-01-01", "2020-05-25"];
  return holidays.some(
    (holiday) =>
      new Date(holiday).getMonth() + "-" + new Date(holiday).getDate() ===
      date.getMonth() + "-" + date.getDate()
  );
}

console.log(isItHoliday(new Date("2020-05-25")));
