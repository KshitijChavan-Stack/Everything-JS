// modern syntax -> function based
function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      console.log(`This the email : ${this._email.toUpperCase()}`);
    },
    set: function (value) {
      this._email = value;
    },
  });
  Object.defineProperty(this, "password", {
    get: function () {
      console.log(`This the Password : ${this._password.toUpperCase()}`);
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const chai = new User("chai@Animation.com", "123543");

chai.email;
chai.password;
