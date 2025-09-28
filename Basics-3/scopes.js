// if the var is only working then why we ave let and const
// becoz the var is not working like need to be for block scope

// This is Scope (in function,ifelse)
// {}

// This is Block Scope and outer is global scope
if (true) {
  let a = 20;
  const b = 30;
  var c = 40;
}

// which is good becoz of block scope
// error is a & b not defined
// console.log(a);
// console.log(b);

// but C got acessed
// console.log(c);

// Nested Scope

// function one() {
//   // two can acess the one attributes
//   const userName = "Rajesh";

//   function two() {
//     const website = "yt";
//     console.log(userName);
//   }
//   // website cannot be acessed here (ERROR)
//   // console.log(website);

//   // we need to call this or the Two() will never be executed
//   two();
// }

// one();

// Another Example

if (true) {
  const userName = "Maridona";
  if (userName === "Maridona") {
    const web = "youtube";
    console.log(userName + " " + web);
  }
  // this can't be acessed here
  // console.log(web);
}
// this also can't be acessed here
// console.log(userName);

// =========================================== Interesting

addOne(5); // NO ERROR EVEN WHEN WE ALL IT BEFORE DECLARE

function addOne(val) {
  return val + 1;
}

addTwo(5); // THIS WILL GIVE A ERROR BECOZ WE HAVE HOLDED IT IN A VARIABLE
// THIS CONCEPT IS HOISTING
// Function Expression
const addTwo = function (val) {
  return val + 2;
};
