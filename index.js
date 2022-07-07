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

let names = ["John", "Geoff"];
function sayName(names){
    names[0] = "Jonny";
    return names;
}
console.log(sayName(names));


