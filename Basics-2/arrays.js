// Arrays

// javascript arrays can be resizable and can hold elements of any type
const arr = [1, 2, 3, 4, 5];

console.log(arr[0]); // acessing elements using indexing
// zero based indexing is used in javascript

// when we do give copy of array to another array
// there are two types 1.shwallow copy 2.deep copy

// shallow copy
const arr2 = arr; // here arr2 is just a reference to arr
arr2[0] = 100; // changing arr2 will also change arr
console.log(arr); // [100, 2, 3, 4, 5]

// Another way to declare array

const arr3 = new Array(10, 20, 30);
console.log(arr3[1]);

// Array Methods

// arr.push(6); // adds element at the end
// arr.push(7);
// arr.pop(); // removes last element

// shifts all elements to left
// arr.unshift(9); // adds element at the start
// arr.shift(); // removes first element

// console.log(arr.includes(3)); // checks if element is present in array
// console.log(arr.indexOf(3)); // returns index of element if present else -1

// const arr1 = arr.join(","); // converts array to string with specific seperator

// console.log(arr1);
// console.log(arr);

//SLICE AND SPLICE

// const newarr = arr.slice(1, 4); // returns a new array from index 1 to 4 (4 not included)
// console.log(newarr);

// const newarr1 = arr.splice(1, 2, 100, 200); // removes 2 elements from index 1 and adds 100 and 200 at index 1
// console.log(newarr1); // returns the removed elements
// const newarr2 = arr.splice(1, 3);
// console.log(newarr2); // orignal array gets affected as elements are removed

// console.log(arr);
