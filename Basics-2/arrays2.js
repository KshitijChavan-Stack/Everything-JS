const marval_heros = ["spiderman", "thor", "hulk", "ironman"];
const dc_heros = ["batman", "superman", "flash"];

// marval_heros.push(dc_heros); // adds dc_heros array as a single element at the end of marval_heros array
// we get array in array !! the second array is a single element

// console.log(marval_heros);

// console.log(marval_heros[4][1]); // acessing elements of second array
// not a good way to write the code

const newheros = marval_heros.concat(dc_heros); // this will not change the original array
// concat dont chanege a original array it returns a new array

console.log(marval_heros);
console.log("**********************");

console.log(newheros);

// Spread Operator

console.log("**********************");
const all_new_Heros = [...marval_heros, ...dc_heros]; // this will also not change the original array
console.log(all_new_Heros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_array = anotherArray.flat(Infinity); // flat method flattens the array to the specified depth
// infinity see all the depth and flattens the array completely
console.log(real_array); // gives us a single array with all elements

// flat method is used to flatten the array to the specified depth

// when data comes in string or nodelist or object but we want it in array

console.log(Array.isArray("hello")); // checks if the given data is array or not
// gives False

const newArrsy = Array.from("hello"); // converts string to array
console.log(newArrsy); // [ 'h', 'e', 'l', 'l', 'o' ]

const newarr1 = Array.from({ name: "Rajesh", age: 22 }); // converts object to array
console.log(newarr1); // Gives us an empty array as object is not iterable
// This is a interesting case , we need to spevify with shich we want to convert the object to array

// This is the way we can conver the object to array using the spcific type (key/val)

const newarr2 = Array.from(Object.values({ name: "Rajesh", age: 22 }));
// we need to use the Object method to get the values of the object or the keys
console.log(newarr2); // [ 'Rajesh', 22 ]

const newarr3 = Array.from(Object.keys({ name: "Rajesh", age: 22 }));
console.log(newarr3); // [ 'name', 'age' ]

let score1 = 100;
let score2 = 200;
let score3 = 300;

let allscore = Array.of(score1, score2, score3); // creates an array from the given arguments
console.log(allscore); // [ 100, 200, 300 ]
