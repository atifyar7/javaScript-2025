let value = 200
console.log(value);

let balance = new Number(1000.934)
console.log(balance);

console.log(balance.toFixed(2));
// console.log(balance.toString());
console.log(typeof balance);

const hundreds = 1000000000000
console.log(hundreds.toLocaleString("en-IN"));

// =============== MATHS ==============

let score = 76.9997
// console.log(Math.round(76.7));
// console.log(Math.abs(-4));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.3))
// console.log(Math.sqrt(38));
// console.log(Math.min(2,3,6,11,56,456));

console.log(Math.floor((Math.random() * 10)) + 1)
let min = 25
let max = 33
console.log(Math.floor(Math.random() * (max - min + 1)) + min);


