let orders = [
    {
        orderId: 101,
        items: [
            { itemName: "Laptop", price: 50000 },
            { itemName: "Mouse", price: 1000 }
        ],
        delivery: {
            address: "Surat",
            status: "Delivered"
        }
    }
];

for (let order of orders) {
    let total = 0;

    for (let item of order.items) {
        total += item.price;
    }

    console.log("Order ID:", order.orderId);
    console.log("Total Price: ₹" + total);
}