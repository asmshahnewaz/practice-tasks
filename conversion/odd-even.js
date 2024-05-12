function oddEven(number) {
  const reminder = number % 2;
  if (reminder === 0) {
    return true;
  } else {
    return false;
  }
}

const myNumber = oddEven(112);
console.log(myNumber);
const herNumber = oddEven(99);
console.log(herNumber);
