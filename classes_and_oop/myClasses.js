// // ES6

// class user {
//   constructor(userName, email, password) {
//     this.userName = userName;
//     this.email = email;
//     this.password = password;
//   }

//   enryptPassword() {
//     return `${this.password}abc`;
//   }

//   uperCaseUserName() {
//     return `${this.userName.toUpperCase()}`;
//   }
// }

// const chai = new user("chai", "chai@gmail.com", "1234");

// console.log(chai.enryptPassword(), chai);

// console.log(chai.uperCaseUserName());

// behind the scean

function User(userName, email, password) {
  this.userName = userName;
  this.email = email;
  this.password = password;
}

User.prototype.enryptPassword = function () {
  return `${this.password}abc`;
};

User.prototype.uperCaseUserName = function () {
  return `${this.userName.toUpperCase()}`;
};

const person = new User("jojo", "jojo@gmail.com", "23232");

console.log(person.enryptPassword());
console.log(person.uperCaseUserName());
