let score = "56xyz";

console.log(typeof score);

let valInNum = Number(score); // conversion from string to number

console.log(typeof valInNum); // number
console.log(valInNum); // NaN => Not a Number => when we try to convert a non number string to number
// this still gives you type as number
// if we give 0 or empty string it will convert to 0

// "22" => 22
// "22abc" => NaN
// true => 1
// false => 0
// null => 0
// undefined => NaN

console.log("------------------");

let isLoggedIn = 1; // 0 => false , 1 => true
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn); // true

// "" => false
// "abc" => true

let someNumber = 56;
let stringNumber = String(someNumber);

console.log(typeof stringNumber);
console.log(stringNumber); // "56"

// ************************* OPERATORS *************************
console.log("************************* OPERATORS *************************");

let val = 3;
let negval = -val;
// console.log(negval);

// we have regular math operators
// + , - , * , / , % , **(power)

// Concatination
let str1 = "hello ";
let str2 = "JS";
let str3 = str1 + str2;
console.log(str3); // hello JS

console.log("3" + 5); // 35 (5 is converted to string and concatination happens)
console.log(1 + 3 + "5"); // 45 (1+3=4 and then concatination with "5")

// Postfix and Prefix Increment and Decrement operators
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
let a = 10;
let b = a++;
console.log(a, b); // 11 , 10 (b is assigned the value first and then a is incremented)

let c = 10;
let d = ++c;
console.log(c, d); // 11 , 11 (c is incremented first and then assigned to d)
