// function getName(name) {
//     let intro = "Ajette";
//     function sayName() {
//         console.log(intro, name)
//     }
//     return sayName;
// }


// Closure
function add(a) {
    function innerFun(b) {
        return a + b;
    }
    return innerFun;
}

let adder = add(1);
let adder1 = add(7);

console.log(adder(1));
console.log(adder1(1));

// example 2
// let a = 2;
// let b = 3;
// function addNum (a, b){
//     return a + b;
// }
// console.log(addNum);

// Passing by reference

let names = ["John", "Geoff"];
function sayName(names){
    names[0] = "Jonny";
    return names;
}
console.log(sayName(names));

//using const and string interpolation 
const name = "Geoff";
function sayNam (name){
    return `I\'am ${name}`;
}
console.log(sayNam(name));

// modifying const
// myName points is passed by reference and points to a memory address that's why const can be modified
// passing by reference allows the parameters to be changed
const myName = "Geoff";
function myNameis (myName){
    myName = "Njihia"
    return myName;
}
console.log(myNameis(myName));

// great sesssion on scoping 


// Day 2 JS tutorials 
function sayGreeting(name = "unknown"){
    let greeting = `'Hello!' my name is ${name}`;
    console.log(greeting);
}
sayGreeting("Anjette");