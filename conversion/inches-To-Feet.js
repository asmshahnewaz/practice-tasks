// feet = 12 inches
function inchesToFeet(inches) {
  const feet = inches / 12;
  return feet;
}

const myHeight = 67;

const myHeightInFeet = inchesToFeet(myHeight);
const myHeightInFeets = myHeightInFeet.toFixed(2);
console.log(myHeightInFeets);
