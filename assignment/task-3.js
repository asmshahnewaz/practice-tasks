function sortMaker(arr) {
  if (!Array.isArray(arr) || arr.length !== 2) {
    return ["undefined"];
  }

  const [first, second] = arr;

  if (first < 0 || second < 0) {
    return ["invalid input"];
  } else if (first === second) {
    return ["equal"];
  } else {
    return [Math.min(first, second), Math.max(first, second)];
  }
}
const sort = sortMaker([2, 2]);
console.log(sort);
