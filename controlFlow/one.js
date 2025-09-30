// if statement

if (true) {
  // only if true then this part execute
}

if (false) {
  // only if true then this part execute
}

const isUserLoggedIn = true;

if (isUserLoggedIn) {
  // we can also go true or false with a variable
}

// comparison operator
// >, <,<=,>=,==,!=,===(type check also),!==
// answer need to be true

if (2 == "2") {
  console.log("Executed");
}
// this will be true but the type is not equal

if (2 === "2") {
  console.log("Executed1");
}
// this will be not execte the inner code
// (Type checking)

// const temperature = 42;

// // either this or that (if..else)
// if (temperature < 50) {
//   console.log("its normal temperature");
// } else console.log("temp is greater than 50");

// const score = 210;

// if (score > 100) {
//   const power = "fly";
//   console.log(`User Power : ${power}`);
// }

// console.log(`User Power : ${power}`); // this will give you a error
// // bcoz its okay that we dont get the variable out of block scope

const balance = 1000;

// if (balance > 500) {
//     // code executed
// }

// implicit scope only one line execution
// if (balance > 500) console.log("Grester");

// // we can also have multiple cconditions

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 750");
// } else {
//   console.log("less than 1200");
// }

const userLogedIn = true;
const debitCard = true;

const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// both should be true
if (userLogedIn && debitCard) {
  console.log("Allowed to buy !");
}

// either need to be true
if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("Logged in sucess");
}
