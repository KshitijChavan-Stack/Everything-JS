console.log(2 > 1);
console.log(2 < 1);
console.log(2 >= 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);

// Problem is when we compare two different types
console.log("2" > 1); // true (string "2" is converted to number 2 and then comparison happens)
console.log("01" == 1); // true (string "01" is converted to number 1 and then comparison happens)

// We avoid this converstion most of time when coding
// another problem
console.log(null == 0); // false
console.log(null > 0); // false
console.log(null >= 0); // true the reason is that an eqality check and comparion work differently
// Comparison conver null to a number , treating it as 0 thats why 3. TRUE

// Strict Equality Operator
console.log("2" === 2); // false (no type conversion happens)
console.log("2" !== 2); // true (no type conversion happens)
