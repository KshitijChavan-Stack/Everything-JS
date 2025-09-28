const user = {
  username: "ram",
  price: 999,

  // this means the current context in side the object
  welcomeMsg: function () {
    console.log(`${this.username} Welcome to website`);
  },
};

user.welcomeMsg();
user.username = "sam"; // we can change the context here
user.welcomeMsg();

// we are in node env so it'll give a empty obj
console.log(this);
// but if we run it in browser concole then we'll get window object

// function chai() {
//   let userName = "rajesh";
//   // we can't use this here ! it'll only work in objects
//   console.log(this.userName); // undeifined
// }

// chai();

// Arrow Functions

const chai = () => {
  let userName = "rajesh";

  console.log(this.userName); // undeifined
};

chai();

// Arrow function sysntx

// () => {}

// another way to use arrow function with implicit return

const addTwoNum = (n1, n2) => n1 + n2;

console.log(addTwoNum(39, 99));

// to return a object
// we must wrap it in parenthisis
const giveObj = () => ({ user: "ramakant" });

console.log(giveObj());

const arr = [2, 44, 23, 33, 545];

// can also be done like this !!
arr.forEach(() => {});
