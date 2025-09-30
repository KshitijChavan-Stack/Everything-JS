const userEmail = "rajesh@.ai";
// when we assume the string to be the truth value => truthy value
// and if we have empty string then its False
if (userEmail) {
  console.log("got user email");
} else {
  console.log("don't have the email");
}

// falsy value

// false,0,-0,bigInt 0n,"",null,NaN

// truthy value(All other than false)

// true,"0",'false'," ",[],{},function(){}

// checking the array and objects !

if (userEmail.length === 0) {
  console.log("empty");
} else console.log("not empty ++++++++++++++++++++");

const arr = [];
if (arr.length === 0) {
  console.log("empty array");
}

const obj = {};
if (Object.keys(obj).length === 0) {
  console.log("empty object");
}
// **************************************************
