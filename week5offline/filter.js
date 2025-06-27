//filtering
//filter the even umbers from array
//normal
const arr = [1, 2, 3, 4, 5];
const newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    newArr.push(arr[i]);
  }
}
console.log(newArr);

//filter
const ans = arr.filter(function (n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
});
console.log(ans);

const arr1 = ["rohit", "ro", "didi", "papaji", "mummyji"];

const ans1 = arr1.filter((n) => {
  if (n.startsWith("r")) {
    return true;
  } else {
    return false;
  }
});
console.log(ans1);

//
function customMap(arr, transformFn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(transformFn(arr[i], i, arr)); //This is exactly how .map() passes arguments too: (value, index, array)
  }
  return result;
}

const numbers = [1, 2, 3, 4];
const squared = customMap(numbers, function (num) {
  return num * num;
});

console.log(squared);
