// object literal
// const user = {
//   // this are properties
//   userName: "rajesh",
//   loginCnt: 3,
//   signIn: true,

//   getUserDetails: function () {
//     console.log("got user details");
//     console.log(`username : ${this.userName}`); // with this keyword we specify the current context we are refering
//   },
// };

// console.log(this); // if we print this her

// const promiseOne = new Promise()
// const date = new Date()
// this (new) keyword is a constructor function
// this allow us to create multiple instance from single object literal

function userFunc(userName, loginCnt, isLoggedIn) {
  this.userName = userName;
  this.loginCnt = loginCnt;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.userName}`);
  }; // we can also write a function in this

  return this; // the empty object is now filled and returned
  // even if we dont return we get returnd it implictly
}

// const userOne = userFunc("rajesh", 12, true);
// const userTwo = userFunc("code", 13, false); // this will overrid the userone and thats a problem

const userOne = new userFunc("rajesh", 12, true); // different copies
const userTwo = new userFunc("code", 13, false); // new instance

console.log(userOne);
console.log(userTwo);

// here is why we need to use the New keyword
//when we write new keyword
// 1. empty object is created
// 2. constrcutur function called (all agruments are packed)
// 3. this keyword is and all agruemts are injected
// 4. we gett all this
