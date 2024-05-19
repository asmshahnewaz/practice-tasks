function findAddress(obj) {
  if (typeof obj != "object") {
    return "please input valid info";
  } else {
    const street = obj.street || "--";
    const house = obj.house || "--";
    const society = obj.society || "--";
    return street + "," + house + "," + society;
  }
}

const object = {
  street: 10,
  house: "15A",
  society: "Earth Perfect",
};
const address = findAddress(object);
console.log(address);
