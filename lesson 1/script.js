'use strict'

var number = 5;
var string = "Hello";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0);
console.log('string'*9);
console.log(string);
console.log(boolean);
let something;
console.log(something);

let persone = {
    name: "John",
    age: 25,
    isMarried: false
};
console.log(persone.name);
console.log(persone["age"]);

let arr = ['plum.png','orange.jpg','apple.bmp'];

console.log(arr[0]);
// alert("Hello World!");
// let answer = confirm("Are you here?");
// console.log(answer);
// let answer = prompt("Есть ли вам 18?", "Yeah boyyyyz");
// console.log(answer);
// console.log(typeof(answer));

// let answer = +prompt("Есть ли вам 18?", "Yeah boyyyyz");
// console.log(answer);
// console.log(typeof(answer));


// console.log("arr" + " - object");
// console.log(4 + +" - object");

let incr = 10,
    decr = 10;

// incr++;
// decr--;

console.log(incr++);
console.log(decr--);

console.log(5%2);
console.log("2" == 2);
console.log("2" === 2);


let isChecked = true,
    isClose = false;

console.log(isChecked && isClose);
console.log(isChecked || isClose);