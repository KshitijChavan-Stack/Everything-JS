const coding = ["java", "cpp", "js", "python"];

// coding.forEach(function (item) {
//   console.log(item);
// });

// coding.forEach((item) => {
//   console.log(item);
// });

// function printMe(item) {
//   console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//   console.log(`${item} - ${index} - ${arr}`);
// });

const myCoding = [
  {
    lang: "Javascript",
    langFile: "js",
  },
  {
    lang: "python",
    langFile: "py",
  },
  {
    lang: "java",
    langFile: "java",
  },
];

myCoding.forEach((item) => {
  console.log(item.lang);
});
