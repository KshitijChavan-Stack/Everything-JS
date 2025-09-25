// Two types of data types in JavaScript:
// 1. Primitive data types
// 2. Non-primitive data types

// Primitive data types-------------------------
// 7 primitive data types

// 1. String,number,boolean,null,undefined,bigint,symbol

// Javascript is a dynamically typed language

// Reference data types-------------------------(Non-primitive data types)
// Array,object,functions
// If you ever want to master javascript - do objects and browser evennts

const id = Symbol("121");

const bignum = 266542546245n;

// Array,object,function

const heros = ["shaktiman", "naagraj", "doga"];

let heroObj = {
  name: "shaktiman",
  power: "light",
};

const myFunc = function () {
  console.log("hello JS");
};

console.log(typeof heroObj);
console.log(typeof bignum);
