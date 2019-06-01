// - to String
// 1)
console.log(typeof(String(4)));
// 2)
console.log("www" + false);
console.log(typeof("www" + false));
console.log("https://vk.com/catalog/" + 5);


// - to Number
// 1)
console.log(typeof(Number("5")));
// 2)
console.log(5 + +"5");
console.log(typeof(5 + +"5"));
// 3)
console.log(parseInt("15px", 10));
console.log(typeof(parseInt("15px", 10)));


let ans = +prompt("Hello?", "");

// 0, "", null, undefined, NaN


let switcher = null;

if (switcher) {
    console.log("Working..");
}

switcher = 1;

if (switcher) {
    console.log("Working..");
}

// 2)
console.log(typeof(Boolean("5")));

// 3)
console.log(typeof(!!"5"));