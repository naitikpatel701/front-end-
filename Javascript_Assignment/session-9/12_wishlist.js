
let products = [
    {
        name: "iPhone 15",
        price: 69999
    },
    {
        name: "Samsung Galaxy S24",
        price: 74999
    },
    {
        name: "OnePlus 12",
        price: 59999
    }
];


localStorage.setItem("wishlist", JSON.stringify(products));


let savedWishlist = localStorage.getItem("wishlist");


let wishlist = JSON.parse(savedWishlist);

let output = "";

wishlist.forEach(function(product) {
    output += `
        <h3>${product.name}</h3>
        <p>Price: ₹${product.price}</p>
        <hr>
    `;
});

document.getElementById("wishlist").innerHTML = output;