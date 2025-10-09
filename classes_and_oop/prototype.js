// let myName = "Rajesh"
// let myChannel = "chai aur JS"

// NEED TO DO
// console.log(myName.truelength());
// console.log(myChannel.truelength());

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`spidy power is : ${this.spiderman}`);
  },
};

Object.prototype.rajesh = function () {
  console.log("rajesh is everywhere !");
};

myHeros.rajesh(); // bcauz everything goes from the object and at the end everything js is object
heroPower.rajesh();

Array.prototype.heyRajesh = function () {
  console.log("hey rajesh");
};

// heroPower.heyRajesh(); // this dont have the acess becoz Object is the toplevel paraent
myHeros.heyRajesh(); // array have this heyRajesh acess

// Inheritance

const user = {
  name: "chai",
  email: "chai@google.com",
};

const teacher = {
  makeVideo: true,
};

const teachingSupport = {
  isAvailable: false,
};

const TAsupport = {
  makeAssignMent: "JS assignment",
  fullTime: true,
  __proto__: teachingSupport,
};

teacher.__proto__ = user;

console.log(
  `this is how we use the prototype inheritance :${TAsupport.isAvailable}`
);

console.log(
  `this is another way that we can access both the object from a single object : ${teacher.email}`
);

// modern syntax

// (object that access, from whom it access)
Object.setPrototypeOf(teachingSupport, teacher);
// teachingsupport is accessing all properties of teacher

let anotherUserName = "code                                               ";

String.prototype.trueLength = function () {
  const oldLen = this.length;
  console.log(`Old length is : ${oldLen}`);

  const len = this.trim().length;
  return len;
};

console.log(`the actual lenght is : ${anotherUserName.trueLength()}`);
