let cart = [
    {
        productName: "Laptop",
        price: 50000,
        quantity: 1
    },
    {
        productName: "Mouse",
        price: 700,
        quantity: 2
    },
    {
        productName: "Keyboard",
        price: 1200,
        quantity: 1
    },
    {
        productName: "Headphones",
        price: 2000,
        quantity: 2
    }
];

for (let product of cart) {
    console.log(product.productName + " = ₹" + (product.price * product.quantity));
}