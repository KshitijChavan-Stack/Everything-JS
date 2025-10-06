function randomColor() {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

let intervalId; // global context scope
document.querySelector("#start").addEventListener("click", () => {
  if (!intervalId) {
    // checking until the dereference is done or not !!
    intervalId = setInterval(() => {
      // interval id is required for clearing it
      document.body.style.backgroundColor = randomColor(); // accessing the dom elements
      console.log(randomColor()); // getting which hex code we're getting
    }, 500);
    console.log(intervalId);
  }
});
console.log(intervalId);

document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(intervalId); // clearing the interval from ID that is declared in global context
  console.log("Random Color stoped !!"); // giving a notify message
  intervalId = null; // derefernce -> more optimization
});
