//normal
const arr1 = [1, 2, 3, 4, 5];
const newArr1 = [];
for (let i = 0; i < arr1.length; i++) {
  newArr1.push(arr1[i] * 5);
}
console.log(newArr1);

//MAP
const arr = [1, 2, 3, 4, 5];
function transform(i) {
  return i * 2;
}
const ans = arr.map(transform);
console.log(ans);

//or

const ans2 = arr.map(function (i) {
  return i * 3;
});
console.log(ans2);
