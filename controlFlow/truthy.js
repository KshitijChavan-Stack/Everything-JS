const userEmail = "rajesh@.ai";
// when we assume the string to be the truth value => truthy value
// and if we have empty string then its False
if (userEmail) {
  console.log("got user email");
} else {
  console.log("don't have the email");
}

// falsy value

// false,0,-0,bigInt 0n,"",null,NaN

// truthy value(All other than false)

// true,"0",'false'," ",[],{},function(){}

// checking the array and objects !

if (userEmail.length === 0) {
  console.log("empty");
} else console.log("not empty ++++++++++++++++++++");

const arr = [];
if (arr.length === 0) {
  console.log("empty array");
}

const obj = {};
if (Object.keys(obj).length === 0) {
  console.log("empty object");
}
// **************************************************
// Nullish coalescing operator (??): only made for null & undefined

let val1;
// which ever comes first gets assigned and this is becoz if anyone of the
// value is null then the another value that has something gets assign
// val1 = 5 ?? 10;

// another example with null
// val1 = null ?? 10; // 10 can also be a function
// val1 = undefined ?? 15;

// which ever the first value we get !
val1 = null ?? 14 ?? 20;
// we can also say this as fallback

console.log(val1); //have 10,15,14

// Terniary Operator********************
// Syntax
// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice >= 80 ? console.log("zyda hogya ab") : console.log("chaljayga");
