const name = "Kshitij";
const repoCnt = 22;

console.log(name + repoCnt + " repositories"); // don't use this way

// we have better way -> string interpolation
console.log(`${name} has ${repoCnt} repositories`); // use this way

// more ways to declare Strings

const gameId = new String("Dominator"); // this give us the key-value pair object

console.log(gameId[0]); // D
console.log(gameId.__proto__); // we can see all the methods of string

console.log(gameId.length); // 10
console.log(gameId.toUpperCase()); // DOMINATOR
// orignal value wont change because string is primitive data type and stored in stack

// finding from string

console.log(name.indexOf("t")); // 4
console.log(name.charAt(4)); // t

const gameName = gameId.substring(0, 4); // 0 to 3 actually
console.log(gameName); // Domn

let newString1 = "    rajesh    kumar";
console.log(newString1.trim()); // "rajesh kumar"  // remove extra spaces from start and end;
// only work on white spaces

const url = "https://www.codewithharshit.com/ram%20kumar"; // %20 means space
// "https://www.codewithharshit.com/ram-kumar"
console.log(url.replace("%20", "-"));

console.log(gameId.includes("Domi")); // true
