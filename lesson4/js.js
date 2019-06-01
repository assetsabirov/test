// function first() {
//     setTimeout( function(){
//         console.log(1);
//     }, 500 );
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log("I study " + lang);
//     callback();
// }

// function done() {
//     console.log("I've done lesson 3");
// }

// learnJS("JavaScript", done);

// learnJS("JavaScript", function(){
//     console.log("I've done lesson 3");
// });

let options = {
    width: 1024,
    hight: 1024,
    name: "test"
};

console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool;

console.log(options);

for (let key in options) {
    console.log("Property " + key + " has value " + options[key]);
}
console.log(Object.keys(options).length);

// let arr = ["first", 2, 3, "four", 5];


// arr.pop(); // delete last element in arr
// arr.push("5"); // add last element in arr
// arr.shift(); // delete fist element in arr
// arr.unshift("1"); // add fist element in arr

// for (let i  = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function (item, i, mass) {
//     console.log(i + ": " + item + " (array: " + mass + ")");
// });

// console.log(arr);

// let mass = [1, 3, 4, 6, 7];

// for (let key of mass) {
//     console.log(key);
// }


// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(",");
// console.log(arr);

// let arr = ["awee", "zzz", "qqq", "rqa"],
//     i = arr.join(", ");

// console.log(arr);
// console.log(i);

let arr = [1, 15, 4, 30, 42],
    i = arr.sort(compareNum);

function compareNum(a,b) {
    return a - b;
}
console.log(arr);


let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);