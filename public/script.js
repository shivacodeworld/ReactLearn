import add from "../src/utility.js";


add();

//gets error, so use type='module' before src in html

//object destructuring 

let student = {
    name:"shiva",
    email:"info@ucdenver.edu",
    gender:"Male",
    age:20
}

let {name,email,gender,age} = student;

console.log(name);

let car = {
    color:"red",
    brand:"MG",
    onroad:45000,
    address:{
        street:315,
        Area:"Aurora County"

    }
}

let {color,brand:model,onroad,MPH = 32, address:{Area}} = car;

console.log(model);
console.log(MPH);
console.log(Area);

//if given other variable whch is not defined then it results in undefined.
