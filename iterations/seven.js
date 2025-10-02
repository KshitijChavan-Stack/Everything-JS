const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map always returns the result
// const newNums = myNums.map((element) => element + 10);

// method chaining
const newNums = myNums
  .map((element) => element * 10)
  // everything that is passed in secont chain is result of frist method
  .map((element) => element + 10)
  .filter((element) => element > 50);

console.log(newNums);
