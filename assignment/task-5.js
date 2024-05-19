function canPay(arr, number) {
  let myMoneyTotal = 0;
  for (let i = 0; i < arr.length; i++) {
    myMoneyTotal += arr[i];
  }
  if (myMoneyTotal >= number) {
    return true;
  } else if (myMoneyTotal.length === 0) {
    return "please type valid numbers";
  } else {
    return false;
  }
}
const canBuy = canPay([4, 5], 10);
console.log(canBuy);
