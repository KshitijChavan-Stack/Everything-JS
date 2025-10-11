const User = {
  // underscore defined that we are making it as a private property
  _email: `Rajesh@gmail.com`,
  _password: `abx`,

  // but if we use get and set the underscore donse'nt mean much
  get email() {
    return this._email.toUpperCase();
  },
  // getter and setter actually overwrites the function of bringing and setting the values
  set email(value) {
    this._email = value;
  },

  get password() {
    return this._password;
  },

  set password(value) {
    this._password = value;
  },
};

// factory function cretaion of object
const tea = Object.create(User); // by default null

console.log(`Email:  ${tea.email}`);
console.log(`Password: ${tea.password}`);
