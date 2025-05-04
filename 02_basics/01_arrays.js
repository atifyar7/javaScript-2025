// Shallow Copy and Deep copy:
// Shallow copy use the same references and deep copy not use the same references

const myArray = [10,9,8,7,6,5,4,3,2,1]

const myHeros = ["Spiderman", "Superman", "Batman"]
const myArray2 = new Array(1,2,3,4,5)

// console.log(myArray);
// console.log(myAyyay2);
// console.log(myHeros[2]);
myHeros.push("Shaktiman")
// console.log(myHeros);
myArray2.pop()
// console.log(myArray2);

myArray.unshift("Atif")
console.log(myArray);
myArray.shift()
console.log(myArray);
console.log(myHeros.includes("Superman"))
console.log(myHeros.indexOf("Superman"))

