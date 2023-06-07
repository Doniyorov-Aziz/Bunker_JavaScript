// Type Convirsions | Operators | Comparision | Logical Operators

// let a = 1;
// let b = "1";
// console.log(a+b); // 11

//===============================

// let a = 1;
// let b = "1";
// console.log(a + +b); // 2
//stringni oldidan orifmetik amal yani + qo'yib ketsak stringni bizga numberga o'tqazib beradi

//===============================

// let str1 = "webbrain";
// let str2 = "academy";
// console.log(str1 + str2);

//===============================

// raqam bo'lmagan stringni ichida arifmetik amal bajaradigan bo'lsa bizga NaN qaytaradi Not a Number

// let a ="12h"
// console.log(+a); // NaN

//===============================

// isNaN()

// let a = "1k";
// console.log(isNaN(a)); // true

// let b = "1";
// console.log(isNaN(b)); // false

//===============================

// let a = 10;
// let b = 2;

// console.log(a + b); // 12
// console.log(a - b); // 8
// console.log(a * b); // 20
// console.log(a / b); // 5

//===============================

// let a = 12.34;

// console.log(Number(a)); // 12.34
// console.log(Number(parseInt(a))); // 12
// console.log(Number(parseFloat(a))); // 12.34

// let b = "12.51hdauj";

// console.log(Number(b)); // NaN
// console.log(Number(parseInt(b))); // 12
// console.log(Number(parseFloat(b)));  // 12.51

//===============================

// false qiymatlar = 0 ; null ; undefined ; false ; "" ; NaN
// true = 1

// console.log(false == 0); // true
// console.log(true == 1); // true

// console.log(true == "1"); // true
// console.log(true == "a"); // false
// console.log(true == "2"); // false

//===============================
// % qoldiqli bo'lish

// let a = 111;
// let b = 10;

// console.log(a % b); // 1

// let a = 110;
// let b = 10;

// console.log(a % b); // 0

//===============================

// console.log(1 + 1 * 3); // 4

// console.log((1 + 3) * 2 + 1); // 9

//===============================

// Incriment & Decriment
// -- ++

// let a = 7;

// a++;
// console.log(a); // 8

// let a = 7;

// a++;
// ++a;
// console.log(a); // 9

// let a = 10;
// console.log(a++); // 10
// console.log(++a); // 12
// console.log(a++); // 12
// console.log(++a); // 14

// let a = 20;
// console.log(--a); // 19
// console.log(a--); // 19
// console.log(--a); // 17
// console.log(--a); // 16
// console.log(a--); // 16

//===============================

// let a = 2;

// a += a;
// a += 4;
// console.log(a); // 8

//===============================

// let a = 4;
// let c = 6;
// let b = 8;

// console.log(a > b); // false
// console.log(c > a); // true
// console.log(c > b); // false
// console.log(b > c); // true
// console.log(b > a); // true

// let a = 3;
// let b = 4;
// let c = 3;

// console.log(a >= c); // true
// console.log(b <= a); // false
// console.log(c >= b); // false

//===============================

// let a = 11; // number
// let b = "11"; // string

// console.log(a == b); // true
// console.log(a === b); // false

//===============================

//  || OR

// let admin = true;
// let ceo = false;

// console.log(ceo || admin); // true
// console.log(admin || ceo); // true

// let admin = false;
// let ceo = true;

// console.log(ceo || admin); // true
// console.log(admin || ceo); // true

//===============================

// && AND

// let ceo = false;
// let admin = true;

// console.log(ceo && admin); // false
// console.log(admin && ceo); // false

// let ceo = true;
// let admin = false;

// console.log(ceo && admin); // false
// console.log(admin && ceo); // false

// let ceo = true;
// let admin = true;

// console.log(ceo && admin); // true
// console.log(admin && ceo); // true

//===============================
// ! INKOR

// let a = 2;
// let b = 2;
// console.log(!(a == b)); // false

// console.log(!true); // false
// console.log(!false); // true
