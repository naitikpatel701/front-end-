const getDiscountedPrice = function(price, discount) {

    return price - (price * discount / 100);

};

console.log(getDiscountedPrice(1000, 20));
console.log(getDiscountedPrice(2500, 10));