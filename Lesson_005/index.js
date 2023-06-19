// function
//function decloration
// dinamc - bir martta functionni chaqirish
// reusable - bir necha martta functionni chaqirish

// 1

// function sayHello() {
//   console.log("Hello");
// }
// sayHello();

// 2

// function sayHello(fullname) {
//   console.log(`Hello ${fullname}`);
// }

// sayHello("Azizbek");
// sayHello("webbrian");
// sayHello("Ashrafxon");

//======================

// function expression

// 1

// const sayHello = function () {
//     console.log("Hello");
// };

// sayHello()

// 2

// const sayHello = function (fullname) {
//   console.log(`Hello ${fullname}`);
// };
// sayHello("Webbrain");
// sayHello("Digital");

//======================
// Arrow function

// 1

// const sayHello = () => {
//   console.log("Hello");
// };
// sayHello()

// 2

// const sayHello = (fullname) => {
//   console.log(`Hello ${fullname}`);
// };
// sayHello("Javascript");

// 3

// const sayHello = (fullname = "Eshmat") => {
//   console.log(`Hello ${fullname}`);
// };
// sayHello("Webbrain");

// 4

// returnga qaytmaydigan istalgan funcsiya bizga undefined qaytaradi

// const sayHello = (fullname = "Eshmat") => {
//   console.log(`Hello ${fullname} funcsiya ichi`);
// };
// console.log(sayHello());

// const sayHello1 = () => {
//   console.log(`Hello , console`); // Hello , console
// };
// console.log(sayHello1()); // undefined

// const sayHello2 = () => {
//   return "Hello";
// };
// console.log(sayHello2()); // Hello

// exercises

// function findMax(a, b) {
//   if (a > b) return a;
//   else if (a < b) return b;
//   else return "ikkisi teng";
// }
// console.log(findMax(12, 12));

// function findMin(a, b) {
//   if (a > b) return b;
//   else if (b > a) return a;
//   else return "ikkisi teng";
// }
// console.log(findMin(1, 2));

// function power(number, degree) {
//   return number ** degree;
// }
// console.log(power(2, 5));

//========================

// function checkAge(age) {
//   if (age >= 18) return true;
//   else return "Did parents allow you !";
// }
// console.log(checkAge(21));

// function checkAge(age) {
//   return age >= 18 ? true : "Did parents allow you !";
// }
// console.log(checkAge(22));

// function checkAge(age) {
//   return age >= 18 || "Did parents allow you !";
// }
// console.log(checkAge(2));

//========================

// const ask = (question, yes, no) => (confirm(question) ? yes() : no());
// ask(
//   "Do you agree",
//   function () {
//     alert("You agreed !");
//   },
//   function () {
//     alert("You canceled the exucition");
//   }
// );

//========================

// decimal to Binary

// function dtoBi(num) {
//   let result = "";
//   while (num >= 1) {
//     result = (num % 2) + result;
//     num = parseInt(num / 2);
//   }
//   return result;
// }
// console.log(dtoBi(7));

//========================

// 3 ta son berilgan va shularni o'sish tartibida joylashtiradigan funcksiya tuzlsn

// function sort(a, b, c) {
//   let min, med, max;
//   if (a > b && b > c) {
//     max = a;
//     med = b;
//     min = c;
//   } else if (a > b && c > b) {
//     min = b;
//     if (a > c) {
//       max = a;
//       med = c;
//     } else {
//       max = c;
//       med = a;
//     }
//   } else if (b > a && a > c) {
//     max = b;
//     med = a;
//     min = c;
//   } else if (b > a && c > a) {
//     min = a;
//     if (b > c) {
//       max = b;
//       med = c;
//     } else {
//       max = c;
//       med = b;
//     }
//   } else if (c > a && a > b) {
//     max = c;
//     min = b;
//     med = a;
//   } else if (a > c && b > c) {
//     min = c;
//     if (a > b) {
//       max = a;
//       med = b;
//     } else {
//       max = b;
//       med = a;
//     }
//   }
//   return `${min} , ${med} , ${max}`;
// }
// console.log(sort(12, 4, 9));
