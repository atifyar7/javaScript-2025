// ======== Stack =======
// used by premitive dataTypes
// is me copy milti hai humy or hum copy me changing krty hain

let youTube = "alfaz_i_ishq"
let newYotTube = youTube

newYotTube = "Alfaz i ishq"

console.log(youTube);
console.log(newYotTube);

// ======== Heap ========
// used by non premitive dataTypes
// is me humy original reference milta hai or hum osi me changing krty hain... 

let student1 = {
    name:"Atif Yar",
    age: 21,
}

let student2 = student1

student2.age = 23
console.log(student1);
console.log(student2);
