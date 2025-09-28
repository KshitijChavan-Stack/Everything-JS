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

// Lets inroduce some conditionals !!
function loginUserMsg(name) {
  if (!name) {
    return "No Name Provided";
  }
  return `${name} Just Logged In`;
}

console.log(loginUserMsg());

// bundal the numbers and give it to me means the REST operator(...)
function calculateCartPrice(...num1) {
  return num1;
}
// gives the output in Arrau format
console.log(calculateCartPrice(210, 320, 480));

const user = {
  name: "jojo",
  price: "299",
};

// when we are usingsuch objects in fucntion we need to check typesafty
function handleObject(anyObj) {
  console.log(`Username is ${anyObj.name} and price is ${anyObj.price}`);
}

// handleObject(user);
// Can also be done like this !
handleObject({
  name: "jojo1",
  price: "199",
});

const arr = [100, 300, 322, 98];

function returnFirstValue(anyArr) {
  if (Array.isArray(anyArr) && anyArr.length !== 0) {
    console.log(`This is the first element ${anyArr[0]}`);
  } else {
    console.log("This is not a array or its empty");
  }
}

console.log(arr.length);

returnFirstValue([]);
