// function getName(name) {
//     let intro = "Ajette";
//     function sayName() {
//         console.log(intro, name)
//     }
//     return sayName;
// }

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