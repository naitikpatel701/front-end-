function showDiscountTag(price) {

    if (price < 500) {
        console.log("Special Discount!");
    } else {
        console.log("Regular Price");
    }

}

showDiscountTag(300);
showDiscountTag(700);