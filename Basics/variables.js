const accId = 12345;
let email = "chavan12@gmail.com";
var accPass = "12345";
accCity = "Pune";

let accState;
/* 
Prefer not to use var for variable declaration
becoz of issue in block and functional scope
*/

// accId = 23456; // Throws error
email = "chavan121@gmail.com";
accPass = "54321";
accCity = "Mumbai";

console.table([accId, email, accPass, accCity, accState]);
// if we declare a variable and dont give any value it will be undefined by default
