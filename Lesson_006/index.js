// let account = {
//   name: "Webbrain academy",
//   founded: 2020,
//   major: "Frontend,bunker",
//   "full name": "Webbrain It Academy",
//   12: 2023,
// };
// console.log(account.major);
// console.log(account["founded"]);
// console.log(account["full name"]);
// console.log(account[12]);

//====================

// let account = {
//   name: "Webbrain academy",
//   founded: 2020,
//   major: "Frontend,bunker",
//   "full name": "Webbrain It Academy",
//   12: 2023,
// };
// let key = "major";
// console.log(account.key); // undefined
// console.log(account[key]); // Frontend,bunker
// console.log(account["key"]); // undefined

//====================
// add

// let obj = {
//   name: "Aziz",
//   major: "Webbrain",
//   founded: 2023,
// };
// obj.name = "It Academy";
// console.log(obj);

// let obj = {
//   name: "Aziz",
//   major: "Webbrain",
//   founded: 2023,
// };
// obj.surname = "Doniyorov";
// console.log(obj);

//====================
// delete

// let obj = {
//   name: "Aziz",
//   major: "Webbrain",
//   founded: 2023,
// };
// delete obj.name;
// console.log(obj);

//====================
// freeze - malumotlarni muzlatib qo'yish

// let obj = {
//   name: "Aziz",
//   major: "Webbrain",
//   founded: 2023,
// };
// Object.freeze(obj);

// delete obj.name;
// obj.major = "It center";
// obj.title = "Academy";
// console.log(obj);

// let obj = {
//   name: "Azizbek",
//   surname: "Doniyorov",
// };

// console.log(Object.entries(obj));

//========================
// seal()

// let obj = {
//   name: "webbrain",
//   founded: 2020,
// };
// Object.seal(obj);

// obj.title = "It academy";
// obj.founded = "2023";
// delete obj.name;
// console.log(obj);

//========================

// let obj1 = {
//   name: "bunker",
//   founded: 2023,
// };
// let obj2 = {
//   name: "bunker",
//   founded: 2023,
// };

// console.log(obj1 == obj2); // false

// let obj1 = {
//   name: "bunker",
//   founded: 2023,
// };
// let obj2 = obj1;
// console.log(obj1 == obj2); // true

//========================
// structuredclone

// let ac1 = {
//   name: "bunker",
//   founded: 2023,
// };
// ac1.name = "Webbrain";
// let ac2 = structuredClone(ac1);
// console.log(ac2);
// console.log(ac1 == ac2); // false

//========================

// let name = "webbrain";
// let title = "It center";
// let obj = {
//   name,
//   title,
// };
// console.log(obj);

//========================
// in

// let ac1 = {
//   founded: 2020,
//   major: "Frontend",
// };
// console.log("major" in ac1); // true

//========================
// Object.assign()

// let ac1 = {
//   founded: 2020,
//   major: "Frontend",
// };

// ac1.founded = 2023;
// let ac2 = {};

// Object.assign(ac2, ac1);
// console.log(ac2);
