function isleapYear(year) {
  const reminder = year % 4;
  if (reminder === 0) {
    return true;
  } else {
    return false;
  }
}

const myYear = isleapYear(2024);
console.log(myYear, "this is leap year");
const herYear = isleapYear(2025);
console.log(herYear, "this is not leap year");
