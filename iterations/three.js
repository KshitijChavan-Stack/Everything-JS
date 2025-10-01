// for of loop

let arr = ["maxico", "paris", "LA"];

for (const element of arr) {
  console.log(element);
}

let obj = {
  val1: "kshitij",
  vall2: "chvan",
};

console.log("******************************************************");

for (const element of Object.keys(obj)) {
  console.log(`this is the key : ${element}`);
}

const greetings = "hello JS";

for (const greet of greetings) {
  if (greet == " ") {
    continue;
  }
  console.log(`Each char is : ${greet}`);
}

// Maps

const map1 = new Map();
map1.set("IN", "India");
map1.set("USA", "United states");
map1.set("FR", "France");
map1.set("IN", "India"); // no duplicate values !!

console.log(map1);

for (const [key, value] of map1) {
  console.log(key, ":", value);
}
