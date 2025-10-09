function setUserName(userName) {
  // complex DB calls
  this.userName = userName;
  console.log("called");
}
function createUser(username, email, password) {
  // to hold the reference we need to use the methods .call()
  setUserName.call(this, username);
  // but still we are not getting this values in object
  // so we need to give our own (this) where it can hold the ref

  // what is .call() -> passes our currrent execution context to some other function
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@fb.in", "1234");

console.log(chai);
