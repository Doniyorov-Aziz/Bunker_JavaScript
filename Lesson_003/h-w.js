// let a = 1,
//   b = 1;
// let c = a++;
// let d = ++b;
// console.log(c); // 1
// console.log(d); // 2

//====================

// let a = 2;

// let x = 1 + (a *= 2);
// console.log(x);  // 5

//====================

// console.log("" + 1 + 0); // 10
// console.log("" - 1 + 0); // -1
// console.log(true + false); // 1
// console.log(6 / "3"); // 2
// console.log(4+5+"px"); // 9px
// console.log("$"+4+5); // $45
// console.log("4"-2); // 2
// console.log("4px" - 2); // NaN
// console.log("-9" + 5); // -95
// console.log("-9" - 5); // -14
// console.log(null + 1); // 1
// console.log(undefined + 1); // NaN
// console.log("\t\n"-2); // -2

//=====================

// console.log(5 > 4); // true
// console.log("apple" > "penapple"); // false
// console.log("2" > "12"); // true
// console.log(null == undefined); // true
// console.log(undefined === null); // false
// console.log("null" == "\n0\n"); // false
// console.log(null === +"n\0\n"); // false

//======================

// let message;
// let login = "";
// login == "Employee"
//   ? (message = "Hello")
//   : login == "Director"
//   ? (message = "Greetings")
//   : login == ""
//   ? (message = "No login")
//   : (message = "");
//   console.log(message);

//======================

// Musbat juft va musbat toq sonligini tekshirish

// let num = 31;
// if (num >= 0) {
//   if (num % 2 === 0) console.log("Musbat juft");
//   else console.log("Musbat toq");
// } else console.log("Manfiy");

// let num = -21;
// num >= 0
//   ? num % 2 === 0
//     ? console.log("Musbat juft")
//     : console.log("Musbat toq")
//   : console.log("Manfiy");

//======================

// let yil = 110;
// if (yil % 400 === 0) {
//   console.log(366);
// } else if (yil % 4 === 0 && yil % 100 !== 0) {
//   console.log(366);
// } else console.log(365);

// let yil = 160;
// yil % 400 === 0
//   ? console.log(366)
//   : yil % 4 === 0 && yil % 100 !== 0
//   ? console.log(366)
//   : console.log(365);

//======================

// let num = 1;

// if (num < 1000) {
//   if (num % 2 === 0) {
//     if (num >= 100) {
//       console.log("Uch xonali juft son");
//     } else if (num >= 10) {
//       console.log("Ikki xonali juft son");
//     } else console.log("Bir xonali juft son");
//   } else {
//     if (num >= 100) {
//       console.log("Uch xonali toq son");
//     } else if (num >= 10) {
//       console.log("Ikki xonali toq son");
//     } else console.log("Bir xonali toq son");
//   }
// }

// 1

// let a = -21
// if (a > 0) {
//    console.log(++a);  // beriluvchi son musbat bolsan 1 qowsin manfiy bolsa ozi chiqsin
// }else{
//     console.log(a)
// }


// 2 

// let a = -9
// if (a > 0) {
//     console.log(++a);           // musbat bolsa 1 qoshsin manfiy bolsa 2 ga  kamaytirsin
// } else {
//     console.log(a += 2);
// }

// 3

// let a = -4
// if (a > 0) {
//     console.log(++a);
// } else if (a < 0) {         // musbat bolsa 1 qoshsin manfiy bolsa 2 ga kamaytirsin 0 ga teng bolsa 10 chiqarsn
//     console.log(a += 2);
// } else {
//     console.log(10);
// }


// 4

// let a = 7822, b = 8372, c = 456
// if (a >= 0 && b >= 0 && c >= 0) {
//     console.log("3ta musbat son");
// } else if (a >= 0 && b < 0 && c < 0) {
//     console.log("1ta musbat  2ta manfiy");
// } else if (a < 0 && b < 0 && c >= 0) {
//     console.log("2ta manfiy 1 ta musbat");
// } else if (a < 0 && b >= 0 && c < 0) {
//     console.log("2ta manfiy 1 ta musbat");
// } else if (a < 0 && b < 0 && c < 0) {          // 3ta butun son berilgan shulardan nechtsi manfiy nechatasi musbatligini chiqarish
//     console.log("3 ta manfiy");
// } else if (a >= 0 && b >= 0 && c < 0){
//     console.log("2 ta musbat 1 ta manfiy");
// }else if(a<0 && b>=0 && c>=0){
//     console.log("2ta musbat 1 ta manfiy");
// }else if(a>=0 && b<0 && c>=0){
//     console.log("2ta musbat 1 ta manfiy");
// }else {
//     console.log("son xato kiritilgan");
// }

// 5

// let a=176722, b=1973912
// if(a>b){
//     console.log("birinchi son katta ");    // 2ta son berilgan shulardan kattasini korsatsin
// }else{
//     console.log("ikkinchi son katta");
// }

// 6
// let a = 403, b = 412
// if (a > b) {
//     console.log("ikkinchisi kichik"); // 2 ta sondan kichigini tartib raqamini chiqarish
// } else {
//     console.log("birinchisi kichik");
// }

// 7

// let a=5243, b=3132
// if(a>b){
//     console.log(a);
//     console.log(b);  // 2 ta butun sondan oldin katasini chiqarsin kn kichigini
// }else{
//     console.log(b);
//     console.log(a);
// }

// 8

// let a = 234, b = 872
// if (a > b || b > a) {
//     console.log(a + b);   // agar a va b teng bolsa a+b teng bolmasa consolda 0 ciqsin
// } else if (a == b) {
//     console.log(0);
// } 


// 9

// let a = 16, b = 72
// if ((a = a + b) && (b= a - b) && (a= a - b)) {   // a va b ni shunday ozgartirish kerakki a katta b kichik chiqsin
//     console.log(a,b);
// }

// 10


// let a=65, b=65
// if(a>b){
//     console.log(a);
// }else if (a<b){          // agar a va b teng bolmasa kattasini raqami chiqsin teng bolsa 0 chiqsin
//     console.log(b);
// }else if (a==b){
//     console.log(0);
// }


// 11


// let a=823456,b=612,c=5456
// if(a>b,b>c){
//     console.log(c);
// }else if(a>c,c>b){       // 3ta son berilgan shulardan kichigini chiqarish
//     console.log(b);
// }else if(b>c,b>a){
//     console.log(a);
// }



// 12


// let a = 9, b = 6, c = 4
// if (a > b && c < b && a > c) {
//     console.log(b);
// } else if (a < b && c < b && a > c) {   // 3ta son berilgan shulardan katta va kichik sonni orasidagi sonnni chiqaring
//     console.log(a);
// } else {
//     console.log(c);
// }

