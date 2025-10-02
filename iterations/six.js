// const coding = ["java", "cpp", "js", "python"];

// // foreach cannot return anything
// const values = coding.forEach((item) => {
//   return item;
// });

// console.log(values);

const myNums = [1, 2, 34, , 56, 7, 90];

// if we open a scope we need to use the return keyword
// filter retuns values
// const result = myNums.filter((num) => num > 4);

// console.log(result);

const newNums = [];

// same thing that filter method can do
myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});

// console.log(newNums);

const books = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    year: 2020,
    genre: "Fiction",
    pages: 304,
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018,
    genre: "Self-Help",
    pages: 320,
  },
  {
    id: 3,
    title: "Project Hail Mary",
    author: "Andy Weir",
    year: 2021,
    genre: "Science Fiction",
    pages: 476,
  },
  {
    id: 4,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    year: 2019,
    genre: "Fiction",
    pages: 336,
  },
  {
    id: 5,
    title: "Educated",
    author: "Tara Westover",
    year: 2018,
    genre: "Memoir",
    pages: 334,
  },
  {
    id: 6,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    year: 2018,
    genre: "Mystery",
    pages: 384,
  },
];

let userBooks = books.filter((element) => {
  return element.genre == "Fiction";
});

userBooks = books.filter(
  (element) => element.year > 2019 && element.genre == "Fiction"
);

// console.log(books);
console.log("*******************************************************");

console.log(userBooks);
