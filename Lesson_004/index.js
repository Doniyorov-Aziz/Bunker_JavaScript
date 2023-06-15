// Switch case

// let chiroq = "sariq";
// switch (chiroq) {
//   case "qizil":
//     console.log(`to'xta`);
//     break;
//   case "sariq":
//     console.log("tayyorlan");
//     break;
//   case "yashil":
//     console.log("yur");
//     break;
//   default:
//     console.log("xato");
// }

//=============================

// let browser = "Safari";
// switch (browser) {
//   case "Edge":
//     console.log("You have got the Edge");
//     break;
//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     console.log("Okey we support these browsers too");
//     break;
//   default:
//     console.log("We hope that this page looks ok !");
// }

// let browser = "Edge";
// if (browser === "Edge") console.log("You have got the Edge");
// else if (
//   browser === "Chrome" ||
//   browser === "Firefox" ||
//   browser === "Safari" ||
//   browser === "Opera"
// ) {
//   console.log("Okey we support these browsers too");
// } else console.log("We hope that this page looks ok !");

//==============================

// While

// 1 dan 100 gacha bo'lgan sonlarni chiqarish

// let i = 1;
// while (i <= 100) {
//   console.log(i);
//   i += 1;
// }

// let i = 1;
// while (i <= 100) {
//   console.log(i);
//   i += 1;
// }
// console.log(i);  // 101

//==============================

// juft va toq sonlarni chiqarish

// let i = 1;
// while (i <= 100) {
//   if (i % 2 === 0) console.log(`${i} - juft son`);
//   i += 1;
// }

// let i =1
// while(i<=100){
//     if(i%2===1)console.log(`${i} - toq son`);
//     i += 1
// }

// let i = 1;
// while (i <= 100) {
//   if (i % 2 === 1) console.log(`${i} - toq son`);
//   else if (i % 2 === 0) console.log(`${i} - juft son`);
//   i += 1;
// }

//==============================

// do while

// let i = 1;
// do {
//   console.log(i);
//   i += 1;
// } while (i <= 10);

// let i = 1;
// do {
//   console.log(i);
//   i += 1;
// } while (i < 1); // 1
// console.log(i,"tashqarida"); // 2

//==============================

// for
// for(let i = 1 ; condition ; i++)

// toq son topish

// for (let i =1;i<=100;i++){
//     if(i%2===1)console.log(`${i} - toq son`);
// }

// continue vs break

// continue da biz bergan shartga tog'ri kelsa shu qiymatni olmasdan kodni yana boshidan yurgizadi
// break esa to'xtatib qo'yadi

// continue

// for (let i = 1; i <= 10; i++) {
//   if (i == 5) continue;
//   console.log(i);   // 1,2,3,4,6,7,8,9,10
// }

//break

// for (let i = 1; i <= 10; i++) {
//   if (i == 5) break;
//   console.log(i);    // 1,2,3,4
// }

//==============================

// tub son topish

// for (let i = 2; i <= 100; i++) {
//   let sum = 0;
//   for (let j = 1; j < i; j++) {
//     if (i % j === 0) {
//       sum += 1;
//     }
//   }
//   if (sum >= 2) console.log(`${i} - Murakkab son`);
//   else console.log(`${i} - Tub son`);
// }


