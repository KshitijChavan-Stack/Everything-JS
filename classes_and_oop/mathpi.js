const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// tells you about hiden things of Object

// console.log(descriptor);
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
// this is hardcoded false and cannot be made true at any cost

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);
// this won't change bcoz its constant and can't be change

// we also have descriptor propertys for this !(Object)
const chai = {
  name: "gingerChai",
  price: "299",
  isAvailable: true,

  orderChai: function () {
    console.log("chai Nahi bani");
  },
};

// this gives us Undifined
// console.log(Object.getOwnPropertyDescriptor(chai));

// bcoz we need to specify the object aswell as property
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// {
//   value: 'gingerChai',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// Object.defineProperty(chai, "price", {
//   writable: false,
//   enumerable: false,
// });

// console.log(Object.getOwnPropertyDescriptor(chai, "price"));

// {
//   value: '299',
//   writable: false,
//   enumerable: false,
//   configurable: true
// }

// we need to handle the situation in condition

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`key : ${key} value : ${value}`);
  }
}
