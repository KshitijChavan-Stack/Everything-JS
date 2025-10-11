class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    console.log(`This is your email : ${this._email.toUpperCase()}`);
  }

  set email(email) {
    this._email = email;
  }

  get password() {
    console.log(`this is the password :${this._password.toUpperCase()}`);
  }

  set password(password) {
    this._password = password;
  }
}

const rajesh = new User("rajesh@gmail.com", "123123");
rajesh.password;
rajesh.email;
