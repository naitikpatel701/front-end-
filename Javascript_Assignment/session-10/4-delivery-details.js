function getDeliveryDetails(
    address = "Ahmedabad",
    paymentMethod = "UPI"
) {
    console.log(`Delivery Address: ${address}, Payment Method: ${paymentMethod}`);
}

// Call without arguments
getDeliveryDetails();

// Call with custom values
getDeliveryDetails("Surat", "Cash on Delivery");