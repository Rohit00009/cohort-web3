// let x: number = 1;
// console.log(x);

// function greet(firstName: string) {
//   console.log("hello" + firstName);
// }

// greet("rohit");

// function sum(a: number, b: number) {
//   return a + b;
// }
// let ans = sum(4, 5);
// console.log(ans);

// //boolean operation
// function isLegal(age: number) {
//   if (age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isLegal(3));

// //another function as argue
// function run(fn: () => void) {
//   setTimeout(fn, 1000);
// }
// run(function () {
//   console.log("hello");
// });

// //
// function delayCall(anotherFn: (a: string) => void) {
//   setTimeout(anotherFn, 2000);
// }
// function msg(name: string) {
//   console.log("hello " + name);
// }
// delayCall(() => msg("rohit"));

// //object as argue in function

// function greeeting(user: { name: string; age: number }) {
//   console.log("hello " + user.name);
// }

// greeeting({
//   name: "ro",
//   age: 21,
// });

// //interface to define object type
// // interface User {
// //   username: string;
// //   age: number;
// //   id: number;
// // }
// // function ageLegal(user: User) {
// //   if (user.age > 18) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }
// // console.log(
// //   ageLegal({
// //     username: "ro",
// //     age: 21,
// //     id: 2,
// //   })
// // );

// //types let us aggregate data together && also allows u to another operations which interface cant do.
// //union
// type SumInput = string | number;
// function add(a: SumInput, b: SumInput): SumInput {
//   if (typeof a == "number" && typeof b == "number") {
//     return a + b;
//   } else {
//     return String(a) + String(b);
//   }
// }
// console.log(add(5, 10));
// console.log(add("5", 10));
// console.log(add("5", "10"));
// console.log(add("rohit", 5));

// //intersection
// type Employee = {
//   name: string;
//   startDate: Date;
// };
// type Manager = {
//   name: string;
//   department: string;
// };

// type TeamLead = Employee & Manager;

// const t: TeamLead = {
//   name: "rohit",
//   startDate: new Date(),
//   department: "SDE",
// };

// //to make any key optional in object we use ? after key name
// interface Kids {
//   name: string;
//   age: number;
//   address?: {
//     city: string;
//     country: string;
//     pincode: number;
//   };
// }

// //assign
// type user = {
//   name: string;
//   id: number;
// };
// type admin = {
//   name: string;
//   id: number;
// };

// function chat(user: user | admin) {
//   console.log(user.name);
// }

// //arrays as a type
// function getMax(nums: number[]) {
//   let maxNum = -100000;
//   for (let i = 0; i <= nums.length; i++) {
//     if (i > maxNum) {
//       maxNum = nums[i];
//     }
//   }
//   return maxNum;
// }
// getMax([1, 2, 4]);

// //pb
// interface User {
//   firstName: string;
//   lastName: string;
//   age: number;
// }

// function filterUser(users: User[]) {
//   let ans = [];
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].age > 18) {
//       ans.push(users[i]);
//     }
//   }
//   return ans;
// }

// const filteredUsers = filterUser([
//   {
//     firstName: "ro",
//     lastName: "ch",
//     age: 21,
//   },
//   {
//     firstName: "hit",
//     lastName: "van",
//     age: 21,
//   },
// ]);

// console.log(filteredUsers);

//api
//1)pick -> let userOptional = Pick<User, "prop1" | "prop2" | "prop3">

//2)partial -> let userOptionalUpdates = Partial<userOptional>

//3)readonly -> type User = { readonly name: string , readonly age : number}

//4) we use record or map for keyvalue pairs.

//i)records -> gives cleaner type to object. (ts concept)
// syntax -> Record<Keys, ValueType>
// type User = {
//     name: string,
//     age: number, }
// type Users = Record<string , User>;
// const users: Users = {"ro1@" : User , "ro2@" : User}

//ii)map -> another syntax to use key value pairs. (js concept)
//type User = {
// name: string;
// age: number;
// };
//const users = new Map<string, User>(); --> string is key , User is value.
//users.set("ro1@", {name : "rohit" , age: 21});
//users.set("ro2@", {name : "hit" , age: 22});
//const user = users.get("ro1@");

//5)Exclude --> to exclude specific types value and accept several types of inputs
//type EventType = 'click' | 'scroll' | 'mousemove';
//type ExcludeEvent = Exclude<EventType, 'scroll'>;
//const hamdleEvent = (event:ExcludeEvent) => {console.log(`Handling Event : ${event}`)};
//handleEvent('click');
// but cant do scroll event cuz it excluded already!

//type inference in "ZOD"
import { z } from "zod";
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z
    .number()
    .min(18, { message: "You must be at least 18 years old" })
    .optional(),
});

type FinalUserSchema = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody: FinalUserSchema = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return;
  }
  // update database here
  res.json({
    message: "User updated",
  });
});

app.listen(3000);
