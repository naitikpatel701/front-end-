let products = [
  {
    name: "iPhone 15",
    price: 69999,
  },
  {
    name: "Samsung Galaxy S24",
    price: 74999,
  },
  {
    name: "OnePlus 12",
    price: 59999,
  },
];

localStorage.setItem("wishlist", JSON.stringify(products));

function displayWishlist() {
  let saved = localStorage.getItem("wishlist");

  let wishlistDiv = document.getElementById("wishlist");

  if (saved === null) {
    wishlistDiv.innerHTML = "<h3>Wishlist is empty!</h3>";
    return;
  }

  let wishlist = JSON.parse(saved);

  let output = "";

  wishlist.forEach(function (product) {
    output += `
            <div>
                <h3>${product.name}</h3>
                <p>Price: ₹${product.price}</p>
                <hr>
            </div>
        `;
  });

  wishlistDiv.innerHTML = output;
}

function clearWishlist() {
  localStorage.removeItem("wishlist");

  displayWishlist();
}

displayWishlist();
