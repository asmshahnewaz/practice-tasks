function matchFinder(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    return "please input string type";
  }
  const match = str1.match(str2);
  if (match) {
    return true;
  } else {
    return false;
  }
}
const input = matchFinder("100", "now");
console.log(input);
// "john snow"
