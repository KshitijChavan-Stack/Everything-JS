class user {
  constructor(userName) {
    this.userName = userName;
  }

  logMe() {
    console.log(`Username is : ${this.userName}`);
  }

  // stops from accessing of this method
  // becoz we dont want to give create ID access to everyone
  // not even inherited child will have to access it
  static createId() {
    return `123`;
  }
}

const rajesh = new user("Rajesh");

rajesh.logMe();
console.log(rajesh.createId()); // no access
