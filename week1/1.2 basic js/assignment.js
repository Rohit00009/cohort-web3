//asssignment 1
function sum(a, b) {
  let totalSum = a + b;
  return totalSum;
}

let numbers = sum("1", "2");

console.log(numbers);

//assignment 2
function canVote(age) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

let currentAge = canVote(19);
console.log(currentAge);

//assignment 3
//create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male
function usersInfo(arr) {
  //intialise  NEW ARRAY, push to a new array
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].gender === "male" && arr[i].age > 18) {
      arr2.push(arr[i]);
    }
  }
  return arr2;

  //you can use the Filter fucntion inside an array
}

const users = [
  {
    name: "rohit",
    age: 21,
    gender: "male",
  },
  {
    name: "durgesh",
    age: 18,
    gender: "male",
  },
  {
    name: "chetan",
    age: 29,
    gender: "male",
  },
  {
    name: "krish",
    age: 25,
    gender: "male",
  },
  {
    name: "ro",
    age: 21,
    gender: "male",
  },
  {
    name: "kashu",
    age: 21,
    gender: "female",
  },
  {
    name: "sam",
    age: 22,
    gender: "female",
  },
];
console.log(usersInfo(users));
