const order = {
    item: "Pizza",
    price: 350,
    user: "Amit"
};

// Object destructuring
const { item, price, user } = order;

console.log(`${user} ordered ${item} for ₹${price}`);