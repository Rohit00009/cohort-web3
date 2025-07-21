"use strict";
let x = 1;
console.log(x);
function greet(firstName) {
    console.log("hello" + firstName);
}
greet("rohit");
function sum(a, b) {
    return a + b;
}
let ans = sum(4, 5);
console.log(ans);
//boolean operation
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(3));
//another function as argue
function run(fn) {
    setTimeout(fn, 1000);
}
run(function () {
    console.log("hello");
});
//
function delayCall(anotherFn) {
    setTimeout(anotherFn, 2000);
}
function msg(name) {
    console.log("hello " + name);
}
delayCall(() => msg("rohit"));
//object as argue in function
function greeeting(user) {
    console.log("hello " + user.name);
}
greeeting({
    name: "ro",
    age: 21,
});
function add(a, b) {
    if (typeof a == "number" && typeof b == "number") {
        return a + b;
    }
    else {
        return String(a) + String(b);
    }
}
console.log(add(5, 10));
console.log(add("5", 10));
console.log(add("5", "10"));
console.log(add("rohit", 5));
const t = {
    name: "rohit",
    startDate: new Date(),
    department: "SDE",
};
function chat(user) {
    console.log(user.name);
}
//arrays as a type
function getMax(nums) {
    let maxNum = -100000;
    for (let i = 0; i <= nums.length; i++) {
        if (i > maxNum) {
            maxNum = nums[i];
        }
    }
    return maxNum;
}
getMax([1, 2, 4]);
function filterUser(users) {
    let ans = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].age > 18) {
            ans.push(users[i]);
        }
    }
    return ans;
}
const filteredUsers = filterUser([
    {
        firstName: "ro",
        lastName: "ch",
        age: 21,
    },
    {
        firstName: "hit",
        lastName: "van",
        age: 21,
    },
]);
console.log(filteredUsers);
