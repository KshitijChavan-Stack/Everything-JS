// const promiseOne = new Promise((resolve, reject) => {
//   // do an async task
//   // 1. DB task
//   // 2. cryprography , network

//   setTimeout(() => {
//     console.log("Async task is completed");
//     resolve();
//   }, 1000);
// });

// // .then() direct connection with resolve
// promiseOne.then(() => {
//   // this will always run after async task
//   // values will be returned here from the upper promise
//   console.log("promise consumed");
// });

// another way to create the prmomise
// new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log("another way to create a promise");
//     res();
//   }, 2000);
// }).then(() => {
//   // if resolved then only this part will be executed
//   console.log("connecting .then()");
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ username: "chai", email: "example@.com" });
//   }, 1000);
// });

// promise3.then((resolve) => {
//   console.log(resolve); // gives us the object everything that is passed in resolve !!
// });

// promise4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve("resolved no error");
//     } else reject("errors found");
//   }, 1000);
// });

// promise4
//   .then((res) => {
//     console.log(res);
//     console.log("resolved the promise");
//   })
//   .catch((rej) => {
//     console.log(rej);
//     console.log("promise failed");
//   })
//   .finally(() => {
//     console.log("finally the promise is resolved or rejected");
//   });

// const promise5 = new Promise((res, rej) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       res({ username: "JS", password: "1232" });
//     } else rej("Error : JS went wrong");
//   }, 1000);
// });

// // async await can;t directly handle the errors
// async function consumePromiseFive() {
//   try {
//     // this how we need to do to handle the errors is async and await
//     const data = await promise5;
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();

// fetch API returns a promise _-----------------------------------------------
// async function getAllUsers() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json(); // this also takes time to convert do need to await
//     console.log(data);
//   } catch (error) {
//     console.log("Error :", error);
//   }
// }

// getAllUsers();

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error :", error);
  });
