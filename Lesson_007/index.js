// let obj = {
//   name: "webbrian",
//   age: 23,
//   child: {
//     title: "It center",
//     age: 12,
//     child: {
//       major: "Frontend",
//       age: 33,
//     },
//   },
// };

// let sum = 0;

// while (1) {
//   if (obj) sum += obj.age;
//   else break;
//   obj = obj.child;
// }
// console.log(sum);

//=====================

// function sayHi() {
//   console.log("Hi");
// }
// let name = "webbrain";

// let obj = {
//   name,
//   sayHi() {
//     console.log("I said Hi");
//   },
// };
// obj.sayHi();
// console.log(obj.name);

//=====================
// shallow copy - bu ustidan copiy qilish

// let obj = { name: "web", info: { title: 2 } };
// let copy1 = Object.assign({}, obj);
// copy1.name = "webbrain";
// copy1.info.title = 3;
// console.log(copy1, "shallow copy");
// console.log(obj, "real copy");

//=====================
// deep copy - bu har tomonlama copy qilish

// let obj = { name: "web", info: { title: 2 } };
// let copy2 = structuredClone(obj);

// copy2.name = "webbrain";
// copy2.info.title = 3;
// console.log(copy2, "deep copy");
// console.log(obj, "real copy");

//=====================
// Object in object

// let grandFather = {
//   name: "aziz",
//   age: 21,
//   child: {
//     name: "laziz",
//     age: 18,
//     child: {
//       name: "ozod",
//       age: 12,
//     },
//   },
// };

// let getSum = (obj) => {
//   let result = 0;
//   while (obj) {
//     result += obj.age;
//     obj = obj.child;
//   }
//   return result;
// };
// console.log(getSum(grandFather));

//=====================

// let obj1 = { name: "webbrain" };
// let obj2 = obj1;

// obj1.name = "academy";
// console.log(obj2);

//=====================
// garbage collection

// let obj = { name: "webbrian" };
// obj = { title: "academy" };

// obj = "webbrian";
// obj = 1234;

//1

// const obj = {
//   name: "wba",
//   sayHi: function () {
//     console.log("Hi");
//   },
// };
// obj.sayHi()

//2

// const obj = {
//   name: "wba",
//   sayHi: () => {
//     return "Hi";
//   },
// };
// console.log(obj.sayHi());

//3

// const obj = {
//   name: "wba",
//   sayHi() {
//     console.log("Hi");
//   },
// };
// obj.sayHi();

//4

// function sayHi() {
//   console.log("Hi");
// }
// const obj = {
//   name: "wba",
//   ourFunction: sayHi,
// };
// obj.ourFunction();

// this

// let obj = {
//   name: "webbrain",
//   sayHi() {
//     console.log(`Hi ${this.name}`);
//   },
// };
// obj.sayHi();
