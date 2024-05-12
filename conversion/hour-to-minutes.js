// 1 hour = 60 minutes
function hourToMinutes(hour) {
  const minutes = hour * 60;
  return minutes;
}

const givenHour = 10;
const covertedToMinutes = hourToMinutes(givenHour);
console.log(covertedToMinutes, "minutes");
