function sayMyName() {
  console.log("Hey inside Function");
}

// Execution
// sayMyName();

// // Referance
// sayMyName;

// given values in defining function are parameters
function addTwoNum(a, b) {
  return a + b;
}

// what we pass in function calling is arguments
console.log(addTwoNum(5, 12));

const res = addTwoNum(4, 20); // we can also store the result in a varable(if the use return keyword)
console.log(res); // 17

function loginUserMsg(name) {
  if (!name) {
    return "No Name Provided";
  }
  return `${name} Just Logged In`;
}

console.log(loginUserMsg());

// Lets inroduce some conditionals !!
