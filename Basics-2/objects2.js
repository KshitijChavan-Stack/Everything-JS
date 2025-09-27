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
const obj5 = Object.assign({}, obj1, obj2); // (targert,source)
// console.log(obj3);

// but most of time we need to use this method
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));
// gives each key and value in a array format

// if we can ask about any value to objects
console.log(tinderUser.hasOwnProperty("id"));
// gives ether true or false

// Destructuring Objects
console.log("**********************************************");

const course = {
  courseNane: "JS",
  price: "999",
  courseInstructer: "Hitesh",
};

// this is the syntx for dectructuring
// we can also give a name as per we want to the accessed key !!
const { courseInstructer: instructer } = course;

console.log(instructer);

// Only to Understad the API structure JSON
// {
//   "name" : "rajesh",
//   "courseName": "JS",
//  " price": "999"
// }
