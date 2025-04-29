let name = "Muhammad Atif"
let age = 23

console.log(`Hello my name is ${name} and my age is ${age}`);

let gameName = "pubg"
console.log(gameName[2]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
console.log(gameName.indexOf('b'));

console.log(gameName.substring(0,2));
console.log(gameName.slice(-3,2));

let newGameNAme = gameName;
newGameNAme = "   Free Fire   "
console.log(newGameNAme.trim());

console.log(newGameNAme.replace('F', 'p'));
console.log(newGameNAme.includes("Fire"));
// console.log(newGameNAme.split('-'));
let myName = new String("Muhammad-Atif-Yar")
console.log(myName.split('-'));


