// // function getName(name) {
// //     let intro = "Ajette";
// //     function sayName() {
// //         console.log(intro, name)
// //     }
// //     return sayName;
// // }


// // Closure
// function add(a) {
//     function innerFun(b) {
//         return a + b;
//     }
//     return innerFun;
// }

// let adder = add(1);
// let adder1 = add(7);

// console.log(adder(1));
// console.log(adder1(1));

// // example 2
// // let a = 2;
// // let b = 3;
// // function addNum (a, b){
// //     return a + b;
// // }
// // console.log(addNum);

// // Passing by reference

// let names = ["John", "Geoff"];
// function sayName(names) {
//     names[0] = "Jonny";
//     return names;
// }
// console.log(sayName(names));

// //using const and string interpolation 
// const name = "Geoff";
// function sayNam(name) {
//     return `I\'am ${name}`;
// }
// console.log(sayNam(name));

// // modifying const
// // myName points is passed by reference and points to a memory address that's why const can be modified
// // passing by reference allows the parameters to be changed
// const myName = "Geoff";
// function myNameis(myName) {
//     myName = "Njihia"
//     return myName;
// }
// console.log(myNameis(myName));

// // great sesssion on scoping 


// // Day 2 JS tutorials 
// // adding a default value
// function sayGreeting(name = "unknown") {
//     let greeting = `'Hello!' my name is ${name}`;
//     console.log(greeting);
// }
// sayGreeting("Anjette");

// // using numbers you must pass the default values in the parameters
// function addNumber(a = 2, b = 3) {
//     return a + b;
// }

// let res = addNumber(3);
// console.log(res);


// // example 2
// function sayGreeting(name) {
//     console.log(`Good Morning, ${name}!`)
// }
// sayGreeting("Anjette");
// // if you are using return, you have to console.log the invoking to view on console


// // using arrow functions . You canno use the function only the function name
// sayGreeting = name => `Good Morning, ${name}!`;
// console.log(sayGreeting("Anjette"));

// Hello = (val) => return;
// you can also get rid of the parenthesis if the val contains one parameter

// function name(){
//     console.log(arguments[1]);
// }

// name(1,2,2,3,3,3,4,5,6,);

// myName = (...arguments) => {
//     console.log(arguments);
// }
// myName(1, 2, 4, 5);

// function name (){
//     console.log(arguments);

// }
// name(1,2,3,4,5);

// arrow functions do not use arguments
let name = (...arguments) => {
    console.log(arguments);
}
name(1,23,4,5,65,6);