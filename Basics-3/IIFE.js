// immediately invoked function expressions

// this is a named IIFE
(function chai() {
  console.log("DB connected");
})();

// we have problems with global scope polution problems
// that's why  we use IIFE

// ()()

// this is a unnamed IIFE
// we can also write arrow function in IFFEs
((name) => {
  console.log(`DB connected 2 ${name}`);
})(`rajesh`);
