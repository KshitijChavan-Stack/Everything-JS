const score = 222;
console.log(score);

const balance = new Number(323);
console.log(balance);

console.log(balance.toString().length); // gives us use the string methods
console.log(balance.toFixed(2)); // 323.00

const otherNum = 324.56789;
console.log(otherNum.toFixed(2));
console.log(otherNum.toPrecision(4)); // 324.6 total 4 digits

const hundreds = 100000000;
console.log(hundreds.toLocaleString("en-IN")); // 10,00,00,000
// according to indian number standard

console.log(Number.MAX_VALUE); // gives us the max value of number
console.log(Number.MIN_VALUE); // gives us the min value of number

// MATHS

console.log(Math); // just give us a Object

console.log(Math.abs(-8)); // 8 gives a positive value
console.log(Math.round(4.6)); // 5 takes either upper or lower limit
console.log(Math.ceil(4.1)); // 5 always take upper limit (if little more than  4 than 5)
console.log(Math.floor(4.9)); // 4 always take lower limit (if little less than 5 than 4)

console.log(Math.sqrt(64)); // 8
console.log(Math.pow(2, 3)); // 8 (2^3)

const numArr = [2, 4, 6, 8, 1, 3, 5];
console.log(Math.max(...numArr)); // 8
console.log(Math.min(...numArr)); // 1
// The key difference is context: it "spreads" elements when expanding, and "collects" elements when used as a rest parameter or in destructuring.

console.log(Math.random()); // gives us random number between 0 to 1
console.log(Math.floor(Math.random() * 10)); // gives us random number between 0 to 9

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // gives us random number between 10 to 19
