import { formatPrice, getDiscountedPrice } from "./2-utils.js";
const price = 1000;
const discount = 20;
console.log("Original Price:", formatPrice(price));
console.log(
  "Discounted Price:",
  formatPrice(getDiscountedPrice(price, discount)),
);
