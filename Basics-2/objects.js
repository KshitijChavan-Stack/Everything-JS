// Singleton (If we make objects from constructors it becomes singleton)
// Object .create() method

let Jsuser = Object.create(null); // creates an empty object with no prototype
// we can also use {} to create an object but it will have prototype

Jsuser = {
  name: "Rajesh",
  age: 22,
  isLoggedIn: false,
};

console.log(Jsuser.age);

// Object Literals

const user = {
  name: "ram",
  "last Name": "sharma",
  email: "example@123",
  isLogged: true,
  presentDays: ["Monday", "Tuesday", "Wednesday"],
};

console.log(user["presentDays"]);
// the keys are always in string format

console.log(user["last Name"]); // accessing using bracket notation
// there is no way we can acess the key with dot notation if it has space or special character

// if we want to declare a simbol key in object

const mysymbol = Symbol("mysymbol");

const userhere = {
  name: "ram1",
  [mysymbol]: "myvalue",
};

console.log(userhere[mysymbol]); // accessing symbol key using bracket notation

Jsuser.email = "example2121"; // changeing new key value pair
console.log(Jsuser);

// if you dint want to make anyoue change the object we can use Object.freeze()

// Object.freeze(Jsuser);
// now we cant change the object

// now if we try to change the object it will not change
Jsuser.email = "example2445"; // changeing new key value pair
console.log(Jsuser);

// we can also add Functions in the object
// functions are not desriminated , we can treat them as variables also !

Jsuser.greeting = function () {
  // this is not a functions
  console.log("Hey there , Happy to See you here, ${this.name} !");
};

console.log(Jsuser.greeting()); // gives us a undefined
