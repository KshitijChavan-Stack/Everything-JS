let myDate = new Date();

console.log(myDate.toString());
console.log(myDate.toDateString()); // only date and day
console.log(myDate.toTimeString()); // only time
console.log(myDate.toLocaleString()); // according to our location (Date and time both)
// 25/9/2025, 3:14:18 pm

// console.log(typeof myDate); // It is a object

// let myCreatedDate = new Date(2025, 8, 25); // gives us todays date and day
// console.log(myCreatedDate.toLocaleString()); // months start from 0

// let myCreatedDate1 = new Date("2025-09-25"); // any format we can give
// console.log(myCreatedDate1.toLocaleString());

// const myTimeStamp = Date.now(); // gives us the time in milliseconds from 1970
// console.log(myTimeStamp); // this is milliseconds

// console.log(myCreatedDate1.getTime()); // also gives us the time in milliseconds from 1970
console.log(Math.floor(Date.now() / 1000)); // gives us the time in seconds from 1970

// LETS UNDERSTAND MORE METHODS

let newDate = new Date();
console.log(newDate.getFullYear()); // 2025
console.log(newDate.getMonth()); // 8 (months start from 0)
console.log(newDate.getDate()); // 25 (date of month)
console.log(newDate.getDay()); // 4 (day of week start from 0) 0-Sun,1-Mon,2-Tue,3-Wed,4-Thu,5-Fri,6-Sat

// Important methods to set date and time
newDate.toLocaleString("default", {
  month: "short",
}); // Sep
newDate.toLocaleString("default", {
  month: "long",
}); // September
newDate.toLocaleString("default", {
  weekday: "short",
}); // Thu
