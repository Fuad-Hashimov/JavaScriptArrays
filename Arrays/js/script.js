// Arrays && Arrays Method
//create arrays
//Step 1
let names = ["Con","Alan","Eduard","Sofy","Michael"];

let years = [1952,1999,2005,2000,1995,1986];
//Step 2
let countrys = new Array("Germany","France","Italy","USA");

//Array Mix

let mix = ["Con","Alan","Eduard",15,52,63,true,false,undefined,null,["Germany","France"]];

console.log(names);
console.log(names.length);
console.log(typeof names);
console.log(years);
console.log(years.length);
console.log(typeof years);
console.log(countrys);
console.log(countrys.length);
console.log(typeof countrys);

// Get Array Item

// console.log(names[0]);
// console.log(years[3]);
// console.log(countrys[countrys.length - 1]);

//Set Array Item

// countrys[0] = "Japan";
// countrys[countrys.length] = "Japan";

// console.log(countrys);

// Add item

// years.push(1998);
// years.unshift(1555);
// console.log(years);

// Remove Item

// years.pop();
// years.shift();
// console.log(years);

// Get Index item

// let indexs = years.indexOf(1995);
// console.log(indexs);

// Reverse Array

// names.reverse();
// console.log(names);

// Sorted Array // A,B,C,D

// countrys.sort();
// console.log(countrys);

// Concat Arrays

// let val = names.concat(years,countrys);
// console.log(val);

// Delete Array item  StartNumber && DeleteCount

// names.splice(1,2);
// names.splice(1,0,"Alice");
// names.splice(2,1,"Alice");
// console.log(names);

// Find Arrays 
//Find
let over18 = function(year){
    let age = new Date().getFullYear() - year;
    return age >= 18;
}
// console.log(over18(1999));

// let val =  years.find(over18);
// console.log(val);

//  Filter Arrays

// let val = years.filter(over18);
// console.log(val);