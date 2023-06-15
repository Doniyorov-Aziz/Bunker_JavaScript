// for -> 9

// a va b sonlar oarasidagi kvadratlarini yig'indisini hisoblash

// let a = 1;
// let b = 5;
// let sum = 0;
// for (let i = a; i <= b; i++) {
//   sum += i * i;
// }
// console.log(sum); // 1 + 4 + 9 + 16 + 25 = 55

//==================================

// for -> 36

// ichma - ich forni ishlatish

// 1 ^ k + 2 ^ k + ......+ N ^ k yig'indini hisoblash kerak

// let k = 2,
//   n = 5,
//   sum = 0;

// for (let i = 1; i <= n; i++) {
//   let res = 1;
//   for (let j = 1; j <= k; j++) {
//     res *= i;
//   }
//   sum += res;
// }
// console.log(sum);

//==================================

// for -> 37

// 1 ^ 1 + 2 ^ 2 + ........+ N ^ n yig'indini hisoblash kerak

// let n = 5,
//   sum = 0;

// for (let i = 1; i <= n; i++) {
//   let res = 1;
//   for (let j = 1; j <= i; j++) {
//     res *= i;
//   }
//   sum += res;
// }
// console.log(sum);

//==================================

// for -> 40

// a va b berilgan , b son a sondan katta va shu son lar orasidagi barcha butun sonlarni chiqarish kerak
// a soni bir martta , (a + 1) soni 2 marttadan chiqish kerak

// ex : 3 , 4 , 4 , 5 , 5 , 5 , 6 , 6 , 6 , 6 , 7 , 7 , 7 , 7 , 7

// let a = 3,
//   b = 7;
// let sum = 1;
// for (let i = a; i <= b; i++) {
//   for (let j = 1; j <= sum; j++) {
//     console.log(i);
//   }
//   sum += 1;
// }

//==================================

// let i = 0
//  while (i<3){
//     console.log(`number - ${i}`);
//     i++
//  } // number - 0 ; number - 1 ; number - 2

//==================================

// faktorial ! sonni ko'paytirish
// 5! = 1 * 2 * 3 * 4 * 5 = 120

// let n = 5;
// let res = 1;
// for (let i = 1; i <= n; i++) {
//   res *= i;
// }
// console.log(res);