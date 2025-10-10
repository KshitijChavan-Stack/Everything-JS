// basic class
class User {
  constructor(userName) {
    this.userName = userName;
  }

  logMe() {
    console.log(`hey this is your Username: ${this.userName}`);
  }
}

class Teacher extends User {
  constructor(userName, email, password) {
    super(userName);
    // will auto refer which class we're extending,go to that class constructor and also suto get the
    // this and also set the value and we can directly take the access of that here !!
    this.email = email;
    this.password = password;
  }

  addCources() {
    console.log(`New cource is added by ${this.userName}`);
  }
}

const chai = new Teacher("chai", "chai@gmail.com", "23222");

chai.logMe();
chai.addCources();
