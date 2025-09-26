// Singleton Objects

const tinderUser = new Object(); // its a empty object

// non-singleton object
const tinder1 = {}; // its a empty object

console.log(tinderUser);

tinderUser.id = "221xyz";
tinderUser.name = "mohanlala";
tinderUser.isloggedIn = false;

// console.log(tinderUser);

// we can go as far we wnat in the nesting Objects
const regularUser = {
  email: "someone @gmail",
  fullName: {
    useerFullName: {
      firstName: "rajesh",
      lastName: "sharma",
    },
  },
};

// with dot operator we can acess any depth in object
// console.log(regularUser.fullName.useerFullName.firstName);

// Like we combined array we can also combine Obejects

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = { obj1, obj2 };
// there is a problem here .... object under object

// here is what we can do to combine the objects
// const obj3 = Object.assign({}, obj1, obj2); // (targert,source)
// console.log(obj3);

// but most of time we need to use this method
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));
// gives each key and value in a array

// if we can ask about any value to objects
console.log(tinderUser.hasOwnProperty("id"));
// gives ether true or false
