function cubeNumber(number) {
  const cube = number * number * number;
  if (typeof number !== "number") {
    return "invalid input";
  } else if (number <= 0) {
    return "please provide positive number";
  }
  return cube;
}

const cubeOfANumber = cubeNumber(-10);
console.log(cubeOfANumber);
