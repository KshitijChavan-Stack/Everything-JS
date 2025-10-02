const myNums = [1, 2, 3, 4];

// accumalating the values is power of reduce
let initalVal = 0;
const totalVal = myNums.reduce((acc, current) => {
  console.log(`accu : ${acc} currentVal : ${current}`);

  return acc + current;
}, initalVal);

// console.log(`total is : ${totalVal}`);

const shoppingCart = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    quantity: 1,
    category: "Electronics",
    image: "headphones.jpg",
  },
  {
    id: 2,
    name: "Organic Cotton T-Shirt",
    price: 24.99,
    quantity: 3,
    category: "Clothing",
    image: "tshirt.jpg",
  },
  {
    id: 3,
    name: "Stainless Steel Water Bottle",
    price: 18.5,
    quantity: 2,
    category: "Home & Kitchen",
    image: "bottle.jpg",
  },
  {
    id: 4,
    name: "Yoga Mat - Premium",
    price: 45.0,
    quantity: 1,
    category: "Sports & Fitness",
    image: "yogamat.jpg",
  },
  {
    id: 5,
    name: "LED Desk Lamp",
    price: 32.99,
    quantity: 1,
    category: "Home & Office",
    image: "desklamp.jpg",
  },
  {
    id: 6,
    name: "Running Shoes - Size 10",
    price: 89.99,
    quantity: 1,
    category: "Footwear",
    image: "shoes.jpg",
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => {
  return acc + item.price;
}, 0);

console.log(`This is your total : ${priceToPay}`);
