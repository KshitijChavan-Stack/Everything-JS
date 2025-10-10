// ES6

class user {
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }

  enryptPassword() {
    return `${this.password}abc`;
  }
}

const chai = new user("chai", "chai@gmail.com", "1234");

console.log(chai.enryptPassword(), chai);
