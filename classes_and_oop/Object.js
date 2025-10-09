function multiplyBy5(num) {
  return num * 5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5)); // 25
console.log(multiplyBy5.power); // 2
console.log(multiplyBy5.prototype); // {} by default
// this empty object is the (this of that perticular method)
// but we have nothing in the function just returned it

function createUser(userName, price) {
  this.userName = userName;
  this.price = price;
}

createUser.prototype.increment = function () {
  this.price++; // jisne bhi bulaya hai (this matlab jis)
};

createUser.prototype.printMe = function () {
  console.log(`hello : ${this.userName}`);
  console.log(`price is : ${this.price}`);
};

// this properties are added but we need to tell this function
// that this properties are come with (new) keyword
const chai = new createUser("chai", 30);
const tea = new createUser("tea", 220);

chai.printMe();

// new keyword behind the scene

/*
Here's what happens behind the scenes when the new keyword is used:
A new object is created: The new keyword initiates the creation of a new JavaScript object.
A prototype is linked: The newly created object gets linked
to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.
The constructor is called: The constructor function is
called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this,
the newly created object, to be the intended return value.
The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
*/
